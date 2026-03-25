import { NextResponse } from "next/server";

import { sendLeadNotificationEmail } from "@/lib/email/lead-notifications";
import { createServiceRoleClient } from "@/lib/supabase/service-role";
import { leadSchema } from "@/lib/validation/lead";
import type { Database } from "@/types/database";

function normalizeOptionalValue(value: string | undefined) {
  return value && value.trim().length > 0 ? value.trim() : null;
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

    const { error } = await supabase.from("inbound_leads").insert(insertPayload);

    if (error) {
      throw error;
    }

    try {
      await sendLeadNotificationEmail(lead);
    } catch (notificationError) {
      console.error("Lead stored but email notification failed.", notificationError);
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
