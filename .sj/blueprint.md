# Project blueprint

## Project brief
LeadPilot AI — a complete SaaS product for AI-powered lead management and follow-up for small service businesses. Includes landing site, auth flow, dashboard, leads CRUD with kanban + table, lead detail timeline, follow-up tasks, AI follow-up generator (mock first, OpenAI/Claude later), and settings. Visual style: premium SaaS, white/black with violet accent, Linear/Attio/Notion quality.

## Built so far
- Phase 1 (frontend landing): Vite + React + TS scaffold, HomePage with hero / product preview / features grid (6) / how-it-works (4 steps) / AI demo card / pricing (3 tiers) / testimonials / CTA / footer. Navbar with mobile menu. Brand identity: ink-* + accent-* (violet) palette, Inter/Geist display.
- Files: package.json, vite.config.ts, tsconfig*, tailwind.config.ts (custom ink + accent palettes), postcss, src/main.tsx, src/App.tsx (with NotFound catch-all), src/pages/HomePage.tsx, src/pages/NotFound.tsx, src/components/Navbar.tsx, src/components/Footer.tsx, src/lib/{supabase,utils}.ts, src/index.css, index.html (with full inline-fallback mirroring HomePage).

## Pending
- Phase 2: Database schema (users, companies, leads, lead_notes, tasks, ai_messages, activity_logs, subscription_plans) + RLS + edge functions for leads / tasks / ai-messages CRUD + seed data
- Phase 3: Auth (signup, login, forgot-password) with branded auth pages, profiles trigger, protected routes
- Phase 4: Dashboard page (KPI cards, recent activity, upcoming follow-ups, lead source chart with Recharts)
- Phase 5: Leads module (table view + kanban view with drag, create/edit/delete modals, filters)
- Phase 6: Lead detail page (notes timeline, tasks, AI messages, status updates)
- Phase 7: Follow-up tasks (calendar/list view, priority, status)
- Phase 8: AI follow-up generator (mock generator first; edge function with provider abstraction for OpenAI/Anthropic later)
- Phase 9: Settings (company profile, team placeholder, notifications, subscription placeholder)
- Phase 10: Stripe billing wiring for the 3 plans

## Architecture
- Vite + React 18 + TS, React Router 6, TanStack Query, Tailwind 3 with custom ink/accent palettes
- Animations via framer-motion (used sparingly), icons via lucide-react, charts via recharts (deferred until dashboard phase)
- Supabase for DB + auth + edge functions (not yet wired — frontend only this phase)
- Folder structure: src/pages/* for routes, src/components/* for shared, src/lib/* for clients/utilities. Feature folders (src/features/leads, etc.) to be added in phase 5.
- Mock-AI strategy: edge function with provider switch — defaults to local mock generator that templates from lead data; switches to OpenAI or Anthropic when API key present in Supabase secrets.

## Last session
2026-05-04 — Phase 1 shipped: landing page (hero + product preview + 6 features + 4-step how-it-works + AI demo card + 3-tier pricing + 3 testimonials + CTA + footer) with full inline-HTML fallback in index.html. Brand: white/black/violet, ink + accent palettes locked in.