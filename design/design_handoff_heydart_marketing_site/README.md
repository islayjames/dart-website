# Handoff: heydart.com Marketing Site

## Overview

This is a complete pre-launch marketing site for **Heydart** — a conversational Disney World planning assistant that watches Lightning Lane Multi Pass availability, holds dining reservations, and quietly reshapes a guest's day around fixed plans (parades, naps, dining, height limits). The site's job is to convert overwhelmed first-time families, DVC trip-organizers, and annual passholders into the pre-launch waitlist with a 25%-off offer.

**Brand voice:** "Storybook Nightfall" — warm, hand-drawn, vintage-park-poster, gentle. Reassuring competence without being twee. The mascot is a small rust-colored fox named Dart.

**Headline / hero copy (final, approved):**
> **Be a guest at your own vacation.**
> Your personal concierge, darting through the parks — scoping lines, holding tables, threading the day a step ahead. Phone in pocket. Eyes on the kids.
>
> *Lightning Lane today, Dining coming this fall.*

## About the design files

The files in `source/` are **design references created in HTML / inline JSX** — a working multi-page prototype showing intended look, copy, and layout. They are not production code to ship as-is.

**Your task:** recreate this design in the target codebase's existing environment (Next.js, Astro, Remix, plain Vite + React, etc.) using its established patterns and libraries. If no environment exists yet, pick the most appropriate framework for a marketing site (Next.js App Router or Astro are both excellent fits) and implement the design there.

The HTML prototype uses inline-Babel JSX with global window-scoped components — that's a prototyping convenience, not a production pattern. In the real codebase you should:
- Convert each `page-*.jsx` into a real route / page component
- Convert `shared.jsx`, `fox.jsx`, `icons.jsx` into proper modular components
- Keep the design tokens (`tokens.css`) more or less intact — they're the source of truth for colors, type, radii, shadows
- Replace the `ArtSlot` component with real images once illustrations are commissioned (the `ArtSlot` props document the prompt, palette, and reference for each illustration)

## Fidelity

**High-fidelity.** All colors, typography, spacing, copy, and layout are final. Re-create pixel-perfectly. The two areas that are NOT final:

1. **Illustrations (`ArtSlot` placeholders)** — every painterly castle/fox/spot illustration is a placeholder rendering the brief, not the final art. Each `ArtSlot` carries its own `prompt`, `model`, `ref_`, and `palette` props that document what should be commissioned.
2. **Legal copy** — `/privacy`, `/terms`, `/disclaimer` page bodies are scaffolded structure only; final language fills in from counsel.

## Tech stack of the prototype (for reference, not for shipping)

- React 18.3.1 + ReactDOM (UMD via unpkg)
- Babel Standalone for inline JSX transform
- A custom `<image-slot>` web component (`image-slot.js`) for user-fillable image placeholders — replace with normal `<img>` in production
- A simple `go(page, ctx)` router living in `app.jsx` — replace with the framework's router
- No build step, no bundler, no package.json — production code should have all of these

## Site structure

| Route | Component | Purpose |
|---|---|---|
| `/` | `PageHome` | Hero, four "what Dart does" cards, category framing, pricing teaser, roadmap, final CTA |
| `/how-it-works` | `PageHowItWorks` | Step-by-step explainer with mobile screenshots |
| `/pricing` | `PagePricing` | Master signup form + full pricing matrix (2 tiers × 2 party sizes × 3 durations) |
| `/about` | `PageAbout` | Story, principles, full Disney non-affiliation disclaimer |
| `/partnerships` | scaffold inside `page-about.jsx` (or its own route) | Creator / blog partnerships |
| `/learn` | `PageLearn` | FAQ with FAQ schema for SEO |
| `/privacy` | `PagePrivacy` | Scaffolded — counsel fills |
| `/terms` | `PageTerms` | Scaffolded — counsel fills |
| `/disclaimer` | `PageDisclaimer` | Full Disney non-affiliation statement |

## Design tokens

All tokens live in `source/tokens.css`. **Key values:**

### Colors

