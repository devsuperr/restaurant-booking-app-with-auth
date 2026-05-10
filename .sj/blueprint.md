# Project blueprint

## Project brief
A simpler version of rot.pointspay.io — Red Orange Technologies. Staff augmentation, Salesforce delivery, and enterprise IT solutions. Clean, modern, trust-focused design with warm red-orange brand palette.

## Built so far
- Phase 1b (app workflow): `/bench` interactive directory — 12 engineers, search by name/skill/city, role chips, availability checkboxes, max-rate slider, min-years slider, empty state with reset, custom-shortlist CTA. Navbar + Home "Browse the full bench" link both point to /bench.
- Phase 1 (frontend): Vite + React + TS scaffold, Tailwind with custom `brand` (red-orange) + `ink` (neutral) palettes, Plus Jakarta Sans display font + Inter body
- Pages (5): HomePage, ServicesPage, BenchPage, AboutPage, ContactPage
- Shared components: Navbar (mobile burger, 4 links), Footer (4 columns)
- NotFound catch-all wired in App.tsx
- index.html has fully-rendered inline-fallback HTML mirroring HomePage for iframe preview

## Pending
- Backend / Supabase database (none yet — contact form + bench filters are local-state only)
- Persisted shortlist (user can pick 3 engineers → save → email to themselves)
- Engineer detail page (`/bench/:id`) with full CV, recent work, references
- Case-studies detail pages
- Real form submission endpoint (currently simulated with setTimeout)
- Auth for client portal (timesheets, invoices, replacement requests)

## Architecture
- Vite + React 18 + TypeScript + React Router
- Tailwind with custom `brand-*` (50-950 red-orange ramp) and `ink-*` (neutral ramp)
- Marketing + bench directory frontend; all data inline as typed TS arrays
- No Supabase yet; filters and forms are local-state only
- Mobile burger via useState in Navbar; sticky header with backdrop blur
- BenchPage uses `useMemo` for filter pipeline (search + role + availability + rate + years)

## Last session
2026-05-10 — Added interactive `/bench` directory page with multi-axis filtering, wired into Navbar + HomePage CTA.