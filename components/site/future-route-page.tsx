import { Suspense } from "react";

import { ButtonLink } from "@/components/site/button-link";
import { LeadForm } from "@/components/site/lead-form";
import { PageHero } from "@/components/site/page-hero";
import { SectionShell } from "@/components/site/section-shell";
import {
  placeholderPageHeroes,
  placeholderRouteDetails,
  primaryNavigation,
} from "@/content/site-content";

type FutureRouteKey = keyof typeof placeholderPageHeroes;

interface FutureRoutePageProps {
  routeKey: FutureRouteKey;
}

function LeadFormFallback() {
  return (
    <div className="surface-card">
      <span className="eyebrow">Lead capture</span>
      <h2 className="mt-5 text-3xl font-semibold text-[var(--rr-text)]">Preparing the inquiry form</h2>
      <p className="mt-4 text-sm leading-7 text-[var(--rr-muted)]">
        The form loads client-side so the route can still be statically generated and fast by
        default.
      </p>
    </div>
  );
}

export function FutureRoutePage({ routeKey }: FutureRoutePageProps) {
  const hero = placeholderPageHeroes[routeKey];
  const detail = placeholderRouteDetails[routeKey];

  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <PageHero content={hero} />

      <SectionShell
        description="These routes are intentionally scaffolded now so the public site can expand without reworking the architecture later."
        eyebrow="Expansion route"
        title="Built for the next layer of the platform"
      >
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="surface-card">
            <h2 className="text-2xl font-semibold text-[var(--rr-text)]">
              What this page is being prepared for
            </h2>
            <ul className="mt-6 space-y-4">
              {detail.bullets.map((bullet) => (
                <li className="flex gap-3 text-sm leading-7 text-[var(--rr-muted)]" key={bullet}>
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--rr-accent)]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
              <h3 className="text-lg font-semibold text-[var(--rr-text)]">
                Expansion-ready public architecture
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--rr-muted)]">
                These routes will connect cleanly to the existing public navigation,
                future program pages, lead-routing flows, and eventual portal or content modules.
              </p>
            </div>
          </div>

          {detail.inquiryType ? (
            <Suspense fallback={<LeadFormFallback />}>
              <LeadForm
                defaultInquiryType={detail.inquiryType}
                description="If you want to talk before the dedicated page is fully expanded, send the inquiry now and the team can route it internally."
                sourcePage={`/${routeKey}`}
                submitLabel="Send Inquiry"
                title="Reach out early"
              />
            </Suspense>
          ) : (
            <div className="surface-card flex flex-col justify-between">
              <div>
                <span className="eyebrow">Current status</span>
                <h2 className="mt-5 text-3xl font-semibold text-[var(--rr-text)]">
                  The route is live, and the deeper content layer is next.
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--rr-muted)]">
                  While this page is still intentionally lightweight, the broader site structure is
                  already prepared for deeper expansion without changing the public information
                  architecture.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="/contact?type=other">Contact the team</ButtonLink>
                <ButtonLink href={primaryNavigation[2].href} variant="secondary">
                  Explore solutions
                </ButtonLink>
              </div>
            </div>
          )}
        </div>
      </SectionShell>
    </main>
  );
}
