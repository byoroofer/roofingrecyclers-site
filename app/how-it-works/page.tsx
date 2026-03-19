import { ButtonLink } from "@/components/site/button-link";
import { PageHero } from "@/components/site/page-hero";
import { ProcessDiagram } from "@/components/site/process-diagram";
import { SectionShell } from "@/components/site/section-shell";
import {
  howItWorksHero,
  hubStrategyItems,
  modelSteps,
  operatingPrinciples,
} from "@/content/site-content";
import { buildMetadata } from "@/lib/site/metadata";

export const metadata = buildMetadata({
  title: "How It Works | Roofing Recyclers",
  description:
    "See how Roofing Recyclers approaches shingle intake, processing, downstream use, and regional hub expansion.",
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
