import { Suspense } from "react";

import { LeadForm } from "@/components/site/lead-form";
import { PageHero } from "@/components/site/page-hero";
import { SectionShell } from "@/components/site/section-shell";
import { contactHero, contactRoutingCards } from "@/content/site-content";
import { buildMetadata } from "@/lib/site/metadata";

export const metadata = buildMetadata({
  title: "Contact | Roofing Recyclers",
  description:
    "Contact Roofing Recyclers for investor, contractor, manufacturer, municipality, partner, media, and policy inquiries.",
  path: "/contact",
});

function ContactFormFallback() {
  return (
    <div className="surface-card">
      <span className="eyebrow">Lead capture</span>
      <h2 className="mt-5 text-3xl font-semibold text-[var(--rr-text)]">Loading the contact form</h2>
      <p className="mt-4 text-sm leading-7 text-[var(--rr-muted)]">
        The form hydrates on the client so the page can still be statically rendered.
      </p>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <PageHero content={contactHero} />

      <SectionShell
        description="The contact flow is segmented so serious inbound interest can be routed cleanly and reviewed later inside Supabase."
        eyebrow="Inquiry routing"
        title="One intake point, multiple stakeholder paths"
      >
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-4">
            {contactRoutingCards.map((item) => (
              <div className="surface-card" key={item.title}>
                <h2 className="text-2xl font-semibold text-[var(--rr-text)]">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--rr-muted)]">{item.description}</p>
              </div>
            ))}
          </div>

          <Suspense fallback={<ContactFormFallback />}>
            <LeadForm
              description="Choose the closest inquiry type, add enough context, and the submission will be stored in the lead intake table for follow-up."
              sourcePage="/contact"
              submitLabel="Send Inquiry"
              title="Contact Roofing Recyclers"
            />
          </Suspense>
        </div>
      </SectionShell>
    </main>
  );
}
