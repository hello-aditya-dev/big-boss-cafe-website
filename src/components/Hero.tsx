import { BUSINESS, DIRECTIONS } from "@/lib/data";
import { asset, srcset } from "@/lib/asset";
import { Rise } from "./Rise";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream pt-16">
      {/* kraft top edge */}
      <div className="absolute inset-x-0 top-0 h-16 bg-red dots" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-14 sm:px-6 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-20 lg:pt-20">
        {/* Type block */}
        <div className="order-2 lg:order-1">
          <Rise>
            <p className="flex flex-wrap items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.18em]">
              <span className="border-2 border-leaf px-2 py-0.5 text-leaf">Pure Veg</span>
              <span className="border-2 border-ink px-2 py-0.5">Open-air</span>
              <span className="border-2 border-kraft px-2 py-0.5 text-kraft">9–9 daily</span>
            </p>
          </Rise>

          <Rise delay={80}>
            <h1 className="mt-5 font-display uppercase leading-[0.94] tracking-tight">
              <span className="block text-[clamp(3rem,10vw,6.5rem)] text-ink">Chai at ₹10.</span>
              <span className="mt-1 block text-[clamp(1.5rem,4.6vw,2.9rem)] text-red">
                Coffee at ₹15. Chaat at ₹30.
              </span>
            </h1>
          </Rise>

          <Rise delay={150}>
            <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-ink-soft sm:text-base">
              <strong className="font-semibold text-ink">{BUSINESS.name}</strong>{" "}
              <span className="font-hindi">({BUSINESS.nameHindi})</span> is the pure-veg, open-air
              cafe directly opposite Government Engineering College, Koni — plastic chairs, corrugated
              roof, red 3D letters, and a price board that hasn&apos;t forgotten it&apos;s a student
              budget.
            </p>
          </Rise>

          <Rise delay={220}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="print-shadow-red inline-flex min-h-12 items-center justify-center gap-2 border-2 border-red bg-red px-7 py-3.5 text-[15px] font-bold uppercase tracking-wide text-cream transition-transform hover:-translate-y-0.5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
                </svg>
                Get directions
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 border-2 border-ink bg-paper px-7 py-3.5 text-[15px] font-bold transition-colors hover:bg-ink hover:text-cream"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </Rise>

          <Rise delay={290}>
            <p className="mt-6 flex items-center gap-2 text-[13px] font-semibold text-ink-soft">
              <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" className="text-red">
                <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.5L12 17.3l-5.9 3.2 1.3-6.5-4.9-4.6 6.6-.8L12 2.5z" fill="currentColor" />
              </svg>
              Rated {BUSINESS.rating} on Google —{" "}
              <a
                href={BUSINESS.mapsListing}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-red/60 underline-offset-4 hover:text-red"
              >
                see the listing
              </a>
            </p>
          </Rise>
        </div>

        {/* Photo block — the real cafe, taped to the page like a poster */}
        <div className="order-1 lg:order-2">
          <Rise delay={120}>
            <figure className="print-shadow relative mx-auto max-w-md rotate-[1.2deg] border-2 border-ink bg-paper p-2.5 pb-4 lg:rotate-[1.6deg]">
              <img
                src={asset("/images/hero-1080.jpg")}
                srcSet={srcset("/images/hero", [560, 800, 1080, 1440])}
                sizes="(min-width: 1024px) 460px, 92vw"
                alt="Big Boss Cafe in daylight — red BIG BOSS signboard, PURE VEG logo, open-air tables and the price banner"
                width={1080}
                height={752}
                fetchPriority="high"
                className="w-full border border-ink/20 object-cover"
              />
              <figcaption className="mt-3 flex items-center justify-between gap-3 px-1">
                <span className="font-hindi text-sm text-ink-soft">बिग बॉस कैफे</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-soft">
                  shot from the cafe&apos;s own Google listing
                </span>
              </figcaption>
              <span
                className="absolute -right-3 -top-3 grid h-16 w-16 rotate-[8deg] place-items-center rounded-full border-2 border-ink bg-leaf text-center font-display text-[11px] uppercase leading-tight text-cream sm:h-20 sm:w-20"
                aria-hidden="true"
              >
                Pure
                <br />
                Veg
              </span>
            </figure>
          </Rise>
        </div>
      </div>
    </section>
  );
}
