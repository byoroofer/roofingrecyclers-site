import Link from "next/link";

import { Reveal } from "@/components/site/reveal";
import type { StakeholderCard } from "@/types/site";

interface StakeholderGridProps {
  cards: StakeholderCard[];
}

export function StakeholderGrid({ cards }: StakeholderGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card, index) => (
        <Reveal className="surface-card flex h-full flex-col" delay={index * 0.05} key={card.title}>
          <h3 className="text-xl font-semibold text-[var(--rr-text)]">{card.title}</h3>
          <p className="mt-4 text-sm leading-7 text-[var(--rr-muted)]">{card.description}</p>
          <ul className="mt-5 space-y-3 text-sm text-[var(--rr-text)]/85">
            {card.bullets.map((bullet) => (
              <li className="flex gap-3" key={bullet}>
                <span className="mt-2 h-2 w-2 rounded-full bg-[var(--rr-accent)]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <Link className="mt-6 text-sm font-semibold text-[var(--rr-amber)]" href={card.href}>
            Learn more
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
