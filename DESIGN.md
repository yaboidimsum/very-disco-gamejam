---
version: beta
name: Very Disco Game Jam Web Direction
description: A compact dark arcade archive for JAMMED Space game jam volumes, built around pixel display type, full theme artwork, animated volume-specific backgrounds, and submission cards that prioritize play links over long copy.

colors:
  ink-black: "#050509"
  panel-black: "#08070d"
  card-black: "#0f0f15"
  white: "#ffffff"
  muted: "#a1a1aa"
  rule-dark: "#27272a"
  vol1-blue: "#6366f1"
  vol1-blue-pop: "#8c8fff"
  vol1-bg: "#07081a"
  vol2-orange: "#fb922b"
  vol2-orange-pop: "#ff6614"
  vol2-bg: "#170705"

typography:
  display:
    fontFamily: Jersey 25
    usage: Large pixel headlines, volume names, card titles, navigation labels
  body:
    fontFamily: IBM Plex Sans
    usage: Metadata, labels, buttons, stats, compact UI text

animation:
  vol1:
    effect: Vanta NET
    mood: Rigid chain-like blue line field
  vol2:
    effect: Vanta WAVES
    mood: Orange wavy surface
---

## Overview

Very Disco Game Jam is not a broad marketing page. It is a playable archive for a community game jam series. The page should feel like a compact digital poster wall: loud theme artwork, pixel type, dark UI, and enough motion to make the volumes feel alive.

The current experience has three main surfaces:

- Home: a full-viewport hero with the current highlighted volume, animated background, and a stacked card selector.
- Volumes index: a compact gallery of all jam volumes.
- Volume detail: a two-panel masthead above a dense submission grid.

The visual direction is dark by default. Light mode switching is intentionally not exposed in the header. The app may still contain theme infrastructure, but the intended presentation is the dark arcade look.

## Design Principles

### Start With The Jam Artifact

Every major page should show the real volume art or submission image early. Avoid generic illustration, stock-like decoration, or oversized explanatory copy. The theme artwork is the identity.

### Compact Beats Loose

The site should get users to the games quickly. Volume pages should avoid large empty hero padding, repeated labels, and long intro copy. Stats and metadata belong in compact rows.

### Motion Is Volume-Specific

Animation should reinforce the active jam theme:

- Vol. 1 / Chain: blue, rigid, connected, geometric, slightly mechanical.
- Vol. 2 / Cap: orange, wavy, warm, rolling, elastic.

Motion is atmospheric, not interactive clutter. It stays behind content and must preserve readable text.

### No Description Copy

Descriptions are intentionally removed from `volumesData` and should not be shown anywhere on the web. The site should rely on titles, metadata, images, stats, tags, criteria, and links.

## Color System

### Base

- **Ink Black** (`#050509`): page background and main dark canvas.
- **Panel Black** (`#08070d`): animated hero and masthead surroundings.
- **Card Black** (`#0f0f15`): dark card surfaces and media fallbacks.
- **White** (`#ffffff`): primary text on dark backgrounds.
- **Muted** (`#a1a1aa`): secondary metadata and inactive navigation.
- **Rule Dark** (`#27272a`): borders and separators.

### Volume Accents

- **Vol. 1 Blue** (`#6366f1`): buttons, badges, and Chain identity.
- **Vol. 1 Blue Pop** (`#8c8fff`): Vanta line color where the net needs definition.
- **Vol. 1 Background** (`#07081a`): blue-black animated field.
- **Vol. 2 Orange** (`#fb922b`): buttons, badges, and Cap identity.
- **Vol. 2 Orange Pop** (`#ff6614`): Vanta wave color.
- **Vol. 2 Background** (`#170705`): warm orange-black animated field.

## Typography

### Display

Use `Jersey 25` for the site personality:

- Home headline
- Volume theme names
- Submission card titles
- Header navigation
- Big stats

Display type is uppercase, large, and tight. Do not use negative letter spacing.

### Body/UI

Use `IBM Plex Sans` for readable UI:

- Metadata
- Breadcrumbs
- Button labels
- Tags
- Criteria labels
- Dates and stats captions

Most UI labels are small, uppercase, bold, and tracked. Keep them legible but compact.

## Layout

### Home

The home section is a true `100dvh` hero. It contains:

