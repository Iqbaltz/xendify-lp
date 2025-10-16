# Xendify (Next.js App)

A Next.js 14 (App Router) project using Tailwind CSS v4, shadcn/ui-style components built on Radix UI, and Vercel Analytics.

## Tech stack

- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS v4 with `@tailwindcss/postcss`
- Radix UI primitives + class-variance-authority (CVA)
- shadcn/ui conventions (see `components.json`) with aliases: `@/components`, `@/lib`, `@/hooks`
- Icons: `lucide-react`
- Theming: `next-themes` (ThemeProvider component available)
- Utilities: `tailwind-merge`, `clsx`
- UX libs present: `embla-carousel-react`, `recharts`, `sonner`, `react-hook-form`, `zod`, `date-fns`
- Analytics: `@vercel/analytics`

## Project layout

- `app/` — App Router entry, global styles, root layout
  - `layout.tsx` — Geist fonts + Vercel Analytics
  - `page.tsx` — Composes sections (`Header`, `HeroSection`, etc.)
  - `globals.css` — Tailwind v4 setup, OKLCH theme tokens, dark mode, CSS variables
- `components/` — Feature and UI components
  - `ui/` — Reusable primitives (Button, Dialog, Tabs, etc.) built with Radix + CVA
  - `theme-provider.tsx` — Thin wrapper around `next-themes` provider
- `hooks/` — App hooks (toast/mobile)
- `lib/` — Utilities (e.g., `cn`)
- `public/` — Static assets

## Scripts

- `pnpm dev` — Start dev server
- `pnpm build` — Production build
- `pnpm start` — Start production server (after build)
- `pnpm lint` — Run Next.js lint (linting is ignored during build per `next.config.mjs`)

## Prerequisites

- Node.js 18+ (Next.js 14 requirement)
- PNPM installed

## Getting started

1. Install deps

```bash
pnpm install
```

2. Run in development

```bash
pnpm dev
```

3. Build and run production

```bash
pnpm build
pnpm start
```

## Notes

- TypeScript and ESLint errors are configured to be ignored during builds (`next.config.mjs`). Consider tightening this for CI.
- Images are `unoptimized: true` — adjust if you want Next Image Optimization.
- Tailwind v4 is configured via PostCSS plugin in `postcss.config.mjs` and tokens in `app/globals.css`.
- A `ThemeProvider` is available but not yet used in `app/layout.tsx`. To enable class-based dark mode:
  - Wrap children with `<ThemeProvider attribute="class" defaultTheme="system" enableSystem>…</ThemeProvider>`
  - Ensure `html` element uses the class from `next-themes` (it will toggle `.dark`).

## Deployment

Optimized for Vercel (includes `@vercel/analytics`). Any platform supporting Node.js can run it via `pnpm build && pnpm start`.
# xendify-lp
