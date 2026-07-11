# Very Disco Game Jam

Very Disco Game Jam is a static Next.js showcase for JAMMED Space game jam volumes. The site presents each volume as a small arcade-style archive: bold pixel typography, full-bleed theme artwork, animated volume-specific backgrounds, compact stats, and submission cards that link out to itch.io.

## Current Direction

The site is intentionally dark, graphic, and compact. It should feel like a retro game-jam gallery rather than a marketing landing page.

- Home opens directly into the featured volume experience.
- Volume switching changes both the theme card and the animated background.
- Vol. 1 uses a blue rigid net/chain atmosphere.
- Vol. 2 uses an orange wavy atmosphere.
- Volume detail pages use a two-panel masthead: full theme image on the left, animated details on the right.
- Submission descriptions are not stored or displayed anywhere in the app.
- Light/dark switching UI is disabled; the dark presentation is the intended experience.

## Tech Stack

- Next.js App Router with static export
- React 19
- Tailwind CSS 4
- `framer-motion` / `motion`
- Vanta.js with Three.js for animated backgrounds

## Project Structure

```txt
app/
  components/
    Header.tsx
    HeroSection.tsx
    ThemeStack.tsx
    VantaHeroBackground.tsx
    ImageWithFallback.tsx
    ThemeProvider.tsx
  data/
    volumes.ts
  volumes/
    page.tsx
    [id]/page.tsx
```

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## Content Notes

Volume and game data lives in `app/data/volumes.ts`.

Keep volume data concise:

- Keep `title`, `theme`, `coverImage`, `date`, stats, and games.
- Do not add `description` fields to volumes or games.
- Use itch.io links as the canonical play destination.
- Prefer real jam artwork and real submission images over decorative placeholders.

## Design Notes

The source of truth for visual direction is `DESIGN.md`. Before changing major layout, background animation, typography scale, or volume page structure, update that document alongside the implementation.
