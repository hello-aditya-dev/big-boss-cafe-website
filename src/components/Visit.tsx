import { BUSINESS, DIRECTIONS } from "@/lib/data";
import { Rise } from "./Rise";

const HOURS = [
  ["Monday – Sunday", "9:00 am – 9:00 pm"],
];

export function Visit() {
  return (
    <section id="visit" className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Rise>
          <p className="font-display text-sm uppercase tracking-[0.22em] text-red">Find us</p>
        </Rise>
        <Rise delay={80}>
          <h2 className="mt-3 max-w-2xl font-display text-[clamp(2rem,5.5vw,3.6rem)] uppercase leading-[0.98] text-ink">
            Cross the road from GEC.
            <br />
            Look for the red letters.
          </h2>
        </Rise>

        <div className="mt-9 grid gap-4 sm:gap-5 md:grid-cols-3">
          <Rise delay={100}>
            <div className="print-shadow h-full border-2 border-ink bg-cream p-6">
              <h3 className="font-display text-base uppercase tracking-wide text-red">Address</h3>
              <address className="mt-3 not-italic text-[15px] leading-relaxed text-ink-soft">
                {BUSINESS.address}
              </address>
              <p className="mt-2 text-[13px] text-ink-soft">Plus code {BUSINESS.plusCode}</p>
              <a
                href={DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 border-2 border-red bg-red px-6 py-3 text-sm font-bold uppercase tracking-wide text-cream transition-transform hover:-translate-y-0.5"
              >
                Open in Google Maps
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7 17L17 7M17 7H9m8 0v8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </Rise>

          <Rise delay={160}>
            <div className="h-full border-2 border-ink bg-cream p-6">
              <h3 className="font-display text-base uppercase tracking-wide text-red">Hours</h3>
              <table className="mt-3 text-[14.5px]">
                <tbody>
                  {HOURS.map(([day, val]) => (
                    <tr key={day}>
                      <th scope="row" className="py-1.5 pr-4 text-left font-medium text-ink-soft">
                        {day}
                      </th>
                      <td className="py-1.5 text-right font-bold text-ink">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <ul className="mt-4 space-y-1.5 text-[13px] text-ink-soft">
                <li>· Wheelchair-accessible seating (per the Google listing)</li>
                <li>· Pure vegetarian kitchen</li>
                <li>· Open-air seating</li>
              </ul>
            </div>
          </Rise>

          <Rise delay={220}>
            <div className="print-shadow-red h-full border-2 border-red bg-ink p-6 text-cream">
              <h3 className="font-display text-base uppercase tracking-wide text-cream">Call ahead</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-cream/80">
                Confirm today&apos;s prices or check if the chaat counter is running — the board
                we photographed is from Dec 2021, and kitchens move on.
              </p>
              <a
                href={BUSINESS.phoneHref}
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center border-2 border-cream bg-red px-6 py-3 font-display text-lg uppercase tracking-wide text-cream transition-colors hover:bg-red-2"
              >
                {BUSINESS.phoneDisplay}
              </a>
              <p className="mt-3 text-[12.5px] text-cream/60">
                Number verified from the cafe&apos;s own Google listing.
              </p>
            </div>
          </Rise>
        </div>
      </div>
    </section>
  );
}
