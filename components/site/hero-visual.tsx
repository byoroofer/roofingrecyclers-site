export function HeroVisual() {
  return (
    <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(62,165,104,0.32),transparent_32%),linear-gradient(180deg,rgba(16,24,20,0.98),rgba(8,13,11,0.98))] p-8 sm:p-10">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.05)_42%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:7rem_7rem] opacity-20" />

      <div className="relative grid gap-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="surface-card min-h-40">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--rr-muted)]">
              Material flow
            </span>
            <div className="mt-5 space-y-3">
              <div className="h-3 rounded-full bg-white/12">
                <div className="h-3 w-[78%] rounded-full bg-[var(--rr-accent)]" />
              </div>
              <div className="h-3 rounded-full bg-white/12">
                <div className="h-3 w-[54%] rounded-full bg-[var(--rr-amber)]" />
              </div>
              <div className="h-3 rounded-full bg-white/12">
                <div className="h-3 w-[88%] rounded-full bg-white/45" />
              </div>
            </div>
          </div>

          <div className="surface-card min-h-40">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--rr-muted)]">
              Regional buildout
            </span>
            <div className="mt-5 grid grid-cols-4 gap-3">
              {Array.from({ length: 16 }).map((_, index) => (
                <div
                  className={
                    index % 5 === 0
                      ? "aspect-square rounded-xl bg-[var(--rr-accent)]"
                      : index % 3 === 0
                        ? "aspect-square rounded-xl bg-[var(--rr-amber)]/90"
                        : "aspect-square rounded-xl bg-white/10"
                  }
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="surface-card">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--rr-muted)]">
                Network logic
              </span>
              <p className="mt-3 max-w-lg text-sm leading-7 text-[var(--rr-text)]/82">
                Intake density, processing discipline, logistics coordination, and downstream
                demand are intended to behave like one industrial system.
              </p>
            </div>
            <div className="grid min-w-[14rem] grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-center text-sm text-[var(--rr-text)]">
                Intake
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-center text-sm text-[var(--rr-text)]">
                Processing
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-center text-sm text-[var(--rr-text)]">
                Output
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
