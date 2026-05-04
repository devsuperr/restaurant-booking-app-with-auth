# Project blueprint

## Project brief
LeadPilot AI — AI-powered lead management & follow-up SaaS for small service businesses.
Premium modern SaaS feel (Linear / Attio / Notion / HubSpot quality), white/black palette + indigo accent (#4F46E5). Full-stack: marketing site, auth, dashboard, leads kanban + table, contact detail, tasks, AI follow-up generator, settings. Database: users, companies, leads, lead_notes, tasks, ai_messages, activity_logs, subscription_plans.

## Built so far
- Phase 1 (frontend foundation + landing):
  - Vite + React + TS scaffold (package.json, vite.config.ts, tsconfig*, tailwind.config.ts, postcss.config.js)
  - `index.html` with full inline-fallback landing (so studio iframe shows real content without bundle)
  - `src/main.tsx`, `src/App.tsx` with `/` + catch-all NotFound
  - `src/index.css` with design tokens (ink/accent/line palette, Inter font)
  - `src/lib/utils.ts` (cn, formatCurrency, formatRelativeDate), `src/lib/supabase.ts` (lazy client + isSupabaseReady flag)
  - `src/components/Navbar.tsx` (sticky + scroll state + mobile menu) and `src/components/Footer.tsx`
  - `src/pages/HomePage.tsx` — hero w/ animated KPI + kanban preview, features grid (6), how-it-works (3 steps), pricing (3 tiers), testimonials (3), dark CTA, footer
  - `src/pages/NotFound.tsx` — friendly fallback for unbuilt routes

## Pending
- Auth phase: Login / Signup / ForgotPassword / Profile pages, Supabase auth wiring, AuthContext, ProtectedRoute, auth-callback, branded form pages, schema.sql with profiles + companies (signup creates company)
- Database phase: full schema.sql (companies, leads, lead_notes, tasks, ai_messages, activity_logs, subscription_plans) + RLS scoped by company_id, edge functions api-leads / api-tasks / api-ai
- App shell: sidebar + topbar layout for /app/* routes
- Dashboard page: KPI cards, recent activity, upcoming follow-ups, lead source chart (recharts)
- Leads module: kanban view (drag-drop status update), table view, filters (status/source/date), search, create/edit/delete lead modal
- Contact detail page: full lead profile, notes timeline, tasks, status update, internal comments
- Tasks module: list + calendar-style view, priorities, overdue highlight
- AI Follow-up generator: lead picker + tone selector + mock generator (template-based, ready to swap for OpenAI/Anthropic via studio-ai-proxy)
- Settings: company profile, team members placeholder, notification prefs, plan placeholder
- Polish: toast notifications, confirm-delete modal, loading skeletons, beautiful empty states, seed/demo data

## Architecture
- Tailwind palette: ink (near-black) + accent indigo `#4F46E5` + soft line `#ECECEF` on white canvas. Inter font, rounded-2xl cards, soft shadow-card + shadow-glow for hero CTA.
- React Router v6 with future `/app/*` private routes (TBD); currently only `/` is wired.
- Supabase client is lazy: `isSupabaseReady` is false until env vars are set, so the app renders fine pre-backend.
- Design tokens duplicated between `tailwind.config.ts` (build-time, used by React) and `index.html` inline `tailwind.config` script (runtime CDN, used by studio iframe fallback) — both must stay in sync when palette changes.
- AI module will route through `studio-ai-proxy` by default with a mock/template fallback if no proxy is reachable, so the feature works in zero-config previews.

## Last session
2026-05-03 — Phase 1 shipped: full Vite scaffold + polished LeadPilot AI landing page (hero, features, how-it-works, pricing, testimonials, CTA, footer) with inline-fallback HTML mirroring the React version.