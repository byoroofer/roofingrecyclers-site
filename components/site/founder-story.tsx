import { Reveal } from "@/components/site/reveal";

interface FounderStoryProps {
  highlights: string[];
}

export function FounderStory({ highlights }: FounderStoryProps) {
  return (
    <Reveal className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
      <div className="surface-card">
        <span className="eyebrow">Founder perspective</span>
        <h3 className="mt-5 text-3xl font-semibold text-[var(--rr-text)]">TJ Ware</h3>
        <p className="mt-5 text-sm leading-8 text-[var(--rr-muted)]">
          Roofing Recyclers is positioned around a founder who understands roofing operations,
          contractor behavior, construction realities, insurance-claims dynamics, and the public
          affairs side of category building. The goal is not to sound visionary in theory. It is to
          assemble the right network and execute.
        </p>
      </div>

      <div className="surface-card">
        <h3 className="text-xl font-semibold text-[var(--rr-text)]">
          Built on sector credibility, operating context, and relationship depth.
        </h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => (
            <li
              className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5 text-sm leading-7 text-[var(--rr-text)]/88"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
