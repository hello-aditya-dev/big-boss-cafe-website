# Big Boss Cafe — website concept

> **Live demo:** https://hello-aditya-dev.github.io/big-boss-cafe-website/

An independent, unsolicited design concept for **Big Boss Cafe** — a real pure-vegetarian,
open-air cafe opposite Government Engineering College, Koni, Bilaspur, Chhattisgarh, India.
This is a portfolio demo by [hello-aditya-dev](https://github.com/hello-aditya-dev),
not the cafe's official website, and is not commissioned or endorsed by the business.

## What this is

A complete, single-page, static marketing website for a student-budget college cafe:

- **A verified menu with real prices.** The seven items and prices (Tea ₹10, Coffee ₹15,
  Sandwich ₹25, Maggi ₹25, Papri Chaat ₹30, Bhelpuri ₹30, Lassi ₹30) were transcribed from the
  price board **photographed on the cafe's own Google Maps listing** (Dec 2021) — and the site
  shows that board as the source artefact, with a "prices may have changed" caveat and a
  tap-to-call confirmation CTA. Nothing was invented.
- **Real photography only** — every image is the actual cafe from its public
  [Google Maps listing](https://maps.app.goo.gl/PE2S3EZPiAS6LADN9). No stock, no AI images.
- **Verified facts only** — hours (9 am–9 pm daily), phone, pure-veg status, wheelchair-accessible
  seating and rating come from the listing (researched Oct 2026; see `docs/research.md`).
- **Conversion-first local UX** — tap-to-call everywhere, straight-to-directions deep link,
  mobile call bar, price ticker, filterable menu tabs.
- **Art direction** — "the college adda price board": signal red / cream / ink with hard 2px
  borders and offset print shadows, Anton billboard type paired with Hanken Grotesk, the real
  price board presented as an artefact, Devanagari accents — deliberately nothing like the
  sibling Green House Cafe concept (dark, botanical, serif).

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript, **fully static export** — no backend.
- Tailwind CSS 4 (design tokens as CSS `@theme` variables).
- Hand-written responsive `srcset` images (generated with sharp).
- SEO: metadata, Open Graph, `robots.ts`, `sitemap.ts`, `CafeOrCoffeeShop` JSON-LD built **only**
  from verified listing facts.
- Accessibility: semantic landmarks, skip link, keyboard-operable menu tabs and mobile menu,
  visible focus rings, reduced-motion support (ticker stops), 44px+ touch targets.

## Run it locally

```bash
bun install        # or: npm install
bun run dev        # http://localhost:3102
```

## Build & deploy

```bash
bun run build                # static export to ./out (no base path, for local preview)
bun run build:pages          # static export with the GitHub Pages base path + site URL
```

Deployment is automated with GitHub Actions (`.github/workflows/deploy.yml`):
pushing to `main` builds the site and publishes it to GitHub Pages.

## Repo layout

```
src/app/            layout, page, globals.css, robots.ts, sitemap.ts
src/components/     Header, Hero, Ticker, Board (menu+tabs), Place, Visit, Footer, MobileBar
src/lib/data.ts     all business facts + verified menu (single source of truth)
public/images/      optimised crops of the cafe's own listing photo (+ favicon.svg)
docs/               research.md, asset-sources.md, originals/ (provenance)
```

## Scope & honesty notes

- Demo disclosure is included in the footer; the developer is not affiliated with the cafe.
- Facts excluded on purpose (no verified source): review counts/quotes, history, awards, Wi-Fi,
  social handles, any menu item beyond the seven photographed. See `docs/research.md` §8.
- The menu's honest limitation is stated on the page itself: the board was photographed in
  Dec 2021 and prices may have changed — the site routes confirmation to the cafe's phone.
- The Christmas decorations visible in the hero photograph are part of the authentic Dec 2021
  capture and were deliberately not edited out.

## Licence & credits

- Code: MIT.
- Photographs: from the cafe's own public Google Maps listing, used to promote the business and
  credited inline + in `docs/asset-sources.md`; they remain the property of their contributor.
- Icons: inline SVG (Lucide-style, ISC).
