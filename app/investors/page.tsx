import { Suspense } from "react";

import { LeadForm } from "@/components/site/lead-form";
import { PageHero } from "@/components/site/page-hero";
import { PhotoPanel } from "@/components/site/photo-panel";
import { SectionShell } from "@/components/site/section-shell";
import {
  businessPlanCards,
  investorHero,
  investorMoatCards,
  investorPoints,
  rasValueCards,
  regulatoryApproachCards,
  relationshipNetworkCards,
} from "@/content/site-content";
import { buildMetadata } from "@/lib/site/metadata";

export const metadata = buildMetadata({
  title: "Investor / Capital Partners | Roofing Recyclers",
  description:
    "Roofing Recyclers is building an early industrial platform around asphalt shingles, RAS, regional hubs, and downstream infrastructure value.",
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
        description="Recycled asphalt shingles are central to the business-plan logic because they connect waste recovery to an actual materials market."
        eyebrow="RAS and downstream value"
        title="Why the output side of the model matters"
      >
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <PhotoPanel
            alt="Road paving equipment on fresh asphalt."
            frameClassName="min-h-[22rem] sm:min-h-[30rem]"
            overlay={
              <div className="max-w-lg space-y-4">
                <span className="inline-flex rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/88">
                  Downstream asphalt relevance
                </span>
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    RAS is the bridge between landfill diversion and industrial value.
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-white/80">
                    The capital thesis strengthens when processed shingles have a credible path into
                    paving-related demand instead of ending as a recycling story without a market.
                  </p>
                </div>
              </div>
            }
            src="/images/deck/road-roller.jpg"
          />

          <div className="grid gap-4 md:grid-cols-2">
            {rasValueCards.map((item) => (
              <div className="surface-card" key={item.title}>
                <h2 className="text-2xl font-semibold text-[var(--rr-text)]">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--rr-muted)]">{item.description}</p>
              </div>
            ))}

            <div className="surface-card">
              <h2 className="text-2xl font-semibold text-[var(--rr-text)]">
                Spec and jurisdiction matter
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--rr-muted)]">
                Mix acceptance varies by plant, market, and specification. The point on this public
                site is not one exact percentage. It is that processed shingles can become valuable
                feedstock when downstream fit and quality discipline are both real.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        description="The original business plan and the current capital story follow the same sequence: secure supply, process to spec, prove downstream demand, then expand region by region."
        eyebrow="Business-plan architecture"
        title="How the model is designed to compound"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {businessPlanCards.map((item) => (
            <div className="surface-card" key={item.title}>
              <h2 className="text-2xl font-semibold text-[var(--rr-text)]">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--rr-muted)]">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        description="The deck thesis was explicit that regulation, municipal fit, and public-affairs work could shape category adoption. The public site should reflect that without making promises it cannot verify."
        eyebrow="Regulatory and public-affairs angle"
        title="Policy fluency is part of the execution story"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {regulatoryApproachCards.map((item) => (
            <div className="surface-card" key={item.title}>
              <h2 className="text-2xl font-semibold text-[var(--rr-text)]">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--rr-muted)]">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="surface-card mt-4">
          <p className="text-sm leading-7 text-[var(--rr-muted)]">
            Roofing Recyclers is not using this public page to claim any specific subsidy,
            exemption, or regulatory outcome. The point is that a serious operator in this category
            needs to understand public-sector realities early and position the company accordingly.
          </p>
        </div>
      </SectionShell>

      <SectionShell
        description="The original deck also made a relationship argument: this category will not be organized by equipment alone. It will be organized by who can align the right people."
        eyebrow="Relationship-led execution"
        title="Industry connections are part of the capital thesis"
      >
        <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
          <PhotoPanel
            alt="TJ Ware with roofing industry peers."
            frameClassName="min-h-[22rem] sm:min-h-[30rem]"
            overlay={
              <div className="max-w-lg space-y-4">
                <span className="inline-flex rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/88">
                  Relationship density
                </span>
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    This market rewards access, credibility, and coalition building.
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-white/80">
                    Contractors, manufacturers, municipalities, public stakeholders, and capital
                    partners all need reasons to trust the same platform.
                  </p>
                </div>
              </div>
            }
            src="/images/deck/industry-network.jpg"
          />

          <div className="grid gap-4 md:grid-cols-2">
            {relationshipNetworkCards.map((item) => (
              <div className="surface-card" key={item.title}>
                <h2 className="text-2xl font-semibold text-[var(--rr-text)]">{item.title}</h2>
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
