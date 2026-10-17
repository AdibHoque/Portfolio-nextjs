# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # next lint (eslint-config-next / core-web-vitals)
```

There is no test setup in this project.

## What this is

A single-page personal portfolio (Adib Hoque), built with **Next.js 13 App Router** + TypeScript + Tailwind. The aesthetic is **paper and ink**: a warm-neutral light canvas (`#EFF0EE`), near-black text, hairline rules instead of cards, and a single ultramarine accent. Project screenshots supply nearly all the colour on the page — the frame stays quiet on purpose. The npm package name is `spaceportfolio` for legacy reasons but the site is a personal portfolio.

## Architecture

- **`app/layout.tsx`** is the shell: skip link, `Header`, `{children}`, `Footer`, plus the Person/WebSite JSON-LD. The font is loaded here via `next/font` as `--font-sans`.
- **`app/page.tsx`** is the entire site — `Hero → Work → Note → Contact`. To reorder or add/remove a section, edit this file and keep `Header.tsx`'s hash links in sync.
- **`components/main/`** holds every section: `Hero`, `Work`, `Note`, `ContactUs`, `Header`, `Footer`. There is no `components/sub/` — the previous sub-components were removed with the card grid and 3D scene.
- **`constants/site.ts`** is the content layer: name, URL, email, socials, SEO keywords, and all homepage prose (`intro`, `note` paragraphs, `stack` groups). Copy edits belong here, not in components — with the exception of `Work.tsx`, which reads project data.
- **`constants/projects.json`** holds the projects, grouped as `main_projects`/`vibe_coded_projects`/`legacy_projects` (the JSON grouping is retained as an editing convenience only). **`constants/projects.ts`** flattens them into one ordered `projects` array and defines the `featured` case study. `projects[0]` (NextWear) is the featured project — reorder the JSON if that should change.
- **Each project requires `imageWidth`/`imageHeight`** (the screenshot's real pixel size). `next/image` needs them to reserve the right box; without them the image is drawn at an assumed ratio. When adding a screenshot, read its dimensions off the PNG header and record them.
- **`ProjectShot`** (exported from `Work.tsx`) is the screenshot frame: hairline border, `min-w-0`, and `object-contain`. The `min-w-0` is load-bearing — a grid item defaults to `min-width: auto` and will widen the page to the image's intrinsic width without it.

## Design system

- **Tokens** are CSS variables in `app/globals.css` `:root`, mapped in `tailwind.config.ts`: `bg-paper`, `text-ink`, `text-muted`, `text-faint`, `border-line`, `border-line-strong`, `text-accent`/`bg-accent`. Use these rather than raw hex.
- **Component classes** in `globals.css` `@layer components`: `.shell` (the page container — every section uses it), `.link`, `.masthead-link`, `.btn-ink`, `.field`, `.rise`.
- **Type:** one family only, `Figtree` via `next/font`. Hierarchy comes from scale and weight, never a second face. Do **not** switch to Schibsted Grotesk or Instrument Sans on Next 13.5 — they build but ship no fallback metrics, so text shifts on load.
- **Motion:** `.rise` is the only entrance animation on the page, applied to hero elements with a `--d` delay. All animation is disabled under `prefers-reduced-motion`. Do not add scroll-triggered reveals or per-card hover lifts; the page is deliberately still.

## Conventions & gotchas

- **Path alias:** `@/*` maps to the repo root (see `tsconfig.json`).
- **`"use client"`** is required for `Header` (state) and `ContactUs` (EmailJS). Every other component is a server component — keep it that way.
- **One navigation:** `Header.tsx` is the only nav. It is sticky, collapses to a text toggle below `sm`, closes on Escape, and returns focus to the toggle **in an effect, not inside the keydown handler** — focusing in the same tick as `setOpen` races the `hidden` attribute and focus lands on `<body>`.
- **Section anchors:** `#top`, `#work`, `#note`, `#contact`, mirrored in `Header.tsx`.
- **EmailJS** powers the contact form with the service/template/public keys inlined. Keep the keys and the submit logic intact. The form has four states (`idle`/`sending`/`sent`/`error`) surfaced inline with `aria-live`; there is no SweetAlert2. The failure state must stay visible and must offer the email address.
- **Copy honesty:** the site deliberately omits claims it cannot support — no location, no availability status, no invented project dates. `featured.role` and `featured.year` are empty strings and their rows do not render; fill them in only with facts.
- **Footer links are honest by design:** GitHub, `mailto:`, and the resume only.
- **`public/`** holds `Resume.pdf` and `ProjectImages/`. Nothing else — the old skill logos were removed with the icon grid.
- **`out/`** is a stale static export from an older build; it is gitignored and not produced by `next build`.
