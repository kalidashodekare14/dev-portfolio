# AGENTS.md

## Next.js version warning

This repo uses **Next.js 16.3.4** — APIs and conventions may differ from your training data. Read guides in `node_modules/next/dist/docs/` before writing Next.js code. The `AGENTS.md` auto-header block is added by `next dev`; commit it with your changes to keep the tree clean.

## Commands

```bash
npm run dev        # start dev server (port 3000)
npm run build      # production build
npm run lint       # eslint (core-web-vitals + typescript)
```

No test suite is configured. No formatter is configured beyond eslint.

## Architecture

Single-page portfolio site. All routes live under `src/app/` (App Router).

```
src/
  app/
    layout.tsx          # root layout — providers wrap here
    page.tsx            # single page: composes all section components
    globals.css         # Tailwind v4 + CSS custom properties (theme tokens)
    api/contact/route.ts  # POST endpoint — nodemailer via Gmail
  components/           # section components (Navbar, HeroSection, AboutMe, etc.)
  data/                 # static data arrays (projects, techstack, services, education)
  lib/
    ThemeProvider.tsx    # dark/light toggle via localStorage + class on <html>
    SmoothScrollProvider.tsx  # Lenis + GSAP ScrollTrigger
    useActiveSection.ts  # IntersectionObserver for navbar highlight
```

## Key conventions

- **Theme**: CSS custom properties in `globals.css` (`:root` = dark, `.light` = light). Theme toggle adds/removes `.light` class on `<html>`. Use `var(--background)`, `var(--primary)`, etc.
- **Scroll reveal**: Elements with class `sr` get `revealed` class via IntersectionObserver. Use `sr-left`, `sr-right`, `sr-scale` variants and `sr-delay-*` for staggering.
- **Animations**: GSAP + Lenis smooth scroll. `@gsap/react` available. ScrollTrigger plugin is registered globally.
- **Data**: Static arrays in `src/data/`. No CMS — edit the `.ts` files directly.
- **Contact form**: Requires `EMAIL_USER` and `EMAIL_PASS` env vars (Gmail app password). Endpoint validates input before sending.
- **Path alias**: `@/*` maps to `src/*`.
- **Tailwind v4**: Uses `@tailwindcss/postcss` plugin (not v3 config file). Theme tokens are mapped via `@theme inline` in CSS.
- **Icons**: `lucide-react` for UI icons. Emoji strings used in data files for tech/service icons.

## Gotchas

- `ScrollRevealProvider` runs client-side only — elements must be in DOM before observer attaches.
- `ThemeProvider` returns dark theme until mounted to avoid hydration mismatch.
- `Lenis` smooth scroll hooks into GSAP ticker — don't mix with other scroll libraries.
- No `tailwind.config.js` — Tailwind v4 configures via CSS (`@theme inline`).
