import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionShellProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

export function SectionShell({
  eyebrow,
  title,
  description,
  children,
  className,
  contentClassName,
}: SectionShellProps) {
  return (
    <section className={cn("section-shell", className)}>
      {(eyebrow || title || description) && (
        <div className={cn("section-heading", contentClassName)}>
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          {title ? <h2 className="section-title">{title}</h2> : null}
          {description ? <p className="section-copy max-w-3xl">{description}</p> : null}
        </div>
      )}
      {children}
    </section>
  );
}
