import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CtaBandProps {
  items: Array<{ label: string; href: string }>;
}

export function CtaBand({ items }: CtaBandProps) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(43,122,77,0.2),rgba(10,16,13,0.98))] p-6 sm:p-8 lg:p-10">
      <div className="max-w-3xl">
        <span className="eyebrow">Next step</span>
        <h2 className="mt-5 text-3xl font-semibold text-[var(--rr-text)] sm:text-4xl">
          Choose the conversation that matches your role in this market.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--rr-muted)]">
          The intake paths are organized for investors, contractors, manufacturers, municipalities,
          and strategic operators so the right discussion starts quickly.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {items.map((item) => (
          <Link
            className="group flex items-center justify-between rounded-[1.5rem] border border-white/12 bg-white/6 px-5 py-5 text-sm font-semibold text-[var(--rr-text)] transition hover:bg-white/10"
            href={item.href}
            key={item.href}
          >
            <span className="max-w-[11rem] leading-6">{item.label}</span>
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </section>
  );
}
