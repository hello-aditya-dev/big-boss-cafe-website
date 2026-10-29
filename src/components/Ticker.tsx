import { MENU } from "@/lib/data";

// Real prices only — every entry in the ticker is a verified, photographed item.
const ALL_ITEMS = MENU.flatMap((c) => c.items.map((i) => `${i.name} ₹${i.price}`));

export function Ticker() {
  const strip = [...ALL_ITEMS, ...ALL_ITEMS];
  return (
    <aside
      className="ticker overflow-hidden border-y-2 border-ink bg-red py-3 text-cream"
      aria-label="Menu price strip"
    >
      <div className="ticker-track flex w-max items-center gap-8 whitespace-nowrap">
        {strip.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="flex items-center gap-8 font-display text-lg uppercase tracking-wide"
            aria-hidden={i >= ALL_ITEMS.length}
          >
            {label}
            <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" fill="currentColor" />
            </svg>
          </span>
        ))}
      </div>
    </aside>
  );
}
