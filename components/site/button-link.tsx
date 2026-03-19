"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  const variants = {
    primary:
      "bg-[var(--rr-accent)] text-white shadow-[0_20px_60px_rgba(19,87,54,0.35)] hover:bg-[var(--rr-accent-strong)]",
    secondary:
      "border border-white/12 bg-white/6 text-[var(--rr-text)] backdrop-blur hover:bg-white/10",
    ghost: "text-[var(--rr-text)] hover:bg-white/6",
  };

  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.04em] transition-all duration-200",
        variants[variant],
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
