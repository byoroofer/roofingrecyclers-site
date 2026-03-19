import { Reveal } from "@/components/site/reveal";
import type { StatItem } from "@/types/site";

interface StatGridProps {
  items: StatItem[];
}

export function StatGrid({ items }: StatGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <Reveal className="stat-card" delay={index * 0.05} key={item.label}>
          <span className="stat-value">{item.value}</span>
          <h3 className="mt-5 text-lg font-semibold text-[var(--rr-text)]">{item.label}</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--rr-muted)]">{item.detail}</p>
        </Reveal>
      ))}
    </div>
  );
}