- Animated Vanta background for the highlighted volume.
- Large `Very Disco Game Jam` display headline.
- White intro text.
- One primary CTA: `Explore Volume {activeVol}`.
- Theme stack cards used to switch highlighted volume.

Do not reintroduce a secondary `All Volumes` CTA in the hero.

### Header

The header is sticky, dark, compact, and contains:

- `VDGJ` brand link.
- `Home` and `Volumes` navigation.

The theme toggle button is disabled. If light mode switching returns, restore it deliberately and test the animated background contrast in both themes.

### Volume Detail Masthead

Use a two-panel masthead:

```txt
+----------------------+-----------------------------+
| full theme image     | animated detail panel       |
|                      | breadcrumb                  |
|                      | volume + date               |
|                      | theme                       |
|                      | games / ratings / avg / med |
+----------------------+-----------------------------+

SUBMISSIONS (N)
submission grid...
```

Rules:

- Left panel is full-bleed theme artwork with `object-cover`.
- Right panel contains Vanta animation and all metadata.
- `SUBMISSIONS (N)` lives outside and below the masthead.
- Keep the masthead compact enough that the first row of games is visible quickly.

### Volumes Index

The volumes index is a gallery, not a long explainer. Each volume card should contain:

- Cover image
- Volume title badge
- Date
- Theme
- Enter Volume action

No volume descriptions.

### Submission Cards

Submission cards should prioritize:

- Game image
- Rank badge when present
- Title
- Creator names
- Criteria scores when present
- Tags
- Play on itch.io button

No game descriptions.

## Animation System

`VantaHeroBackground` is the shared background component.

### Vol. 1 Chain

Use Vanta `NET` with a blue-black background and visible blue lines. The lines should be defined enough to read as a connected structure, but not so bright that they compete with text.

Current intent:

- Rigid
- Blue
- Mechanical
- Chain-adjacent
- Dark but not muddy

### Vol. 2 Cap

Use Vanta `WAVES` with orange warmth. The effect should feel like a moving cap/theme surface rather than generic lava.

Current intent:

- Wavy
- Orange
- Warm
- Elastic
- Still readable behind white text

### Reduced Motion

When reduced motion is requested, the component falls back to static layered gradients. Those gradients should preserve the same volume identity.

## Component Guidelines

### Buttons

Primary buttons are filled with the active volume accent. Use compact uppercase labels with `IBM Plex Sans`. Keep touch targets around 48px tall where possible.

### Badges

Badges use the active volume accent and small uppercase metadata. Use them for volume numbers and rank markers, not for decorative filler.

### Cards

Cards may use rounded corners, but keep them functional. Do not nest decorative cards inside other cards. Use cards for individual volumes and submissions.

### Images

Images should be real artifacts:

- Volume covers from `public/images/theme`
- Itch.io submission images

Use `ImageWithFallback` when remote images may be missing.

## Content Rules

- Do not add `description` fields to `Volume` or `Game`.
- Do not render descriptions on any page.
- Avoid repeated labels in compact areas.
- Prefer `Volume 01`, `Volume 02`, theme, date, and stats over paragraph copy.
- Keep game links pointed at itch.io.

## Responsive Behavior

### Home

- Desktop: text left, theme stack right.
- Mobile: stacked layout, primary CTA centered.
- Hero remains `100dvh`.

### Volume Detail

- Desktop: two-column masthead, image left and animated detail panel right.
- Mobile: masthead stacks image above detail panel.
- Submission heading remains below the masthead.
- Submission grid collapses from three columns to two, then one.

## Implementation Notes

- Next.js is configured for static export.
- Vanta is loaded client-side via dynamic imports.
- Three.js is pinned to the Vanta-compatible `0.134.x` line.
- Vanta module declarations live in `app/types/vanta.d.ts`.
- Keep animated backgrounds behind content with `pointer-events-none`.
- Test both `/volumes/1` and `/volumes/2` when changing `VantaHeroBackground`.

## Do

- Keep the site dark, punchy, and compact.
- Use real artwork as the first visual signal.
- Let each volume have its own motion identity.
- Pull submissions high enough that the page quickly becomes useful.
- Keep metadata scannable.

## Don't

- Do not reintroduce long descriptions.
- Do not create generic landing-page sections.
- Do not add a visible theme toggle without redesigning light-mode contrast.
- Do not bury submissions below oversized hero copy.
- Do not use generic gradients when Vanta or real artwork can carry the mood.
