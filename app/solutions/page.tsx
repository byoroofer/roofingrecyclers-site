import { ButtonLink } from "@/components/site/button-link";
import { PageHero } from "@/components/site/page-hero";
import { SectionShell } from "@/components/site/section-shell";
import { StakeholderGrid } from "@/components/site/stakeholder-grid";
import { solutionDetailCards, solutionsHero } from "@/content/site-content";
import { buildMetadata } from "@/lib/site/metadata";

export const metadata = buildMetadata({
  title: "Solutions | Roofing Recyclers",
  description:
    "See how Roofing Recyclers creates value for contractors, manufacturers, municipalities, landfills, and capital partners.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <PageHero content={solutionsHero} />

      <SectionShell
        description="The site is intentionally structured around stakeholder-specific entry points because each audience evaluates the company through a different lens."
        eyebrow="Value by audience"
        title="One platform, multiple reasons to engage"
      >
        <StakeholderGrid cards={solutionDetailCards} />
      </SectionShell>

      <SectionShell
        description="The company has to solve for disposal, processing, logistics, offtake, and trust at the same time. That is why the market is both difficult and promising."
        eyebrow="Shared operating logic"
        title="The best version of the model creates overlap across stakeholder priorities"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Waste diversion",
              description:
                "A cleaner route for a difficult roofing waste stream with more structure than simple disposal.",
            },
            {
              title: "Materials relevance",
              description:
                "A pathway that connects recovered shingles to real product and infrastructure use cases.",
            },
            {
              title: "Regional coordination",
              description:
                "A network model where supply, hauling, processing, and public stakeholders can align inside one system.",
            },
            {
              title: "Institutional credibility",
              description:
                "A public-facing platform that can speak credibly to investors, partners, media, and municipalities at the same time.",
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
        <ButtonLink href="/contact?type=other">Discuss a specific use case</ButtonLink>
      </div>
    </main>
  );
}
