import "server-only";

import nodemailer from "nodemailer";

import type { LeadSchema } from "@/lib/validation/lead";

const DEFAULT_NOTIFICATION_EMAIL = "warephoto@yahoo.com";
const DEFAULT_FROM_NAME = "Roofing Recyclers Contact Form";

const inquiryTypeLabels: Record<LeadSchema["inquiryType"], string> = {
  investor: "Investor / Capital Partner",
  contractor: "Roofing Contractor",
  manufacturer: "Manufacturer",
  municipality: "Municipality / Public Sector",
  landfill: "Landfill Operator",
  "strategic-partner": "Strategic Partner / Operator",
  media: "Media / Speaking",
  other: "Other",
};

function formatOptionalValue(value: string | undefined) {
  return value && value.trim().length > 0 ? value.trim() : "Not provided";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getMailConfig() {
  const host = process.env.SMTP_HOST;
  const portValue = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  const from = process.env.EMAIL_FROM;
  const to = process.env.LEAD_NOTIFICATION_EMAIL ?? DEFAULT_NOTIFICATION_EMAIL;

  if (!host || !portValue || !user || !password || !from) {
    return null;
  }

  const port = Number(portValue);

  if (Number.isNaN(port)) {
    throw new Error("SMTP_PORT must be a valid number.");
  }

  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  return {
    auth: { user, pass: password },
    from,
    host,
    port,
    secure,
    to,
  };
}

type LeadNotificationResult =
  | {
      delivered: false;
      skipped: true;
      reason: "missing_config";
      recipient: string;
    }
  | {
      delivered: true;
      skipped: false;
      messageId: string;
      recipient: string;
    };

function buildFromHeader(from: string) {
  return `"${DEFAULT_FROM_NAME}" <${from}>`;
}

function buildConfirmationTextBody(lead: LeadSchema) {
  return [
    "Roofing Recyclers received your submission.",
    "",
    `Thank you for reaching out, ${lead.fullName}.`,
    "",
    "A team member will review your inquiry and follow up directly.",
    "If appropriate for your inquiry, we can send the prospectus in a later follow-up.",
    "",
    "This is an automated confirmation that your submission was received.",
  ].join("\n");
}

function buildTextBody(lead: LeadSchema) {
  return [
    "Roofing Recyclers Contact Form submission",
    "",
    `Inquiry type: ${inquiryTypeLabels[lead.inquiryType]}`,
    `Full name: ${lead.fullName}`,
    `Company: ${formatOptionalValue(lead.companyName)}`,
    `Email: ${lead.email}`,
    `Phone: ${formatOptionalValue(lead.phone)}`,
    `State: ${formatOptionalValue(lead.state)}`,
    `Organization type: ${formatOptionalValue(lead.organizationType)}`,
    `Interest area: ${formatOptionalValue(lead.interestArea)}`,
    `Source page: ${formatOptionalValue(lead.sourcePage)}`,
    "",
      "Message:",
    lead.message,
  ].join("\n");
}

function buildHtmlBody(lead: LeadSchema) {
  const rows = [
    ["Inquiry type", inquiryTypeLabels[lead.inquiryType]],
    ["Full name", lead.fullName],
    ["Company", formatOptionalValue(lead.companyName)],
    ["Email", lead.email],
    ["Phone", formatOptionalValue(lead.phone)],
    ["State", formatOptionalValue(lead.state)],
    ["Organization type", formatOptionalValue(lead.organizationType)],
    ["Interest area", formatOptionalValue(lead.interestArea)],
    ["Source page", formatOptionalValue(lead.sourcePage)],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #132019; line-height: 1.6;">
      <h1 style="font-size: 20px; margin-bottom: 16px;">Roofing Recyclers Contact Form</h1>
      <table style="border-collapse: collapse; width: 100%; max-width: 720px;">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <td style="padding: 10px 12px; border: 1px solid #d6ddd7; font-weight: 700; width: 180px;">${escapeHtml(label)}</td>
                  <td style="padding: 10px 12px; border: 1px solid #d6ddd7;">${escapeHtml(value)}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
      <h2 style="font-size: 16px; margin: 24px 0 8px;">Message</h2>
      <div style="padding: 14px 16px; border: 1px solid #d6ddd7; border-radius: 12px; background: #f6f8f7; white-space: pre-wrap;">${escapeHtml(lead.message)}</div>
    </div>
  `;
}

function buildConfirmationHtmlBody(lead: LeadSchema) {
  return `
    <div style="font-family: Arial, sans-serif; color: #132019; line-height: 1.6;">
      <h1 style="font-size: 20px; margin-bottom: 16px;">Roofing Recyclers</h1>
      <p style="margin: 0 0 14px;">We received your submission.</p>
      <p style="margin: 0 0 14px;">Thank you for reaching out, ${escapeHtml(lead.fullName)}.</p>
      <p style="margin: 0 0 14px;">
        A team member will review your inquiry and follow up directly. If appropriate for your inquiry,
        we can send the prospectus in a later follow-up.
      </p>
      <p style="margin: 22px 0 0; color: #4d5f56; font-size: 14px;">
        This is an automated confirmation that your submission was received.
      </p>
    </div>
  `;
}

async function sendLeadEmail({
  html,
  recipient,
  subject,
  text,
}: {
  html: string;
  recipient: string;
  subject: string;
  text: string;
}) {
  const config = getMailConfig();

  if (!config) {
    return {
      delivered: false as const,
      skipped: true as const,
      reason: "missing_config" as const,
      recipient,
    } satisfies LeadNotificationResult;
  }

  const transporter = nodemailer.createTransport({
    auth: config.auth,
    host: config.host,
    port: config.port,
    secure: config.secure,
  });

  const info = await transporter.sendMail({
    from: buildFromHeader(config.from),
    html,
    subject,
    text,
    to: recipient,
  });

  return {
    delivered: true as const,
    skipped: false as const,
    messageId: info.messageId,
    recipient,
  } satisfies LeadNotificationResult;
}

export async function sendLeadNotificationEmail(lead: LeadSchema) {
  return sendLeadEmail({
    html: buildHtmlBody(lead),
    recipient: process.env.LEAD_NOTIFICATION_EMAIL ?? DEFAULT_NOTIFICATION_EMAIL,
    subject: `Roofing Recyclers Contact Form | ${inquiryTypeLabels[lead.inquiryType]} inquiry from ${lead.fullName}`,
    text: buildTextBody(lead),
  });
}

export async function sendLeadConfirmationEmail(lead: LeadSchema) {
  return sendLeadEmail({
    html: buildConfirmationHtmlBody(lead),
    recipient: lead.email,
    subject: "Roofing Recyclers | Submission received",
    text: buildConfirmationTextBody(lead),
  });
}
