import { BUSINESS } from "@/lib/data";
import { asset, srcset } from "@/lib/asset";
import { Rise } from "./Rise";

const TRAITS = [
  {
    title: "Pure veg, on the sign",
    body: "The green PURE VEG roundel isn't a marketing badge we made up — it's printed on the cafe's own signboard. Everything on the board is vegetarian.",
  },
  {
    title: "Open-air, student-proof",
    body: "A corrugated roof, plastic chairs and tables that have survived a decade of engineering students. You sit under the sky, next to the trees.",
  },
  {
    title: "Across from GEC",
    body: "Step out of Government Engineering College's gate and you're already here. Between classes, after labs, before the bus — this is the adda.",
  },
  {
    title: "9 to 9, wheelchairs welcome",
    body: "Open 9 am–9 pm every day, and the listing notes wheelchair-accessible seating — rare and worth saying out loud.",
  },
];

export function Place() {
  return (
    <section id="place" className="border-y-2 border-ink bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <Rise>
              <figure className="print-shadow-red mx-auto max-w-md rotate-[-1deg] border-2 border-ink bg-paper p-2.5">
                <img
                  src={asset("/images/sign-900.jpg")}
                  srcSet={srcset("/images/sign", [640, 900, 1200])}
                  sizes="(min-width: 1024px) 440px, 92vw"
                  alt="The BIG BOSS cafe overhead signboard with red 3D letters and the PURE VEG logo"
                  width={900}
                  height={325}
                  loading="lazy"
                  className="w-full object-cover"
                />
                <figcaption className="px-1 pt-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-ink-soft">
                  The real sign — red 3D letters, cursive cafe, PURE VEG roundel.
                </figcaption>
              </figure>
            </Rise>

            <Rise delay={140}>
              <figure className="mx-auto mt-8 max-w-md rotate-[0.8deg] border-2 border-ink bg-paper p-2.5">
                <img
                  src={asset("/images/seating-900.jpg")}
                  srcSet={srcset("/images/seating", [640, 900, 1200])}
                  sizes="(min-width: 1024px) 440px, 92vw"
                  alt="Open-air tables and chairs under the corrugated roof at Big Boss Cafe"
                  width={900}
                  height={928}
                  loading="lazy"
                  className="w-full object-cover"
                />
                <figcaption className="px-1 pt-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-ink-soft">
                  The open-air seating — trees, tin roof, chai traffic.
                </figcaption>
              </figure>
            </Rise>
          </div>

          <div>
            <Rise>
              <p className="font-display text-sm uppercase tracking-[0.22em] text-red">The place</p>
            </Rise>
            <Rise delay={80}>
              <h2 className="mt-3 font-display text-[clamp(2rem,5.5vw,3.6rem)] uppercase leading-[0.98] text-ink">
                A college adda that
                <br />
                tells you the price
                <br />
                up front.
              </h2>
            </Rise>
            <Rise delay={150}>
              <p className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-ink-soft">
                Big Boss Cafe does one honest thing extremely well: hot, vegetarian, pocket-money
                food and drink, served in the open air a road-crossing away from the engineering
                college. No decorum, no AC, no fuss — just the board, the chairs, and the chai.
              </p>
            </Rise>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {TRAITS.map((t, i) => (
                <Rise key={t.title} delay={i * 80}>
                  <div className="h-full border-2 border-ink bg-paper p-5">
                    <h3 className="font-display text-base uppercase tracking-wide text-red">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{t.body}</p>
                  </div>
                </Rise>
              ))}
            </div>

            <Rise delay={280}>
              <blockquote className="mt-8 border-l-4 border-red bg-paper px-5 py-4">
                <p className="font-display text-xl uppercase leading-snug text-ink">
                  {BUSINESS.hoursShort}. Chai ₹10. Pure veg. Opposite the college gate.
                </p>
                <footer className="mt-2 text-[12.5px] font-semibold text-ink-soft">
                  — the whole story, in one line
                </footer>
              </blockquote>
            </Rise>
          </div>
        </div>
      </div>
    </section>
  );
}
