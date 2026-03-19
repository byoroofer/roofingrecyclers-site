import { ButtonLink } from "@/components/site/button-link";
import { PageHero } from "@/components/site/page-hero";
import { PhotoPanel } from "@/components/site/photo-panel";
import { ProcessDiagram } from "@/components/site/process-diagram";
import { SectionShell } from "@/components/site/section-shell";
import {
  howItWorksHero,
  hubStrategyItems,
  modelSteps,
  operatingPrinciples,
  rasValueCards,
} from "@/content/site-content";
import { buildMetadata } from "@/lib/site/metadata";

export const metadata = buildMetadata({
  title: "How It Works | Roofing Recyclers",
  description:
    "See how Roofing Recyclers approaches shingle intake, RAS processing, downstream use, and regional hub expansion.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <PageHero content={howItWorksHero} />

      <SectionShell
        description="The operating loop starts with inbound roofing material and builds toward traceable processing plus downstream product relevance."
        eyebrow="Process"
        title="From tear-off shingles to a more useful materials pathway"
      >
        <ProcessDiagram steps={modelSteps} />
      </SectionShell>

      <SectionShell
        description="RAS is the practical bridge between recovered shingles and paving-related value, but only when the processing side is disciplined."
        eyebrow="RAS in the system"
        title="From shingles to spec-aware feedstock"
      >
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="grid gap-4">
            {rasValueCards.map((item) => (
              <div className="surface-card" key={item.title}>
                <h2 className="text-2xl font-semibold text-[var(--rr-text)]">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--rr-muted)]">{item.description}</p>
              </div>
            ))}

            <div className="surface-card">
              <h2 className="text-2xl font-semibold text-[var(--rr-text)]">
                Market fit is region-specific
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--rr-muted)]">
                Mix acceptance, plant preferences, and jurisdictional requirements vary by market.
                That is why downstream partner alignment is treated as part of the operating model,
                not a sales task saved for later.
              </p>
            </div>
          </div>

          <PhotoPanel
            alt="A road roller on freshly laid asphalt."
            frameClassName="min-h-[22rem] sm:min-h-[32rem]"
            overlay={
              <div className="max-w-lg space-y-4">
                <span className="inline-flex rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/88">
                  Downstream applications
                </span>
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    Processing only matters if the output has somewhere credible to go.
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-white/80">
                    The business plan is designed around real end-market relevance, not around
                    stockpiling recycled material and hoping demand appears later.
                  </p>
                </div>
              </div>
            }
            src="/images/deck/road-roller.jpg"
          />
        </div>
      </SectionShell>

      <SectionShell
        description="A real regional platform depends on more than equipment. It requires recurring supply, disciplined operating standards, logistics, and partner readiness."
        eyebrow="Regional hub strategy"
        title="How a regional operating system gets built"
      >
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="surface-card">
            <h2 className="text-2xl font-semibold text-[var(--rr-text)]">Hub inputs</h2>
            <ul className="mt-6 space-y-4">
              {hubStrategyItems.map((item) => (
                <li className="flex gap-3 text-sm leading-7 text-[var(--rr-muted)]" key={item}>
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--rr-accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4">
            {operatingPrinciples.map((item) => (
              <div className="surface-card" key={item.title}>
                <h3 className="text-xl font-semibold text-[var(--rr-text)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--rr-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        description="The long-term platform is more than processing capacity. It is a combination of partner programs, reporting, and future network visibility."
        eyebrow="Program layers"
        title="How this becomes a scalable platform instead of a one-off operation"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Partner layer",
              description:
                "Contractor, municipal, manufacturer, and processor relationships create recurring relevance and more durable expansion.",
            },
            {
              title: "Reporting layer",
              description:
                "Impact reporting, intake visibility, and admin-ready lead capture set up the future data side of the company.",
            },
            {
              title: "Expansion layer",
              description:
                "New hubs can be added where supply, logistics, downstream demand, and capital alignment create stronger economics.",
            },
          ].map((item) => (
            <div className="surface-card" key={item.title}>
              <h2 className="text-2xl font-semibold text-[var(--rr-text)]">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--rr-muted)]">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <div className="flex justify-end">
        <ButtonLink href="/solutions" variant="secondary">
          Explore stakeholder solutions
        </ButtonLink>
      </div>
    </main>
  );
}
