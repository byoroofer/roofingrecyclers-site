import Link from "next/link";

import { ButtonLink } from "@/components/site/button-link";
import { CtaBand } from "@/components/site/cta-band";
import { FaqList } from "@/components/site/faq-list";
import { FounderStory } from "@/components/site/founder-story";
import { HeroVisual } from "@/components/site/hero-visual";
import { PhotoPanel } from "@/components/site/photo-panel";
import { ProcessDiagram } from "@/components/site/process-diagram";
import { Reveal } from "@/components/site/reveal";
import { SectionShell } from "@/components/site/section-shell";
import { StakeholderGrid } from "@/components/site/stakeholder-grid";
import { StatGrid } from "@/components/site/stat-grid";
import { StructuredData } from "@/components/site/structured-data";
import {
  ctaSegments,
  faqItems,
  founderHighlights,
  founderStoryParagraphs,
  heroStats,
  impactMetrics,
  modelSteps,
  problemCards,
  rasValueCards,
  stakeholderCards,
  whyNowBullets,
} from "@/content/site-content";
import { siteConfig } from "@/lib/site/config";
import { buildMetadata } from "@/lib/site/metadata";

export const metadata = buildMetadata({
  title: "Roofing Recyclers | Turn roofing waste into infrastructure value",
  description:
    "Roofing Recyclers is building asphalt shingle recycling and RAS infrastructure for contractors, municipalities, manufacturers, and capital partners.",
  path: "/",
});

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Roofing Recyclers",
    url: siteConfig.url,
    description: siteConfig.description,
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: stakeholderCards.map((card, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: card.title,
      url: `${siteConfig.url}${card.href}`,
    })),
  },
];

