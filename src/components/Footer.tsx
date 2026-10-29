import { BUSINESS, DIRECTIONS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-ink bg-ink text-cream">
      {/* closing price band */}
      <div className="dots border-b-2 border-red bg-red py-4" aria-hidden="true">
        <p className="mx-auto max-w-6xl px-4 font-display text-lg uppercase tracking-wide sm:px-6">
          Chai ₹10 · Coffee ₹15 · Sandwich ₹25 · Maggi ₹25 · Chaat ₹30 · Lassi ₹30
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_0.8fr_0.9fr]">
          <div>
            <p className="flex items-center gap-2.5 font-display text-2xl uppercase">
              <span className="grid h-8 w-8 place-items-center bg-red text-base" aria-hidden="true">BB</span>
              Big Boss <span className="text-red">Cafe</span>
            </p>
            <p className="mt-1.5 font-hindi text-sm text-cream/60">{BUSINESS.nameHindi}</p>
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-cream/70">$
              {BUSINESS.category} · {BUSINESS.area}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex min-h-11 items-center border-2 border-cream/40 px-5 text-sm font-semibold hover:bg-cream/10"
              >
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href={DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center border-2 border-cream/40 px-5 text-sm font-semibold hover:bg-cream/10"
              >
                Directions
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cream/40">
              On this page
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
              <li><a className="hover:text-red-soft" href="#board">The board</a></li>
              <li><a className="hover:text-red-soft" href="#place">The place</a></li>
              <li><a className="hover:text-red-soft" href="#visit">Find us</a></li>
              <li>
                <a
                  className="hover:text-red-soft"
                  href={BUSINESS.mapsListing}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Maps listing ↗
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cream/40">
              Credits
            </p>
            <ul className="mt-4 space-y-2.5 text-[13px] leading-relaxed text-cream/70">$
              <li>
                Photographs &amp; prices: the cafe&apos;s own public{" "}
                <a
                  className="underline decoration-red/60 underline-offset-2 hover:text-red-soft"
                  href={BUSINESS.mapsListing}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Maps listing
                </a>{" "}
                (board photo dated Dec 2021).
              </li>
              <li>Hours, phone, accessibility &amp; rating verified from the same listing, Oct 2026.</li>
              <li>
                Independent design concept by{" "}
                <a
                  className="underline decoration-red/60 underline-offset-2 hover:text-red-soft"
                  href="https://github.com/hello-aditya-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hello-aditya-dev
                </a>{" "}
                — a demo, not the cafe&apos;s official website.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-cream/15 pt-6 text-[12.5px] text-cream/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Big Boss Cafe · {BUSINESS.hoursShort} · Koni, Bilaspur</p>
          <p className="flex items-center gap-4">
            <a className="hover:text-red-soft" href="https://github.com/hello-aditya-dev" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="hover:text-red-soft" href="https://dev-aditya.com" target="_blank" rel="noopener noreferrer">dev-aditya.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
