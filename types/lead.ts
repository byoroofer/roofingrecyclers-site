export type LeadInquiryType =
  | "investor"
  | "contractor"
  | "manufacturer"
  | "municipality"
  | "landfill"
  | "strategic-partner"
  | "media"
  | "other";

export interface LeadFormInput {
  inquiryType: LeadInquiryType;
  fullName: string;
  companyName?: string;
  email: string;
  phone?: string;
  state?: string;
  message: string;
  organizationType?: string;
  interestArea?: string;
  sourcePage?: string;
}