export default function HomePage() {
  return (
    <>
      <StructuredData data={homeSchema} />

      <main className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <section className="grid gap-8 pt-6 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
          <Reveal className="grid gap-6">
            <span className="eyebrow">Asphalt shingle recycling infrastructure</span>
            <h1 className="display-title max-w-5xl">
              Turn roofing waste into infrastructure value.
            </h1>
            <p className="section-copy max-w-2xl">
              Roofing Recyclers is building the public foundation for a company focused on landfill
              diversion, RAS feedstock, petroleum-offset potential, regional processing, and
              downstream paving-product integration.
            </p>

            <div className="flex flex-wrap gap-4">
              <ButtonLink href="/contact?type=strategic-partner">Partner With Us</ButtonLink>
              <ButtonLink href="/how-it-works" variant="secondary">
                Explore the Model
              </ButtonLink>
            </div>

            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--rr-steel)]">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Landfill diversion
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Regional processing hubs
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                RAS feedstock
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Paving-product integration
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Capital-ready industrial thesis
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <HeroVisual />
          </Reveal>
        </section>

        <SectionShell className="pt-10" title="A waste stream large enough to matter at national scale.">
          <StatGrid items={heroStats} />
        </SectionShell>

        <SectionShell
          description="The opportunity is not simply about recycling. It sits at the intersection of disposal cost, material value, infrastructure demand, and domestic resource strategy."
          eyebrow="Why it matters"
          title="The waste stream is large. The recovery infrastructure is not."
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {problemCards.map((card) => (
              <div className="surface-card" key={card.title}>
                <h3 className="text-xl font-semibold text-[var(--rr-text)]">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--rr-muted)]">{card.description}</p>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          description="The model is designed to link inbound waste capture with disciplined processing, RAS feedstock, and downstream infrastructure relevance."
          eyebrow="The Roofing Recyclers model"
          title="A loop built for both recovery and industrial value creation."
        >
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <ProcessDiagram steps={modelSteps} />

            <div className="surface-card">
              <h3 className="text-2xl font-semibold text-[var(--rr-text)]">
                What the loop is meant to unlock
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "A cleaner inbound pathway for contractors and facilities",
                  "Processed shingles positioned as RAS feedstock for paving-related use",
                  "A stronger diversion story for public and private stakeholders",
                  "A base layer for future certification, reporting, and partner programs",
                ].map((item) => (
                  <li className="flex gap-3 text-sm leading-7 text-[var(--rr-muted)]" key={item}>
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--rr-amber)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/4 p-5 text-sm leading-7 text-[var(--rr-muted)]">
                The current metrics shown across the MVP site are planning-stage placeholders and are
                intentionally ready to be replaced with live reporting later.
              </p>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          description="Recycled asphalt shingles are the bridge between roofing waste recovery and the downstream materials opportunity."
          eyebrow="RAS and downstream value"
          title="The output matters as much as the intake."
        >
          <div className="grid gap-6 lg:grid-cols-[0.98fr_1.02fr]">
            <PhotoPanel
              alt="Road paving equipment on a freshly paved roadway."
              frameClassName="min-h-[22rem] sm:min-h-[28rem]"
              overlay={
                <div className="max-w-lg space-y-4">
                  <span className="inline-flex rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/88">
                    Downstream relevance
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      Roofing waste becomes more strategic when it has a path into infrastructure.
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/80">
                      The RAS story matters because it ties recovery to real paving demand rather
                      than stopping at landfill diversion.
                    </p>
                  </div>
                </div>
              }
              src="/images/deck/road-roller.jpg"
            />

            <div className="grid gap-4 md:grid-cols-2">
              {rasValueCards.map((card) => (
                <div className="surface-card" key={card.title}>
                  <h3 className="text-xl font-semibold text-[var(--rr-text)]">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--rr-muted)]">
                    {card.description}
                  </p>
                </div>
              ))}

              <div className="surface-card flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--rr-text)]">
                    Why capital pays attention
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--rr-muted)]">
                    The investor story strengthens when inbound material, RAS processing, regulatory
                    fluency, and downstream demand begin to reinforce one another.
                  </p>
                </div>
                <div className="mt-6">
                  <ButtonLink href="/investors" variant="secondary">
                    See the capital thesis
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          description="The same operating platform has to matter to several audiences at once. That is part of the opportunity, and part of the moat."
          eyebrow="Stakeholder solutions"
          title="Built to align contractors, manufacturers, public stakeholders, and capital."
        >
          <StakeholderGrid cards={stakeholderCards} />
        </SectionShell>

        <SectionShell
          description="The impact story needs to feel rigorous and measurable. The MVP uses structured placeholders now so the site can connect to live data later without redesign."
          eyebrow="Impact layer"
          title="Environmental upside and industrial upside should be visible together."
        >
          <div className="grid gap-6">
            <StatGrid items={impactMetrics} />
            <div className="surface-card flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[var(--rr-text)]">
                  Dynamic reporting ready from day one
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--rr-muted)]">
                  The architecture is prepared for future live metrics, location pages, calculator
                  modules, and partner dashboards rather than forcing a redesign later.
                </p>
              </div>
              <ButtonLink href="/impact" variant="secondary">
                Explore impact
              </ButtonLink>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          description="The timing case is about infrastructure demand, market fragmentation, and founder access, not about vague hype."
          eyebrow="Why Roofing Recyclers / Why now"
          title="A credible opening exists because the category is important and still underbuilt."
        >
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="surface-card">
              <ul className="space-y-5">
                {whyNowBullets.map((bullet) => (
                  <li className="flex gap-3 text-sm leading-7 text-[var(--rr-muted)]" key={bullet}>
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--rr-accent)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: "Manufacturer and public-sector pressure",
                  description:
                    "Waste-diversion, public perception, and procurement narratives are all creating more room for a serious recovery platform.",
                },
                {
                  title: "Infrastructure and paving relevance",
                  description:
                    "Recovered shingles become more strategic when connected to real downstream demand instead of isolated waste handling.",
                },
                {
                  title: "Founder network and execution access",
                  description:
                    "Roofing credibility, policy fluency, and contractor relationships create a more realistic route to traction.",
                },
              ].map((item) => (
                <div className="surface-card" key={item.title}>
                  <h3 className="text-xl font-semibold text-[var(--rr-text)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--rr-muted)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell
          description="The founder story matters here because the category requires relationships, industry credibility, and the ability to work across business and public stakeholders."
          eyebrow="Founder / leadership"
          title="A serious founder position without making the site about ego."
        >
          <FounderStory details={founderStoryParagraphs} highlights={founderHighlights} />
        </SectionShell>

        <SectionShell
          description="The public site should answer the big questions cleanly while creating room for deeper investor and partner conversations."
          eyebrow="FAQ"
          title="A few fast answers for people deciding whether to lean in."
        >
          <FaqList items={faqItems} />
        </SectionShell>

        <section className="pb-10">
          <CtaBand items={ctaSegments} />
        </section>

        <div className="flex justify-end pt-4">
          <Link
            className="text-sm font-semibold text-[var(--rr-amber)] transition hover:text-[var(--rr-text)]"
            href="/contact"
          >
            Prefer one direct form instead? Head to contact.
          </Link>
        </div>
      </main>
    </>
  );
}
