# Impulse — Marketing Site

Vue 3 + Vite single-page marketing site for Impulse (telecom analytics & sales).
Deployed on Vercel; serverless functions live in `api/`.

## Requirements

- Node 18+
- npm (the canonical package manager for this repo — do not use yarn/pnpm)

## Setup

```bash
npm install
```

## Develop (hot reload)

```bash
npm run dev
```

## Build for production

```bash
npm run build
```

## Preview the production build

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

> Note: the `lint` script runs eslint with `--fix`, so it auto-formats files as
> it runs.

## Environment

Copy `.env.example` to `.env` and provide values. These are consumed by the
`api/` serverless functions (contact form via Postmark). Never commit real
secrets.

## Project layout

- `src/views/` — page-level route components (lazy-loaded in `src/router/route.js`)
- `src/components/` — shared components (`src/components/pillar/` = product-pillar visuals)
- `src/i18n/locales/` — `en.json` / `es.json` (bilingual content)
- `src/store/` — Pinia stores
- `api/` — Vercel serverless functions

## Improvement plans

See `plans/` for advisor-generated implementation plans and their status.
