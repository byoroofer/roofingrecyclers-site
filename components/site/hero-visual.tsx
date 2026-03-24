import { cn } from "@/lib/utils";

import { PhotoPanel } from "@/components/site/photo-panel";

const operatingSequence = [
  {
    title: "Capture material",
    description:
      "Tear-off shingles, cut-off waste, and diversion relationships create the intake edge.",
    detail: "Inbound supply",
  },
  {
    title: "Process into RAS",
    description:
      "Sorting and disciplined preparation turn shingle volume into more credible feedstock.",
    detail: "Spec-aware output",
  },
  {
    title: "Connect to paving demand",
    description:
      "Downstream asphalt relationships are what make recovery relevant beyond disposal.",
    detail: "Industrial relevance",
  },
];

const valueSignals = ["Gate economics", "RAS feedstock", "Regional hubs"];

export function HeroVisual() {
  return (
    <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(62,165,104,0.22),transparent_34%),linear-gradient(180deg,rgba(16,24,20,0.98),rgba(8,13,11,0.98))] p-5 sm:p-6 lg:p-7">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.05)_42%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-15" />

      <div className="relative grid gap-4">
        <PhotoPanel
          alt="Close-up of asphalt shingles with mineral granules."
          frameClassName="min-h-[18rem] sm:min-h-[22rem]"
          imageClassName="scale-[1.02]"
          overlay={
            <div className="max-w-md space-y-3">
              <span className="inline-flex rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/88">
                Recycled asphalt shingles
              </span>
              <p className="text-sm leading-7 text-white/84 sm:text-[0.95rem]">
                Real shingles, real mineral surface, real feedstock potential. The category only
                gets interesting when recovered material can move into a disciplined downstream
                infrastructure story.
              </p>
            </div>
          }
          priority
          sizes="(max-width: 1024px) 100vw, 42vw"
          src="/images/deck/shingle-surface.jpg"
        />

        <div className="grid gap-4 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="surface-card">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--rr-muted)]">
              Why RAS matters
            </span>
            <h2 className="mt-4 max-w-xl text-[1.9rem] font-semibold leading-tight text-[var(--rr-text)] text-balance">
              Processed shingles create a bigger story than landfill diversion alone.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--rr-text)]/84">
              Recycled asphalt shingles give the model an output with paving relevance, petroleum
              offset logic, and a more serious industrial narrative than disposal-only handling.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {valueSignals.map((item) => (
                <div
                  className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--rr-text)]/90"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--rr-muted)]">
              Business-plan logic
            </span>
            <div className="mt-5 grid gap-3">
              {[
                "Paid intake can create value before material leaves the gate.",
                "Processing discipline is what separates feedstock from debris.",
                "Paving relationships are what turn recovery into a serious platform thesis.",
              ].map((item) => (
                <div
                  className="rounded-[1.35rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-[var(--rr-text)]/84"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-3">
          {operatingSequence.map((item, index) => (
            <div
              className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] px-4 py-4 sm:px-5 sm:py-5"
              key={item.title}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--rr-accent)]/35 bg-[var(--rr-accent)]/12 text-sm font-semibold text-[var(--rr-text)]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--rr-text)]">{item.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--rr-muted)]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <span
                  className={cn(
                    "rounded-full border border-white/10 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--rr-steel)]",
                    "sm:mt-1 sm:shrink-0",
                  )}
                >
                  {item.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
