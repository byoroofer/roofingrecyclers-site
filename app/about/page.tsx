import { ButtonLink } from "@/components/site/button-link";
import { FounderStory } from "@/components/site/founder-story";
import { PageHero } from "@/components/site/page-hero";
import { SectionShell } from "@/components/site/section-shell";
import {
  aboutHero,
  aboutPillars,
  aboutVisionTimeline,
  founderHighlights,
  founderStoryParagraphs,
} from "@/content/site-content";
import { buildMetadata } from "@/lib/site/metadata";

export const metadata = buildMetadata({
  title: "About Roofing Recyclers | Industrial recovery platform",
  description:
    "Learn why Roofing Recyclers is being built as a scalable industrial platform for asphalt shingle recycling, RAS, and downstream infrastructure value.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <PageHero content={aboutHero} />

      <SectionShell
        description="This company is being framed as a serious operating platform at the intersection of roofing, infrastructure, waste diversion, and manufacturing."
        eyebrow="Company thesis"
        title="Why this opportunity is much larger than a simple recycling pitch"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {aboutPillars.map((pillar) => (
            <div className="surface-card" key={pillar.title}>
              <h2 className="text-2xl font-semibold text-[var(--rr-text)]">{pillar.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--rr-muted)]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        description="Founder positioning matters because the work depends on credibility inside roofing, construction, and public-private relationship networks."
        eyebrow="Founder story"
        title="A roofing-native founder position with policy and execution fluency"
      >
        <FounderStory details={founderStoryParagraphs} highlights={founderHighlights} />
      </SectionShell>

      <SectionShell
        description="The long-term goal is national relevance, but the sequence has to be regional, disciplined, and partnership-driven."
        eyebrow="Long-term vision"
        title="A national platform can emerge from repeatable regional hubs"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {aboutVisionTimeline.map((item) => (
            <div className="surface-card" key={item.title}>
              <span className="eyebrow">Roadmap</span>
              <h2 className="mt-5 text-2xl font-semibold text-[var(--rr-text)]">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--rr-muted)]">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Platform outlook"
        title="Built to expand beyond a brochure site"
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="surface-card">
            <p className="text-sm leading-8 text-[var(--rr-muted)]">
              The public site is already structured for future contractor certification, partner
              applications, impact dashboards, investor data room requests, location discovery, and
              authority-building content. The architecture is meant to grow with the company.
            </p>
          </div>
          <ButtonLink href="/contact?type=other">Start a conversation</ButtonLink>
        </div>
      </SectionShell>
    </main>
  );
}
