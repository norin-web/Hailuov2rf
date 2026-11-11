# Hailuo — promo site

Promo site for the Hailuo iPhone app (text to video). Design: Paper file "Hailuo v2 RF", page Promo (Handoff artboard has tokens, assets and behaviour).

## Run

```bash
pnpm install
pnpm dev        # http://localhost:5173/
pnpm build      # → dist/
```

## Deploy

Push to `main` → GitHub Actions builds and publishes to GitHub Pages (`.github/workflows/deploy.yml`, pnpm via `pnpm/action-setup`). `dist/404.html` is a copy of `index.html` so deep links work.

**`base` trap:** served from the custom domain hailio.casa (`public/CNAME`), so `vite.config.ts` has `base: "/"`. If the domain is removed, switch back to `base: "/Hailuov2rf/"` and delete `public/CNAME` in the same commit, or every asset 404s and the page is blank.

## Where things live

- `src/app/content/site.ts` — every fact: brand, email, App Store ID/link, operator, disclaimer, steps, features, FAQ, specs. `PLACEHOLDER` marks what the owner still has to send.
- `src/app/content/legal.ts` — Privacy Policy and Terms **verbatim** from the owner (only `## ` headings and `- ` lists added). Placeholders until the documents arrive.
- `src/styles/index.css` — tokens in `:root` (mirrors Paper), all layout.
- `public/images/` — WebP phone mockups and sample frames (sources in `../File/materials/`).
- Images always go through `img()` (`src/app/utils/img.ts`) so they follow `base`.

## Motion rules

- Native scroll only (no Lenis); the header is sticky and never hides.
- Reveals are CSS transitions driven by `utils/useReveal.ts`; hidden-at-rest states are gated on `html.js`, and both fallbacks check real geometry, so content is never left invisible in a background tab.
- How it works is pinned on desktop (`usePinnedSteps`); on phones it is a tap list.
