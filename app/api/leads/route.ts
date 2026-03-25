import { NextResponse } from "next/server";

import { sendLeadNotificationEmail } from "@/lib/email/lead-notifications";
import { createServiceRoleClient } from "@/lib/supabase/service-role";
import { leadSchema } from "@/lib/validation/lead";
import type { Database } from "@/types/database";

function normalizeOptionalValue(value: string | undefined) {
  return value && value.trim().length > 0 ? value.trim() : null;
}

function sanitizeNoteValue(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function buildNotificationNote(
  status: "sent" | "skipped" | "failed",
  details: Record<string, string | null | undefined>,
) {
  const timestamp = new Date().toISOString();
  const parts = Object.entries(details)
    .filter(([, value]) => value && value.trim().length > 0)
    .map(([key, value]) => `${key}=${sanitizeNoteValue(value!)}`);

  return `[${timestamp}] notification=${status}${parts.length > 0 ? ` ${parts.join(" ")}` : ""}`;
}

async function appendLeadNote(
  supabase: ReturnType<typeof createServiceRoleClient>,
  leadId: string,
  existingNotes: string | null,
  note: string,
) {
  const combinedNotes = existingNotes ? `${existingNotes}\n${note}` : note;

  const { error } = await supabase
    .from("inbound_leads")
    .update({ notes: combinedNotes })
    .eq("id", leadId);

  if (error) {
    throw error;
  }
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body.", success: false },
      { status: 400 },
    );
  }

  const parsed = leadSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: parsed.error.issues[0]?.message ?? "Please review the form and try again.",
        success: false,
      },
      { status: 400 },
    );
  }

  const lead = parsed.data;

  try {
    const supabase = createServiceRoleClient();
    const insertPayload: Database["public"]["Tables"]["inbound_leads"]["Insert"] = {
      inquiry_type: lead.inquiryType,
      full_name: lead.fullName,
      company_name: normalizeOptionalValue(lead.companyName),
      email: lead.email,
      phone: normalizeOptionalValue(lead.phone),
      state: normalizeOptionalValue(lead.state),
      message: lead.message,
      organization_type: normalizeOptionalValue(lead.organizationType),
      interest_area: normalizeOptionalValue(lead.interestArea),
      source_page: normalizeOptionalValue(lead.sourcePage),
      status: "new",
    };

    const { data: insertedLead, error } = await supabase
      .from("inbound_leads")
      .insert(insertPayload)
      .select("id, notes")
      .single();

    if (error) {
      throw error;
    }

    try {
      const notificationResult = await sendLeadNotificationEmail(lead);
      const note = notificationResult.delivered
        ? buildNotificationNote("sent", {
            messageId: notificationResult.messageId,
            recipient: notificationResult.recipient,
          })
        : buildNotificationNote("skipped", {
            reason: notificationResult.reason,
            recipient: notificationResult.recipient,
          });

      await appendLeadNote(supabase, insertedLead.id, insertedLead.notes, note);
    } catch (notificationError) {
      console.error("Lead stored but email notification failed.", notificationError);

      const note = buildNotificationNote("failed", {
        error:
          notificationError instanceof Error
            ? notificationError.message
            : "Unknown notification error",
      });

      try {
        await appendLeadNote(supabase, insertedLead.id, insertedLead.notes, note);
      } catch (notesError) {
        console.error(
          "Lead stored but notification audit note failed.",
          notesError,
        );
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to store the inquiry right now.",
        success: false,
      },
      { status: 500 },
    );
  }
}
