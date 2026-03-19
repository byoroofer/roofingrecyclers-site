import type { ProcessStep } from "@/types/site";

import { Reveal } from "@/components/site/reveal";

interface ProcessDiagramProps {
  steps: ProcessStep[];
}

export function ProcessDiagram({ steps }: ProcessDiagramProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
      {steps.map((step, index) => (
        <Reveal className="surface-card relative" delay={index * 0.05} key={step.title}>
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--rr-amber)]">
            {step.eyebrow}
          </span>
          <h3 className="mt-5 text-xl font-semibold text-[var(--rr-text)]">{step.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--rr-muted)]">{step.description}</p>
        </Reveal>
      ))}
    </div>
  );
}
