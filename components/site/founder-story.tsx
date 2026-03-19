import { PhotoPanel } from "@/components/site/photo-panel";
import { Reveal } from "@/components/site/reveal";

interface FounderStoryProps {
  details: string[];
  highlights: string[];
}

export function FounderStory({ details, highlights }: FounderStoryProps) {
  return (
    <Reveal className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
      <PhotoPanel
        alt="TJ Ware with roofing industry peers at an industry gathering."
        frameClassName="min-h-[22rem] sm:min-h-[28rem]"
        overlay={
          <div className="max-w-lg space-y-4">
            <span className="inline-flex rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/88">
              Industry connections
            </span>
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Relationships are part of the execution plan.
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/80">
                Roofing Recyclers needs trust across contractors, manufacturers, public
                stakeholders, and strategic operators. That relationship density is a real asset.
              </p>
            </div>
          </div>
        }
        src="/images/deck/industry-network.jpg"
      />

      <div className="grid gap-4">
        <div className="surface-card">
          <span className="eyebrow">Founder perspective</span>
          <h3 className="mt-5 text-3xl font-semibold text-[var(--rr-text)]">TJ Ware</h3>
          {details.map((item, index) => (
            <p
              className={
                index === 0
                  ? "mt-5 text-sm leading-8 text-[var(--rr-muted)]"
                  : "mt-4 text-sm leading-8 text-[var(--rr-muted)]"
              }
              key={item}
            >
              {item}
            </p>
          ))}
        </div>

        <div className="surface-card">
          <h3 className="text-xl font-semibold text-[var(--rr-text)]">
            Built on sector credibility, public-affairs fluency, and relationship depth.
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
      </div>
    </Reveal>
  );
}
