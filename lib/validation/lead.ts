import { z } from "zod";

export const leadInquiryTypes = [
  "investor",
  "contractor",
  "manufacturer",
  "municipality",
  "landfill",
  "strategic-partner",
  "media",
  "other",
] as const;

const optionalText = (maxLength: number) =>
  z
    .string()
    .trim()
    .max(maxLength)
    .optional()
    .or(z.literal(""));

export const leadSchema = z.object({
  inquiryType: z.enum(leadInquiryTypes, {
    errorMap: () => ({ message: "Select the type of inquiry you want to send." }),
  }),
  fullName: z
    .string()
    .trim()
    .min(2, "Enter the full name for the person reaching out.")
    .max(120),
  companyName: optionalText(120),
  email: z.string().trim().email("Enter a valid email address.").max(160),
  phone: optionalText(40),
  state: optionalText(50),
  message: z
    .string()
    .trim()
    .min(20, "Add a little more detail so the team can route the inquiry.")
    .max(2500),
  organizationType: optionalText(120),
  interestArea: optionalText(120),
  sourcePage: optionalText(120),
});

export type LeadSchema = z.infer<typeof leadSchema>;
