"use client";

import { useEffect, useState } from "react";
import { BUSINESS } from "@/lib/data";

const NAV = [
  { href: "#board", label: "The board" },
  { href: "#place", label: "The place" },
  { href: "#visit", label: "Find us" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b-2 border-ink transition-all ${
        scrolled ? "bg-cream" : "bg-cream/97 backdrop-blur-[2px]"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Big Boss Cafe — back to top">
          <span className="grid h-9 w-9 place-items-center bg-red font-display text-lg text-cream" aria-hidden="true">
            BB
          </span>
          <span className="font-display text-xl uppercase tracking-wide">
            Big Boss <span className="text-red">Cafe</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b-2 border-transparent py-1 transition-colors hover:border-red hover:text-red"
            >
              {item.label}
            </a>
          ))}
          <a
            href={BUSINESS.phoneHref}
            className="border-2 border-ink bg-ink px-4 py-1.5 text-cream transition-colors hover:bg-red hover:border-red"
          >
            {BUSINESS.phoneDisplay}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border-2 border-ink md:hidden"
          aria-expanded={open}
          aria-controls="bb-mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="bb-mobile-menu"
          className="border-t-2 border-ink bg-cream px-4 pb-6 pt-2 md:hidden"
          aria-label="Mobile"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-ink/15 px-2 py-4 font-display text-2xl uppercase"
            >
              {item.label}
            </a>
          ))}
          <a
            href={BUSINESS.phoneHref}
            className="mt-4 block border-2 border-ink bg-red px-4 py-3 text-center font-display text-xl uppercase text-cream"
          >
            Call {BUSINESS.phoneDisplay}
          </a>
        </nav>
      )}
    </header>
  );
}
