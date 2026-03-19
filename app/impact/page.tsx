import { ButtonLink } from "@/components/site/button-link";
import { PageHero } from "@/components/site/page-hero";
import { SectionShell } from "@/components/site/section-shell";
import { StatGrid } from "@/components/site/stat-grid";
import { futureDataTools, impactHero, impactMetrics, impactPillars } from "@/content/site-content";
import { buildMetadata } from "@/lib/site/metadata";

export const metadata = buildMetadata({
  title: "Impact | Roofing Recyclers",
  description:
    "Explore Roofing Recyclers' impact framing around landfill diversion, petroleum-offset logic, and future reporting infrastructure.",
  path: "/impact",
});

export default function ImpactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <PageHero content={impactHero} />

      <SectionShell
        description="The current metric blocks are intentionally structured as placeholders so the company can replace them with reported data later."
        eyebrow="Metrics foundation"
        title="Impact presentation designed for future live reporting"
      >
        <div className="grid gap-6">
          <StatGrid items={impactMetrics} />
          <div className="surface-card">
            <p className="text-sm leading-7 text-[var(--rr-muted)]">
              Placeholder metrics are used deliberately in this MVP so the visual system, database
              patterns, and public reporting architecture are ready for facility-level numbers when
              they are available.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        description="The impact case only becomes credible when it connects environmental results with real industrial logic."
        eyebrow="Impact framing"
        title="Three ways the company should measure what matters"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {impactPillars.map((item) => (
            <div className="surface-card" key={item.title}>
              <h2 className="text-2xl font-semibold text-[var(--rr-text)]">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--rr-muted)]">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        description="The site architecture is already prepared for deeper utility pages instead of staying limited to static marketing copy."
        eyebrow="Next data layers"
        title="Prepared for calculators, location data, and partner dashboards"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {futureDataTools.map((item) => (
            <div className="surface-card" key={item.title}>
              <h2 className="text-2xl font-semibold text-[var(--rr-text)]">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--rr-muted)]">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <div className="flex justify-end">
        <ButtonLink href="/contact?type=municipality" variant="secondary">
          Talk about impact reporting
        </ButtonLink>
      </div>
    </main>
  );
}