```
/* Surfaces */
--bg:            #fbf3df   warm buttercream — page bg
--bg-2:          #f5e7c1   lifted cream
--paper:         #ffffff   card surface on cream
--paper-2:       #fffaee   card hover

/* Ink */
--ink:           #1f1b3a   primary text — deep ink with violet warmth
--ink-2:         #4d4763   secondary text
--ink-3:         #7a7390   muted

/* Rules */
--rule:          rgba(31, 27, 58, 0.12)
--rule-strong:   rgba(31, 27, 58, 0.22)

/* Accents */
--brick:         #c8362a   primary CTA — theme-park marquee red
--brick-deep:    #a52a20   CTA hover
--twilight:      #2a2562   dark accent panels
--twilight-deep: #1c184a   deepest dark
--magenta:       #c1378a   punctuation accent
--teal:          #2c8a82   success / dining
--gold:          #c88a1c   deep amber — vintage poster
--gold-deep:     #a07014
--rust:          #b96a3c   fox fur tone

/* Cream-on-dark (for twilight panels) */
--cream:         #fbf3df
--cream-2:       #ede0bd
```

### Typography

```
--serif: 'Source Serif 4', Georgia, serif         /* H1, display, italics */
--sans:  'Inter Tight', system-ui, sans-serif     /* body, UI */
--mono:  'JetBrains Mono', ui-monospace, monospace /* prices, eyebrows, technical */

body         16px / 1.55
.h-display   ~64–72px serif italic (per `site.css`)
.h-section   ~40–48px serif
.h-card      ~20–22px serif
.eyebrow     11px mono uppercase, letter-spacing 0.14em
.lead        18px sans, line-height 1.6
```

Source Serif 4 is the heart of the brand — it carries every italicized headline and price. Inter Tight for everything functional. JetBrains Mono for prices, eyebrows, and disclaimer copyright lines.

### Radii

```
--r-sm:    6px
--r-md:   10px
--r-lg:   14px   /* default card */
--r-xl:   20px   /* hero / large surfaces */
--r-pill: 999px  /* CTAs, tags */
```

### Shadows

```
--shadow-sm:   0 1px 2px rgba(31,27,58,.08), 0 0 0 1px rgba(31,27,58,.04)
--shadow-md:   0 12px 32px rgba(31,27,58,.12), 0 2px 4px rgba(31,27,58,.06)
--shadow-glow: 0 0 0 1px rgba(200,54,42,.35), 0 8px 28px rgba(200,54,42,.18)
```

### Spacing rhythm

The site uses a fluid 8/12/16/24/36/56/80px scale. Section vertical padding is consistently 80–112px on desktop, halved on mobile. Container widths: `.container` (max 1200px), `.container-narrow` (max 760px).

## Key components

| Component | File | Notes |
|---|---|---|
| `Nav` | `shared.jsx` | Sticky top, fox logo, 5 links, primary CTA |
| `Footer` | `shared.jsx` | Twilight-deep bg, full Disney non-affiliation disclaimer |
| `HeroEyebrow` | `shared.jsx` | Pulse-dot animated eyebrow ("Lightning Lane · July 2026 · Pre-launch") |
| `ArtSlot` | `shared.jsx` | Placeholder for commissioned illustrations — production replaces with `<img>` |
| `PricingMatrix` | `shared.jsx` | 2 tiers × 2 party sizes × 3 durations matrix |
| `Fox` | `fox.jsx` | SVG mascot, hand-drawn storybook styling, sized via viewBox |
| `IconDart` / `IconHunt` / `IconMagic` / `IconBadge` | `icons.jsx` | Three motif glyphs + tinted circular badge wrapper |

## Hero (`/`) — pixel spec

Layout: 2-column grid on desktop (`1.05fr / 1fr` or thereabouts via `.hero-grid`), single-column stacked on mobile. Background `.hero.starlit` is the deep twilight gradient with subtle star scatter.

Left column (vertical stack, ~24–32px gap):
1. `<HeroEyebrow>` — pulse dot + "Lightning Lane · July 2026 · Pre-launch"
2. `<h1>` — Source Serif 4 italic, two lines: "Be a guest at" / "*your own vacation.*" — second line in `--gold` via `.alt`
3. `<p class="lead">` — body, max-width ~520px
4. `.hero-ctas` — flex row: brick primary CTA + secondary outline CTA
5. Italic supporting line — 13.5px, `--cream-2`, opacity 0.78: *"Lightning Lane today, Dining coming this fall."*
6. `.hero-meta` — three small mono labels (Lightning Lane / Dining add-on / From)

