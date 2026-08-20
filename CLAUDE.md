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

A single-page personal portfolio (Adib Hoque) built with **Next.js 13 App Router** + TypeScript + Tailwind. The aesthetic is "soft dark + glow": a near-black `#0B0B14` canvas, a violet `#8B5CF6` accent, glass cards, and a cheap CSS aurora background, plus one client-only 3D hero scene (`HeroCanvas`, see below). Motion is calm scroll-reveal fade-ups. The npm package name is `spaceportfolio` for legacy reasons but the site is a personal portfolio.

## Architecture

- **`app/layout.tsx`** is the shell: it renders `AuroraBackground` (a fixed `-z-10` CSS gradient layer with animated moving grid and pulsing aurora blobs), then `Header`, then `{children}`, then `Footer`. These wrap every page. The base `bg-bg`/`text-text` tokens and scroll behavior live here and in `globals.css`.
- **`app/page.tsx`** is the entire site — it composes the section components in order: `Hero → Skills → Projects → ContactUs`. To reorder or add/remove a section on the home page, edit this file.
- **`components/main/`** = full page sections + shell pieces (Hero, Skills, Projects, ContactUs, Header, Footer, AuroraBackground). **`components/sub/`** = smaller reusable pieces used by sections (HeroContent, HeroCanvas, ProjectCard, SkillDataProvider, SkillText).
- **`constants/index.ts`** is the data layer for the Skills section — arrays (`Frontend_skill`, `Backend_skill`, `Skill_data`, `Full_stack`, `Other_skill`, `Socials`) of `{skill_name, Image, width, height}`. Skills render by mapping `Frontend_skill`/`Backend_skill`. (`Skill_data`/`Full_stack`/`Other_skill`/`Socials` are currently unused.) Projects use a separate data path: **`constants/projects.json`** (grouped into `main_projects`/`vibe_coded_projects`/`legacy_projects`) is consumed through **`constants/projects.ts`**, a typed wrapper that flattens the groups into one `projects` array with a `category` tag per entry, plus `PROJECT_CATEGORIES` metadata (label + badge/dot classes). `clientcode`/`servercode` are typed `string | false` — vibe-coded projects have no public repo — and vibe-coded entries carry `vibeCodingTools` (the AI tools used, shown as a badge).
- **`utils/motion.ts`** holds the shared Framer Motion variants. Current sections use `fadeUp(delay)` + `staggerContainer` (calm scroll-reveals); the older `slideInFromLeft/Right/Top` are still exported but currently unused (dead code).
- **`HeroCanvas`** (`components/sub/HeroCanvas.tsx`) is the site's only 3D — a react-three-fiber scene (deps: `three`, `@react-three/fiber`, `@react-three/drei`, `maath`) of a floating "cybernetic core" with gyro rings, data shards, sparkles, and mouse parallax. `HeroContent` loads it via `next/dynamic` with `ssr: false`, and it's hidden below `lg:`. Keep 3D code client-only and code-split; its brand-color constants should stay in sync with the CSS tokens in `globals.css`.
- **`public/`** holds all images/svgs, referenced by absolute path (e.g. `src="/mainIconsdark.svg"`); the resume is `/Resume.pdf`. Legacy `*.webm` videos still sit in `public/` but are no longer referenced by any component.

## Design system

- **Tokens** are CSS variables in `app/globals.css` `:root`, mapped into `tailwind.config.ts` `theme.extend.colors`/`boxShadow`. Use the utility classes rather than raw hex: colors `bg-bg`, `bg-elevated`, `bg-surface`, `border-glass`, `text-text`, `text-muted`, `text-subtle`, `text-accent`, `text-accent-soft`; shadows `shadow-glow`, `shadow-glass`.
- **Component classes** live in `globals.css` `@layer components`: `.section`, `.eyebrow` (the small pill label above headings), `.glass-panel`, `.card` (glass surface + hover lift), `.btn` + `.btn-primary`/`.btn-ghost`, `.chip` (feature tags). Reuse these for consistency instead of re-deriving styles. Legacy `.cursive`/`.Welcome-box`/`.button-primary` remain defined but are no longer used — prefer the token classes.

## Conventions & gotchas

- **Path alias:** `@/*` maps to the repo root (see `tsconfig.json`), e.g. `@/components/...`, `@/utils/motion`, `@/constants`.
- **`"use client"`** is required at the top of any component using hooks, Framer Motion, `react-intersection-observer`, or EmailJS. Purely presentational sections (e.g. `Hero`, `Skills`, `Footer`) stay server components and delegate interactivity to `sub/` children.
- **One navigation:** `Header.tsx` is the only nav (responsive, with a mobile hamburger overlay). Edit it for nav changes.
- **Section anchors:** navigation uses hash links to section `id`s (`#about`, `#skills`, `#projects`, `#contact`). When adding/renaming a section, keep the `id` on the section element in sync with the links in `Header.tsx`.
- **Scroll-reveal:** section reveals use Framer Motion `whileInView="visible"` + `viewport={{ once: true }}` with the `fadeUp`/`staggerContainer` variants. `SkillDataProvider` instead uses `react-intersection-observer`'s `useInView`.
- **`ProjectCard`** renders projects with **no images** — cards open with a gradient header (project initial + category badge), then title/description, `features` as `.chip` spans, and `technologies` as small skillicons.dev logo `<img>`s (built from the `techIcons()` slug map in `constants/projects.ts`), with a `.tag` text fallback for tools skillicons doesn't have. Vibe-coded cards show a "Built with {AI tools}" badge when `vibeCodingTools` is present. Buttons: always a primary "Live Preview" (→ `link`); code buttons appear only when a repo string exists — one "Project Code" when `clientcode === servercode` (or only one side is set), split Client/Server when both differ, none for vibe-coded projects. The card is an `<article>` (not a wrapping anchor) — the title and action buttons are the individual links.
- **EmailJS** powers the contact form (`ContactUs.tsx`) with the service/template/public keys inlined, and shows a SweetAlert2 popup on success. Keep the keys and submit logic intact when editing.
- **Footer links are honest by design:** only real destinations (GitHub, `mailto:` email). Do not add social links without a real URL.
