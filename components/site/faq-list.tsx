import type { FaqItem } from "@/types/site";

interface FaqListProps {
  items: FaqItem[];
}

export function FaqList({ items }: FaqListProps) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <details className="surface-card group" key={item.question}>
          <summary className="cursor-pointer list-none text-lg font-semibold text-[var(--rr-text)]">
            {item.question}
          </summary>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--rr-muted)]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
