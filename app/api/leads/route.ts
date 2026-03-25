import { NextResponse } from "next/server";

import {
  sendLeadConfirmationEmail,
  sendLeadNotificationEmail,
} from "@/lib/email/lead-notifications";
import { createServiceRoleClient } from "@/lib/supabase/service-role";
import { leadSchema } from "@/lib/validation/lead";
import type { Database } from "@/types/database";

function normalizeOptionalValue(value: string | undefined) {
  return value && value.trim().length > 0 ? value.trim() : null;
}

function sanitizeNoteValue(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function buildDeliveryNote(
  channel: "internal_notification" | "submitter_confirmation",
  status: "sent" | "skipped" | "failed",
  details: Record<string, string | null | undefined>,
) {
  const timestamp = new Date().toISOString();
  const parts = Object.entries(details)
    .filter(([, value]) => value && value.trim().length > 0)
    .map(([key, value]) => `${key}=${sanitizeNoteValue(value!)}`);

  return `[${timestamp}] ${channel}=${status}${parts.length > 0 ? ` ${parts.join(" ")}` : ""}`;
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

  return combinedNotes;
}

async function findRecentDuplicateLead(
  supabase: ReturnType<typeof createServiceRoleClient>,
  lead: Database["public"]["Tables"]["inbound_leads"]["Insert"],
) {
  const duplicateWindowStart = new Date(Date.now() - 10 * 60 * 1000).toISOString();

  const { data, error } = await supabase
    .from("inbound_leads")
    .select("id")
    .ilike("email", lead.email)
    .eq("full_name", lead.full_name)
    .eq("message", lead.message)
    .eq("inquiry_type", lead.inquiry_type)
    .gte("created_at", duplicateWindowStart)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
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

    const duplicateLead = await findRecentDuplicateLead(supabase, insertPayload);

    if (duplicateLead) {
      return NextResponse.json({ duplicate: true, success: true });
    }

    const { data: insertedLead, error } = await supabase
      .from("inbound_leads")
      .insert(insertPayload)
      .select("id, notes")
      .single();

    if (error) {
      throw error;
    }

    let currentNotes = insertedLead.notes;

    try {
      const notificationResult = await sendLeadNotificationEmail(lead);
      const note = notificationResult.delivered
        ? buildDeliveryNote("internal_notification", "sent", {
            messageId: notificationResult.messageId,
            recipient: notificationResult.recipient,
          })
        : buildDeliveryNote("internal_notification", "skipped", {
            reason: notificationResult.reason,
            recipient: notificationResult.recipient,
          });

      currentNotes = await appendLeadNote(
        supabase,
        insertedLead.id,
        currentNotes,
        note,
      );
    } catch (notificationError) {
      console.error("Lead stored but email notification failed.", notificationError);

      const note = buildDeliveryNote("internal_notification", "failed", {
        error:
          notificationError instanceof Error
            ? notificationError.message
            : "Unknown notification error",
      });

      try {
        currentNotes = await appendLeadNote(
          supabase,
          insertedLead.id,
          currentNotes,
          note,
        );
      } catch (notesError) {
        console.error(
          "Lead stored but notification audit note failed.",
          notesError,
        );
      }
    }

    try {
      const confirmationResult = await sendLeadConfirmationEmail(lead);
      const note = confirmationResult.delivered
        ? buildDeliveryNote("submitter_confirmation", "sent", {
            messageId: confirmationResult.messageId,
            recipient: confirmationResult.recipient,
          })
        : buildDeliveryNote("submitter_confirmation", "skipped", {
            reason: confirmationResult.reason,
            recipient: confirmationResult.recipient,
          });

      currentNotes = await appendLeadNote(
        supabase,
        insertedLead.id,
        currentNotes,
        note,
      );
    } catch (confirmationError) {
      console.error(
        "Lead stored but submitter confirmation email failed.",
        confirmationError,
      );

      const note = buildDeliveryNote("submitter_confirmation", "failed", {
        error:
          confirmationError instanceof Error
            ? confirmationError.message
            : "Unknown confirmation error",
      });

      try {
        await appendLeadNote(supabase, insertedLead.id, currentNotes, note);
      } catch (notesError) {
        console.error(
          "Lead stored but confirmation audit note failed.",
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
