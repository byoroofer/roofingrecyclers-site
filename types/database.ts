export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      inbound_leads: {
        Row: {
          company_name: string | null;
          created_at: string;
          email: string;
          full_name: string;
          id: string;
          inquiry_type: string;
          interest_area: string | null;
          message: string;
          notes: string | null;
          organization_type: string | null;
          phone: string | null;
          source_page: string | null;
          state: string | null;
          status: string;
          updated_at: string;
        };
        Insert: {
          company_name?: string | null;
          created_at?: string;
          email: string;
          full_name: string;
          id?: string;
          inquiry_type: string;
          interest_area?: string | null;
          message: string;
          notes?: string | null;
          organization_type?: string | null;
          phone?: string | null;
          source_page?: string | null;
          state?: string | null;
          status?: string;
          updated_at?: string;
        };
        Update: {
          company_name?: string | null;
          created_at?: string;
          email?: string;
          full_name?: string;
          id?: string;
          inquiry_type?: string;
          interest_area?: string | null;
          message?: string;
          notes?: string | null;
          organization_type?: string | null;
          phone?: string | null;
          source_page?: string | null;
          state?: string | null;
          status?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
