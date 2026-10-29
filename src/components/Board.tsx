"use client";

import { useState } from "react";
import { MENU, MENU_SOURCE_NOTE, BUSINESS } from "@/lib/data";
import { Rise } from "./Rise";

export function Board() {
  const [active, setActive] = useState(MENU[0].id);

  return (
    <section id="board" className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Rise>
            <div>
              <p className="font-display text-sm uppercase tracking-[0.22em] text-red">
                The board
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,5.5vw,3.6rem)] uppercase leading-[0.98] text-ink">
                Straight off the
                <br />
                cafe&apos;s own price board.
              </h2>
            </div>
          </Rise>
          <Rise delay={100}>
            <p className="max-w-sm text-[14.5px] leading-relaxed text-ink-soft">
              No invented combos, no mystery MRP. Every item below was photographed on the
              cafe&apos;s price board and transcribed as-is.
            </p>
          </Rise>
        </div>

        {/* Category tabs */}
        <Rise delay={140}>
          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Menu categories">
            {MENU.map((cat) => {
              const selected = active === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  id={`tab-${cat.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${cat.id}`}
                  onClick={() => setActive(cat.id)}
                  className={`min-h-12 border-2 border-ink px-5 py-2.5 font-display text-base uppercase tracking-wide transition-colors ${
                    selected ? "bg-ink text-cream" : "bg-paper hover:bg-cream-2"
                  }`}
                >
                  {cat.label}
                  <span className="ml-2 font-body text-xs font-bold text-kraft" aria-hidden="true">
                    {cat.hindi}
                  </span>
                </button>
              );
            })}
          </div>
        </Rise>

        {/* Items */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          {MENU.filter((c) => c.id === active).map((cat) => (
            <ul
              key={cat.id}
              role="tabpanel"
              id={`panel-${cat.id}`}
              aria-labelledby={`tab-${cat.id}`}
              className="divide-y-2 divide-dotted divide-ink/25 border-2 border-ink bg-paper"
            >
              {cat.items.map((item, i) => (
                <li
                  key={item.name}
                  className="flex items-center gap-4 px-5 py-5 sm:px-7"
                >
                  <span className="font-display text-lg text-red/70" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[clamp(1.3rem,3.2vw,1.9rem)] uppercase leading-none text-ink">
                      {item.name}
                    </h3>
                    {item.tag && (
                      <p className="mt-1.5 text-[13px] font-semibold text-kraft">{item.tag}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="hidden h-6 w-6 shrink-0 border-2 border-leaf sm:block" aria-hidden="true">
                      <span className="sr-only">vegetarian</span>
                    </span>
                    <p className="whitespace-nowrap font-display text-[clamp(1.4rem,3.4vw,2.1rem)] text-red">
                      ₹{item.price}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ))}

          {/* The photographed board — the source artefact */}
          <Rise delay={120}>
            <figure className="print-shadow border-2 border-ink bg-cream p-3">
              <img
                src="/images/menuboard-560.jpg"
                srcSet="/images/menuboard-400.jpg 400w, /images/menuboard-560.jpg 560w, /images/menuboard-760.jpg 760w"
                sizes="(min-width: 1024px) 340px, 92vw"
                alt="The vertical price board photographed at Big Boss Cafe — tea, coffee, sandwich, maggi and chaat with rupee prices"
                width={560}
                height={1740}
                loading="lazy"
                className="w-full object-cover"
              />
              <figcaption className="px-1 pt-3 text-[12.5px] leading-snug text-ink-soft">
                The actual board, photographed on the cafe&apos;s Google listing (Dec 2021).{" "}
                <strong className="font-semibold text-ink">Prices may have changed</strong> — call{" "}
                <a href={BUSINESS.phoneHref} className="font-bold text-red underline decoration-red/50 underline-offset-2">
                  {BUSINESS.phoneDisplay}
                </a>{" "}
                to confirm today&apos;s rates.
              </figcaption>
            </figure>
          </Rise>
        </div>

        <Rise delay={160}>
          <p className="mt-5 max-w-2xl border-l-4 border-kraft bg-cream-2 px-4 py-3 text-[12.5px] leading-relaxed text-ink-soft">
            <strong className="font-semibold text-ink">Source note:</strong> {MENU_SOURCE_NOTE}
          </p>
        </Rise>
      </div>
    </section>
  );
}
