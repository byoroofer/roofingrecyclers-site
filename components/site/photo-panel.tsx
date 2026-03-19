import type { ReactNode } from "react";

import Image from "next/image";

import { cn } from "@/lib/utils";

interface PhotoPanelProps {
  src: string;
  alt: string;
  overlay?: ReactNode;
  className?: string;
  frameClassName?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
}

export function PhotoPanel({
  src,
  alt,
  overlay,
  className,
  frameClassName,
  imageClassName,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: PhotoPanelProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--rr-panel-strong)] shadow-[var(--rr-shadow)]",
        className,
      )}
    >
      <div className={cn("relative min-h-[22rem] bg-[var(--rr-background-soft)]", frameClassName)}>
        <Image
          alt={alt}
          className={cn("object-cover", imageClassName)}
          fill
          priority={priority}
          sizes={sizes}
          src={src}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,6,5,0.08)_0%,rgba(3,6,5,0.2)_42%,rgba(3,6,5,0.84)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(43,122,77,0.22),transparent_28%)]" />
        {overlay ? <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">{overlay}</div> : null}
      </div>
    </div>
  );
}
