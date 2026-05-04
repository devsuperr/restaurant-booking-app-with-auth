# Project blueprint

## Project brief
Landing page for **Plume** — an autonomous AI for social media (Native.no clone).
The user pasted https://native.no/en/ as the visual reference. Match its
minimalist Nordic aesthetic: cream canvas, EB Garamond serif headlines with
italic accents, yellow highlight, generous whitespace, glassy navbar, hero with
URL-capture card, "How it works" 3-step section, single-tier pricing,
testimonial grid.

## Built so far
- Phase 1 (frontend, Vite + React + TS):
  - Scaffold: package.json, vite.config.ts, tsconfig{,.node}.json, tailwind.config.ts, postcss.config.js, .gitignore, vercel.json, netlify.toml
  - index.html with Tailwind-styled inline-fallback mirroring the React landing
  - src/App.tsx + main.tsx + index.css (EB Garamond + Inter + Fragment Mono)
  - Pages: HomePage, NotFound
  - Components: Navbar (sticky glass), Hero (URL form + rotating word + caret), HowItWorks (3 steps), Comparison (with/without), Testimonials (6 quotes), Pricing (single tier €349/mo), CTA, Footer
  - Brand: "Plume" — black + cream + amber-yellow accent (#E9B638)

## Pending
- Auth (login/signup/forgot-password) + Supabase wiring
- Real signup flow — capture URL on hero form into a leads table
- Dashboard for logged-in users (calendar of scheduled posts, channel list)
- Edge function to actually crawl + analyse a submitted website (Resend for confirmation email per intent classifier)
- Stripe billing for the €349/mo tier
- About / Contact / Privacy / Terms pages

## Architecture
- Vite + React 18 + TS + Tailwind, react-router-dom for routing
- Cream/dark/yellow palette via Tailwind theme extension (canvas, ink, accent)
- EB Garamond for display, Inter for UI, Fragment Mono for eyebrow labels
- index.html ships a Tailwind-CDN inline fallback so the studio iframe shows the
  rendered landing without a bundle
- Mock data inline in components — no backend yet
- NotFound catch-all wired in App.tsx

## Last session
2026-05-04 — Fresh build. Scaffolded full Vite project + Native.no-style landing
page for "Plume" (social media autopilot SaaS). 6 sections: hero with URL
capture + rotating word, how-it-works (3 steps), with/without comparison, 6
testimonials, single-tier pricing, dark CTA, footer. No backend yet.