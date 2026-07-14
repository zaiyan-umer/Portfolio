# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site (zaiyan.me) built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and Sanity CMS.

## Commands

```bash
npm run dev      # start dev server (Next.js, Turbopack)
npm run build    # production build
npm run start    # run production build
npm run lint     # eslint (flat config, eslint-config-next)
```

There is no test suite configured in this repo.

Sanity Studio is embedded in the app itself (not a separate project) — run `npm run dev` and visit `/studio` to edit content.

## Environment variables

Required (see `.env`, gitignored):
- `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET` — Sanity project connection
- `SANITY_API_WRITE_TOKEN` — write access used only by the contact form API route
- `GITHUB_TOKEN`, `GITHUB_USERNAME` — used by `/api/github` to pull GitHub contribution-calendar data via `@octokit/graphql`
- `NEXT_PUBLIC_COMPONENTS_BASE_URL` — raw-content base URL the `/docs` pages fetch demo/source code from at request time (see below)

## Architecture

### Route groups
- `app/(frontend)/**` — all public-facing pages (home, projects, blog, repositories, docs). The group has its own `template.tsx` that applies a fade/slide transition on route change via `motion`.
- `app/studio/[[...tool]]/page.tsx` — mounts the Sanity Studio, configured by the root `sanity.config.ts` (schema in `sanity/schemaTypes`, structure in `sanity/structure.ts`).
- `app/api/*` — route handlers: `contact` (writes a `message` doc to Sanity) and `github` (proxies GitHub's GraphQL contributions API).

### Sanity data layer
- `sanity/env.ts` reads/validates the required env vars.
- `sanity/lib/client.ts` — read-only client (`useCdn: true`) used for standard page data fetching.
- `sanity/lib/live.ts` — exports `sanityFetch`/`SanityLive` (next-sanity Live Content API) for pages that need auto-updating content.
- `app/api/contact/route.ts` builds its own write-enabled client using `SANITY_API_WRITE_TOKEN`; this token must never be used client-side.
- All GROQ queries live centrally in `lib/sanity.queries.ts` (projects, featured projects, single project, posts, single post) — add new queries here rather than inlining GROQ in components/pages.
- Schema types (`project`, `post`, `author`, `category`, `message`, block content) live in `sanity/schemaTypes/` and are aggregated in `sanity/schemaTypes/index.ts`.

### Theming
- `store/theme.store.ts` is a small zustand store (`light`/`dark`) that toggles the `dark` class on `document.documentElement` and persists to `localStorage`.
- `components/layout/ThemeInitializer.tsx` is a client component mounted once in `app/layout.tsx` that reads `localStorage` on mount and syncs the store/DOM class (default `light`, no `prefers-color-scheme` fallback).
- Theme tokens are CSS custom properties defined in `app/globals.css` (oklch colors, shadcn-style `--background`/`--foreground`/etc.), consumed via Tailwind v4's `@theme`/`@custom-variant dark (&:is(.dark *))` — there is no separate `tailwind.config`.

### Component folder structure
`components/` is organized by role rather than as a flat list — when adding a component, place it by what it does, not where it happens to be used from:
- `components/layout/` — global chrome mounted once in `app/layout.tsx`: `Navbar`, `NavbarTable`, `CanvasCursorWrapper` (custom canvas-based cursor effect), `ThemeInitializer`, `TransitionWrapper` (first-visit loading screen via `sessionStorage` flag `hasShownLoader`, then fades in content).
- `components/sections/` — the composed blocks rendered by the homepage (`app/(frontend)/page.tsx`): `MainBody`, `AboutMe`, `ContributionCalendar`, `Experience`, `SkillsAndCoursework`, `CourseWork`, `ContactForm` (+ its `BtnAnimations` helper), `Footer`, `LoadingScreen`. Each `id="..."` on a section's root is an anchor target that `NavbarTable`'s scroll-linked nav entries jump to (e.g. `#about`, `#experience`, `#contact`) — keep one section owning one anchor id.
- `components/docs/` — components specific to the `/docs` feature (currently just `ComponentDocs.tsx`).
- `components/projects/` — components specific to the `/projects` feature (currently just `ExternalLinkHoverEffect.tsx`).
- `components/ui/` — shadcn/ui primitives (`new-york` style, see `components.json`) plus custom primitives (`border-beam`, `BorderCard`, `CursorCrosshair`, `panel`, `svgs` icon set, etc.) and the `tech-stack.tsx` display component. Not all generated shadcn primitives are used yet (e.g. `avatar`, `sheet`, `tabs`) — that's expected shadcn scaffolding, not dead code to chase.
- `components/data/` — hardcoded, typed content consumed by the matching section/ui component (`about-me.ts`, `experience.ts`, `course-work.ts`, `tech-stack.ts`). Keep content data separate from the component that renders it, following this pattern for any new static content.

Path aliases: `@/components`, `@/components/ui`, `@/lib`, `@/hooks` all resolve under the repo root via the `@/*` tsconfig path; prefer `@/components/...` imports over relative paths when crossing between these folders.

### `ui-components/` and the `/docs` pages
- `ui-components/` (top-level, separate from `components/`) holds standalone, portfolio-agnostic showcase components (currently `ProjectCards`, `InteractiveProjectCards`), each with an `index.ts` barrel export and a `*Demo.tsx` used for the live preview.
- These mirror a separate public GitHub repo (`zaiyan-umer/ui-components`). The `app/(frontend)/docs/**` pages render a live demo locally (importing from `ui-components/`) but fetch the *displayed* demo/source code text at request time from `NEXT_PUBLIC_COMPONENTS_BASE_URL` (raw GitHub content) via `components/docs/ComponentDocs.tsx`. When editing a component under `ui-components/`, the corresponding file in that external repo should be updated too, or the docs page will show stale source code.

## Deployment

`Dockerfile` is a two-stage Node 20-slim build (`npm install` + `npm run build`, then copies `.next`, `node_modules`, `public` into the runtime image and runs `npm start` on port 3000). The site is live at zaiyan.me.
