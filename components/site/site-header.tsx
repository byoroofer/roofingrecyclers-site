"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ButtonLink } from "@/components/site/button-link";
import { primaryNavigation } from "@/content/site-content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(8,17,13,0.8)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3" href="/">
          <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/12 bg-white/8">
            <span className="text-sm font-bold tracking-[0.24em] text-[var(--rr-text)]">RR</span>
          </div>
          <div className="leading-none">
            <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--rr-muted)]">
              Roofing
            </span>
            <span className="block text-base font-semibold text-[var(--rr-text)]">Recyclers</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {primaryNavigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition",
                  isActive
                    ? "bg-white/10 text-[var(--rr-text)]"
                    : "text-[var(--rr-muted)] hover:bg-white/6 hover:text-[var(--rr-text)]",
                )}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact?type=strategic-partner">Partner With Us</ButtonLink>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/6 text-[var(--rr-text)] lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-white/6 transition-all duration-200 lg:hidden",
          isOpen ? "max-h-[420px]" : "max-h-0 border-transparent",
        )}
      >
        <div className="space-y-3 px-4 py-4 sm:px-6">
          {primaryNavigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                className={cn(
                  "block rounded-2xl border px-4 py-3 text-sm transition",
                  isActive
                    ? "border-white/12 bg-white/8 text-[var(--rr-text)]"
                    : "border-white/8 bg-white/4 text-[var(--rr-text)]",
                )}
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <ButtonLink className="w-full" href="/contact?type=strategic-partner">
            Partner With Us
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