Right column: `<ArtSlot>` 4:5 ratio, painterly castle-at-dusk + fox illustration.

## Interactions & behavior

- **Routing** — single-page app via the `go(page, ctx)` function in `app.jsx`. Reproduce as real routes in production. Preserve the `source` analytics context passed to `/pricing` from each entry point (hero CTA = `home-hero`, pricing teaser = `home-pricing`, final CTA = `home-final`, etc.) — the signup form uses it for attribution.
- **Pricing form** — single master signup form lives on `/pricing` (`page-pricing.jsx`). Entry points across the site all route here with a `preselectedTier` prop. Form submission target is TBD; wire to the user's email/CRM provider.
- **Mobile breakpoint** — `~720px`. Footer grid and hero grid both collapse to single-column / two-column there. No hamburger nav planned at this fidelity; nav links wrap.
- **Hover states** — all CTAs darken (`--brick` → `--brick-deep`, `--gold` → `--gold-deep`). Cards gain `--shadow-md` on hover. Defined in `site.css`.
- **Pulse dot** — `.hero-eyebrow .dot` has a 2s ease-in-out infinite pulse animation. CSS keyframes in `site.css`.

## State management

Almost none. Just:
- Current page (replace with router)
- Signup-form context (`source`, `preselectedTier`) — passed via router state in production
- Form values on `/pricing` — local component state until wired to provider

## Assets

| Asset | Where used | Notes |
|---|---|---|
| `assets/product-mobile-welcome.png` | `/how-it-works` | High-fidelity iOS mockup |
| `assets/product-mobile-plan.png` | `/how-it-works` | iOS mockup of the plan view |
| `assets/product-mobile-chat.png` | `/how-it-works` | iOS mockup of the chat view |
| `assets/product-mobile-toast.png` | `/how-it-works` | iOS mockup with notification toast |
| Hero castle illustration | `/` hero | **Placeholder** — needs commissioning. See `ArtSlot` props in `page-home.jsx` for prompt, palette, reference style |
| Three home spot illustrations | `/` "What Dart does" | **Placeholders** — see `ArtSlot` props |
| About-page illustrations | `/about` | **Placeholders** |

The mobile mockups are real and final — use directly. Painterly illustrations are placeholder briefs rendering against `ArtSlot` until commissioned.

## Disclaimer requirements (legal)

Per the original product spec, a Disney non-affiliation disclaimer **must** appear:

1. **In the footer of every page** — full version (already implemented in `shared.jsx` `<Footer>`)
2. **Prominently on `/about`** — second-screen, well-formatted (already implemented)
3. **As a full Q&A entry on `/learn`** (already implemented)
4. **Linked from the home final CTA** as a small line + "Read the full disclaimer →" link to `/disclaimer`

Canonical text:
> Dart and HeyDart are not affiliated with, endorsed by, or sponsored by The Walt Disney Company or any of its affiliates or subsidiaries. All Disney park names, attraction names, and related marks are the property of their respective owners.

## Files in this handoff

```
source/
  heydart.com.html        Entry HTML (loads tokens, styles, scripts)
  tokens.css              Design tokens — keep in production
  site.css                Page styles — port to production CSS / CSS-in-JS
  app.jsx                 Router shell — replace with framework router
  shared.jsx              Nav, Footer, HeroEyebrow, ArtSlot, PricingMatrix
  fox.jsx                 SVG mascot
  icons.jsx               IconDart / IconHunt / IconMagic / IconBadge
  image-slot.js           User-fillable image placeholder web component (drop in production)
  page-home.jsx           Home page
  page-how-it-works.jsx   /how-it-works
  page-pricing.jsx        /pricing — signup form + matrix
  page-about.jsx          /about + disclaimer prominence
  page-learn.jsx          /learn — FAQ with FAQ schema
  page-legal.jsx          /privacy, /terms, /disclaimer scaffolds
  assets/                 Mobile screenshots (final, ready to use)
```

## Open the prototype locally

`source/heydart.com.html` is a single-file React-via-Babel prototype. Open it directly in a browser (or serve the folder with any static server — `python -m http.server`, `npx serve`, etc.). All scripts load from CDN.
