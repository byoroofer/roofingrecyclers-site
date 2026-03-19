"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import {
  inquiryTypeOptions,
  interestAreaOptions,
  organizationTypeOptions,
  usStateOptions,
} from "@/content/site-content";
import { leadInquiryTypes, leadSchema } from "@/lib/validation/lead";
import type { LeadInquiryType } from "@/types/lead";

interface LeadFormProps {
  sourcePage: string;
  defaultInquiryType?: LeadInquiryType;
  title?: string;
  description?: string;
  submitLabel?: string;
}

interface FormState {
  inquiryType: LeadInquiryType;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  state: string;
  message: string;
  organizationType: string;
  interestArea: string;
}

const initialState: Omit<FormState, "inquiryType"> = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  state: "",
  message: "",
  organizationType: "",
  interestArea: "",
};

function isLeadInquiryType(value: string | null): value is LeadInquiryType {
  return leadInquiryTypes.includes(value as LeadInquiryType);
}

export function LeadForm({
  sourcePage,
  defaultInquiryType = "other",
  title = "Start a conversation",
  description = "Send enough context for the team to route your inquiry quickly and professionally.",
  submitLabel = "Submit Inquiry",
}: LeadFormProps) {
  const searchParams = useSearchParams();
  const queryInquiryType = searchParams.get("type");

  const resolvedInquiryType = useMemo(
    () => (isLeadInquiryType(queryInquiryType) ? queryInquiryType : defaultInquiryType),
    [defaultInquiryType, queryInquiryType],
  );

  const [formState, setFormState] = useState<FormState>({
    inquiryType: resolvedInquiryType,
    ...initialState,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setFormState((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const payload = {
      ...formState,
      sourcePage,
    };

    const parsed = leadSchema.safeParse(payload);

    if (!parsed.success) {
      setStatus("error");
      setMessage(parsed.error.issues[0]?.message ?? "Please review the form and try again.");
      return;
    }

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const result = (await response.json()) as { error?: string; success?: boolean };

      if (!response.ok || !result.success) {
        throw new Error(result.error ?? "Unable to submit your inquiry right now.");
      }

      setStatus("success");
      setMessage("Your inquiry has been received. A team member will follow up shortly.");
      setFormState({
        inquiryType: resolvedInquiryType,
        ...initialState,
      });
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit your inquiry.");
    }
  }

  return (
    <div className="surface-card">
      <div className="max-w-2xl">
        <span className="eyebrow">Lead capture</span>
        <h2 className="mt-5 text-3xl font-semibold text-[var(--rr-text)]">{title}</h2>
        <p className="mt-4 text-sm leading-7 text-[var(--rr-muted)]">{description}</p>
      </div>

      <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="field">
            <span>Inquiry Type</span>
            <select
              className="input"
              onChange={(event) =>
                updateField("inquiryType", event.target.value as LeadInquiryType)
              }
              value={formState.inquiryType}
            >
              {inquiryTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Full Name</span>
            <input
              className="input"
              onChange={(event) => updateField("fullName", event.target.value)}
              required
              value={formState.fullName}
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="field">
            <span>Company Name</span>
            <input
              className="input"
              onChange={(event) => updateField("companyName", event.target.value)}
              value={formState.companyName}
            />
          </label>

          <label className="field">
            <span>Email</span>
            <input
              className="input"
              onChange={(event) => updateField("email", event.target.value)}
              required
              type="email"
              value={formState.email}
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="field">
            <span>Phone</span>
            <input
              className="input"
              onChange={(event) => updateField("phone", event.target.value)}
              value={formState.phone}
            />
          </label>

          <label className="field">
            <span>State</span>
            <select
              className="input"
              onChange={(event) => updateField("state", event.target.value)}
              value={formState.state}
            >
              <option value="">Select a state</option>
              {usStateOptions.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="field">
            <span>Organization Type</span>
            <select
              className="input"
              onChange={(event) => updateField("organizationType", event.target.value)}
              value={formState.organizationType}
            >
              <option value="">Select one</option>
              {organizationTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Primary Interest Area</span>
            <select
              className="input"
              onChange={(event) => updateField("interestArea", event.target.value)}
              value={formState.interestArea}
            >
              <option value="">Select one</option>
              {interestAreaOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="field">
          <span>Message</span>
          <textarea
            className="input min-h-40 resize-y"
            onChange={(event) => updateField("message", event.target.value)}
            required
            value={formState.message}
          />
        </label>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            className="inline-flex items-center justify-center rounded-full bg-[var(--rr-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--rr-accent-strong)] disabled:cursor-not-allowed disabled:opacity-70"
            disabled={status === "submitting"}
            type="submit"
          >
            {status === "submitting" ? "Submitting..." : submitLabel}
          </button>

          <p aria-live="polite" className="max-w-xl text-sm text-[var(--rr-muted)]">
            {message}
          </p>
        </div>
      </form>
    </div>
  );
}
