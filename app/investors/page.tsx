import { Suspense } from "react";

import { LeadForm } from "@/components/site/lead-form";
import { PageHero } from "@/components/site/page-hero";
import { SectionShell } from "@/components/site/section-shell";
import { investorHero, investorMoatCards, investorPoints } from "@/content/site-content";
import { buildMetadata } from "@/lib/site/metadata";

export const metadata = buildMetadata({
  title: "Investor / Capital Partners | Roofing Recyclers",
  description:
    "Roofing Recyclers is building an early industrial platform around asphalt shingle recycling, regional hubs, and downstream infrastructure value.",
  path: "/investors",
});

function InvestorFormFallback() {
  return (
    <div className="surface-card">
      <span className="eyebrow">Lead capture</span>
      <h2 className="mt-5 text-3xl font-semibold text-[var(--rr-text)]">
        Loading the investor inquiry form
      </h2>
      <p className="mt-4 text-sm leading-7 text-[var(--rr-muted)]">
        The form hydrates on the client so the page can stay pre-rendered and fast.
      </p>
    </div>
  );
}

export default function InvestorsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <PageHero content={investorHero} />

      <SectionShell
        description="The thesis is meant to read as an overlooked industrial category with multiple leverage points, not as generic sustainability hype."
        eyebrow="Why this can matter"
        title="A serious case for early attention from capital partners"
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-card">
            <h2 className="text-2xl font-semibold text-[var(--rr-text)]">Core reasons to look closely</h2>
            <ul className="mt-6 space-y-4">
              {investorPoints.map((item) => (
                <li className="flex gap-3 text-sm leading-7 text-[var(--rr-muted)]" key={item}>
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--rr-accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {investorMoatCards.map((item) => (
              <div className="surface-card" key={item.title}>
                <h3 className="text-xl font-semibold text-[var(--rr-text)]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--rr-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        description="The public site should invite serious conversations while keeping room for more detailed private follow-up later."
        eyebrow="Private discussions"
        title="Request a direct investor conversation"
      >
        <Suspense fallback={<InvestorFormFallback />}>
          <LeadForm
            defaultInquiryType="investor"
            description="Use this form for capital partnership conversations, strategic operator discussions, and private requests for a deeper conversation."
            sourcePage="/investors"
            submitLabel="Request Discussion"
            title="Investor / capital partner inquiry"
          />
        </Suspense>
      </SectionShell>
    </main>
  );
}
