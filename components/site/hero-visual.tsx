import { PhotoPanel } from "@/components/site/photo-panel";

const loopCards = [
  {
    title: "Input capture",
    description:
      "Tear-off shingles, cut-off waste, and landfill-diversion relationships create the front end of the model.",
  },
  {
    title: "RAS processing",
    description:
      "Sorted shingles are prepared into recycled asphalt shingle feedstock rather than stranded disposal volume.",
  },
  {
    title: "Downstream value",
    description:
      "Paving and asphalt relationships turn recovery into a more serious industrial and capital story.",
  },
];

export function HeroVisual() {
  return (
    <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(62,165,104,0.24),transparent_32%),linear-gradient(180deg,rgba(16,24,20,0.98),rgba(8,13,11,0.98))] p-5 sm:p-6">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.05)_42%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-15" />

      <div className="relative grid gap-4 xl:grid-cols-[1.02fr_0.98fr]">
        <PhotoPanel
          alt="Close-up of asphalt shingles with mineral granules."
          className="h-full"
          frameClassName="min-h-[20rem] sm:min-h-[23rem]"
          imageClassName="scale-[1.03]"
          overlay={
            <div className="max-w-lg space-y-4">
              <span className="inline-flex rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/88">
                Recovered material
              </span>
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  The front end of the thesis is physical material, not slideware.
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/78">
                  A serious recycling platform starts with disciplined capture of real asphalt
                  shingles, then turns that waste stream into a feedstock story with downstream
                  relevance.
                </p>
              </div>
            </div>
          }
          priority
          src="/images/deck/shingle-surface.jpg"
        />

        <div className="grid gap-4">
          <div className="surface-card">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--rr-muted)]">
              Why RAS matters
            </span>
            <p className="mt-4 text-sm leading-7 text-[var(--rr-text)]/86">
              Recycled asphalt shingles are processed shingle millings positioned for paving-related
              applications. That is what makes the category economically more interesting than a
              disposal-only story.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
            {loopCards.map((item) => (
              <div className="surface-card min-h-full" key={item.title}>
                <h3 className="text-base font-semibold text-[var(--rr-text)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--rr-muted)]">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="surface-card">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--rr-muted)]">
                  Business-plan logic
                </span>
                <p className="mt-3 max-w-lg text-sm leading-7 text-[var(--rr-text)]/82">
                  The model is designed around paid intake, disciplined processing, and downstream
                  product relevance, with room for deeper vertical integration over time.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3 xl:min-w-[14rem]">
                {["Gate value", "RAS output", "Paving link"].map((item) => (
                  <div
                    className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-center text-sm text-[var(--rr-text)]"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
