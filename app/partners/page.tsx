import { ButtonLink } from "@/components/site/button-link";
import { PageHero } from "@/components/site/page-hero";
import { SectionShell } from "@/components/site/section-shell";
import {
  partnerEngagementSteps,
  partnershipLeverageCards,
  partnersHero,
  partnerTypes,
} from "@/content/site-content";
import { buildMetadata } from "@/lib/site/metadata";

export const metadata = buildMetadata({
  title: "Partners | Roofing Recyclers",
  description:
    "Roofing Recyclers is seeking contractors, municipalities, manufacturers, processors, logistics partners, and strategic allies.",
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <PageHero content={partnersHero} />

      <SectionShell
        description="The opportunity gets stronger as material suppliers, processors, public stakeholders, and downstream partners begin to align."
        eyebrow="Who we want to work with"
        title="Partnership categories that matter early"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {partnerTypes.map((item) => (
            <div className="surface-card" key={item}>
              <p className="text-lg font-semibold leading-8 text-[var(--rr-text)]">{item}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        description="The best partners do not sit in isolation. They connect supply, siting, logistics, downstream demand, and public legitimacy into one stronger operating system."
        eyebrow="Relationship architecture"
        title="Why the partner map matters"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {partnershipLeverageCards.map((item) => (
            <div className="surface-card" key={item.title}>
              <h2 className="text-2xl font-semibold text-[var(--rr-text)]">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--rr-muted)]">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        description="The best partnerships begin with a clear understanding of where the relationship sits in the operating system."
        eyebrow="How engagement starts"
        title="From first conversation to structured program design"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {partnerEngagementSteps.map((item) => (
            <div className="surface-card" key={item.title}>
              <span className="eyebrow">Partnership path</span>
              <h2 className="mt-5 text-2xl font-semibold text-[var(--rr-text)]">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--rr-muted)]">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <div className="flex justify-end">
        <ButtonLink href="/contact?type=strategic-partner">Start a partner discussion</ButtonLink>
      </div>
    </main>
  );
}
