import Link from "next/link";

import { primaryNavigation, secondaryNavigation } from "@/content/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[linear-gradient(180deg,rgba(9,14,12,0),rgba(9,14,12,0.92))]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.45fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <span className="eyebrow">Roofing Recyclers</span>
          <h2 className="text-2xl font-semibold text-[var(--rr-text)]">
            Building industrial infrastructure from roofing waste streams.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-[var(--rr-muted)]">
            Roofing Recyclers is positioned for contractors, municipalities, manufacturers,
            landfill operators, strategic partners, and capital partners who see category-level
            opportunity in asphalt shingle recovery.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--rr-muted)]">
            Primary
          </h3>
          <ul className="mt-4 space-y-3">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="text-sm text-[var(--rr-text)]/80 transition hover:text-[var(--rr-text)]"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--rr-muted)]">
            Expansion Routes
          </h3>
          <ul className="mt-4 space-y-3">
            {secondaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="text-sm text-[var(--rr-text)]/80 transition hover:text-[var(--rr-text)]"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8 px-4 py-5 text-center text-xs uppercase tracking-[0.22em] text-[var(--rr-steel)] sm:px-6 lg:px-8">
        RoofingRecyclers.com | industrial recycling infrastructure | built for regional scale
      </div>
    </footer>
  );
}
