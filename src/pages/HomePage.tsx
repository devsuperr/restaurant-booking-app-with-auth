import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Check,
  Zap,
  Users,
  KanbanSquare,
  CalendarClock,
  BarChart3,
  Wand2,
  Star,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

const features = [
  {
    icon: Sparkles,
    title: 'AI follow-ups, written in your voice',
    body: 'Generate professional, friendly, or sales-toned email drafts in seconds. Approve, tweak, send — done.',
  },
  {
    icon: KanbanSquare,
    title: 'Kanban + table for every stage',
    body: 'Drag leads from New → Contacted → Won. Switch to a sortable table when you want the full picture.',
  },
  {
    icon: CalendarClock,
    title: 'Never miss a follow-up',
    body: 'Smart reminders surface overdue tasks before they go cold. Priority + due dates baked in.',
  },
  {
    icon: BarChart3,
    title: 'Pipeline that actually breathes',
    body: 'Live conversion rate, source attribution, and pipeline value updates the moment a deal moves.',
  },
  {
    icon: Users,
    title: 'Built for service teams',
    body: 'Designed for agencies, studios, and trades. Multi-seat ready with company-scoped data isolation.',
  },
  {
    icon: Zap,
    title: 'Set up in under 4 minutes',
    body: 'Import a CSV, paste a contact list, or start from sample data. No onboarding call required.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Capture every lead',
    body: 'Add contacts manually, import a CSV, or wire up the public form to your website. Each lead lands with source, status, and value attached.',
  },
  {
    num: '02',
    title: 'Let AI draft the follow-up',
    body: 'Pick a tone, click generate. LeadPilot reads the lead\'s status + notes and writes the next message — ready in two seconds.',
  },
  {
    num: '03',
    title: 'Move them down the pipe',
    body: 'Drag leads across the kanban as they progress. Tasks, notes, and revenue update automatically in your dashboard.',
  },
  {
    num: '04',
    title: 'See what\'s actually working',
    body: 'Conversion rate by source, average deal cycle, this-week revenue pipeline — all live, all in one place.',
  },
];

const plans = [
  {
    name: 'Starter',
    price: '$0',
    cadence: 'free forever',
    blurb: 'For solo founders capturing their first 50 leads.',
    features: ['Up to 50 leads', '1 user seat', 'Kanban + table views', 'Basic AI drafts (10/mo)', 'Email support'],
    cta: 'Start free',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$29',
    cadence: 'per user / month',
    blurb: 'For service teams running real pipelines.',
    features: [
      'Unlimited leads',
      'Up to 10 seats',
      'Unlimited AI drafts',
      'Custom pipeline stages',
      'Activity timeline + audit log',
      'Priority support',
    ],
    cta: 'Start 14-day trial',
    highlighted: true,
  },
  {
    name: 'Scale',
    price: '$79',
    cadence: 'per user / month',
    blurb: 'For agencies managing 10k+ contacts.',
    features: [
      'Everything in Growth',
      'Unlimited seats',
      'API + webhooks',
      'SSO + role permissions',
      'Custom AI tone training',
      'Dedicated success manager',
    ],
    cta: 'Book a demo',
    highlighted: false,
  },
];

const testimonials = [
  {
    quote:
      'We replaced a $200/mo CRM and a junior copywriter\'s entire follow-up workflow with LeadPilot. Conversion went from 11% to 19% in six weeks.',
    name: 'Sarah Chen',
    role: 'Founder, Northbound Studio',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&crop=faces',
  },
  {
    quote:
      'The AI drafts feel like they were written by my best account manager. I just hit generate, edit one line, send. That\'s 3 hours a week back.',
    name: 'Marcus Patel',
    role: 'Director, Halcyon Renovations',
    avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=120&h=120&fit=crop&crop=faces',
  },
  {
    quote:
      'Finally a CRM that doesn\'t need a 30-minute setup wizard. We were tracking deals on day one. The kanban alone is worth the price.',
    name: 'Priya Iyer',
    role: 'Ops Lead, Slatehouse Legal',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=faces',
  },
];

const logos = ['Northbound', 'Halcyon', 'Slatehouse', 'Field Notes', 'Atlas Co', 'Pivotwork'];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-ink-900 overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 lg:px-8">
        <div className="absolute inset-0 bg-dots opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-ink-100 shadow-soft text-xs font-medium text-ink-700 mb-7">
              <Sparkles className="w-3.5 h-3.5 text-accent-600" />
              <span>New — AI follow-up generator now in beta</span>
              <span className="w-px h-3 bg-ink-200 mx-1" />
              <a href="#features" className="text-accent-600 hover:text-accent-700 font-semibold inline-flex items-center gap-0.5">
                See it
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink-950 leading-[1.05]">
              The AI lead engine
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-accent-600 via-accent-500 to-accent-700 bg-clip-text text-transparent">
                  for service businesses
                </span>
              </span>
            </h1>

            <p className="mt-7 text-lg sm:text-xl text-ink-500 max-w-2xl mx-auto leading-relaxed">
              Capture leads, draft follow-ups with AI, and watch your pipeline move — all in one
              calmly-designed workspace. Replace your CRM, your spreadsheet, and your copywriter.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#signup"
                className="group w-full sm:w-auto px-7 py-3.5 rounded-full bg-ink-900 text-white text-[15px] font-semibold hover:bg-ink-800 transition shadow-lift inline-flex items-center justify-center gap-2"
              >
                Start free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#demo"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white border border-ink-200 text-ink-800 text-[15px] font-semibold hover:border-ink-300 hover:bg-ink-50 transition"
              >
                Book a demo
              </a>
            </div>

            <p className="mt-5 text-xs text-ink-400">
              Free forever for 50 leads · No credit card · 4-minute setup
            </p>
          </motion.div>

          {/* Product preview card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-20 max-w-6xl mx-auto"
          >
            <div className="absolute -inset-x-12 -top-8 -bottom-8 bg-gradient-to-b from-accent-500/20 via-transparent to-transparent blur-3xl -z-10" />
            <div className="rounded-2xl border border-ink-100 bg-white shadow-lift overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-ink-100 bg-ink-50/60">
                <span className="w-2.5 h-2.5 rounded-full bg-ink-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-ink-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-ink-200" />
                <div className="ml-3 px-3 py-1 rounded-md bg-white border border-ink-100 text-[11px] text-ink-500 font-mono">
                  app.leadpilot.ai/dashboard
                </div>
              </div>
              <div className="grid grid-cols-12 min-h-[420px]">
                <aside className="col-span-3 hidden md:flex flex-col gap-1 p-4 border-r border-ink-100 bg-ink-50/40">
                  {[
                    { label: 'Dashboard', active: true },
                    { label: 'Leads', count: '284' },
                    { label: 'Tasks', count: '12' },
                    { label: 'AI drafts' },
                    { label: 'Settings' },
                  ].map((it) => (
                    <div
                      key={it.label}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg text-[13px] font-medium ${
                        it.active ? 'bg-white text-ink-900 shadow-soft' : 'text-ink-500'
                      }`}
                    >
                      <span>{it.label}</span>
                      {it.count && <span className="text-[11px] text-ink-400">{it.count}</span>}
                    </div>
                  ))}
                </aside>
                <main className="col-span-12 md:col-span-9 p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {[
                      { label: 'Total leads', value: '1,284', delta: '+12.4%' },
                      { label: 'New this week', value: '47', delta: '+8' },
                      { label: 'Conversion', value: '19.2%', delta: '+2.1%' },
                      { label: 'Pipeline', value: '$184k', delta: '+$24k' },
                    ].map((k) => (
                      <div key={k.label} className="rounded-xl border border-ink-100 p-3.5 bg-white">
                        <p className="text-[11px] text-ink-400 mb-1">{k.label}</p>
                        <p className="text-xl font-bold text-ink-900 tracking-tight">{k.value}</p>
                        <p className="text-[10px] text-emerald-600 font-medium mt-0.5">↑ {k.delta}</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { stage: 'New', count: 18, color: 'bg-ink-200' },
                      { stage: 'Qualified', count: 11, color: 'bg-accent-300' },
                      { stage: 'Proposal', count: 6, color: 'bg-accent-500' },
                    ].map((c) => (
                      <div key={c.stage} className="rounded-xl bg-ink-50/50 border border-ink-100 p-3">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${c.color}`} />
                            <span className="text-[12px] font-semibold text-ink-700">{c.stage}</span>
                          </div>
                          <span className="text-[11px] text-ink-400">{c.count}</span>
                        </div>
                        <div className="space-y-2">
                          {[0, 1, 2].map((i) => (
                            <div key={i} className="rounded-lg bg-white border border-ink-100 p-2.5 shadow-soft">
                              <div className="h-2 w-3/5 bg-ink-100 rounded mb-1.5" />
                              <div className="h-1.5 w-2/5 bg-ink-100 rounded" />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </main>
              </div>
            </div>
          </motion.div>

          {/* Logo strip */}
          <motion.div {...fadeUp} className="mt-20 text-center">
            <p className="text-xs uppercase tracking-widest text-ink-400 font-semibold mb-6">
              Trusted by 2,400+ service teams
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
              {logos.map((l) => (
                <span key={l} className="text-lg font-bold text-ink-400 tracking-tight">
                  {l}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 md:py-32 px-6 lg:px-8 border-t border-ink-100">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-widest text-accent-600 font-semibold mb-3">Features</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-ink-950 leading-[1.1]">
              Everything you need to close.
              <br />
              <span className="text-ink-400">Nothing you don't.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-2xl border border-ink-100 bg-white p-7 hover:border-ink-200 hover:shadow-lift transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-ink-950 text-white flex items-center justify-center mb-5 group-hover:bg-accent-600 transition-colors">
                  <f.icon className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-semibold text-ink-900 mb-2 tracking-tight">{f.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 md:py-32 px-6 lg:px-8 bg-ink-950 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="max-w-2xl mb-20">
            <p className="text-xs uppercase tracking-widest text-accent-400 font-semibold mb-3">How it works</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
              From cold lead to closed deal in
              <span className="text-accent-400"> four moves.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-800 rounded-2xl overflow-hidden">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-ink-950 p-8 hover:bg-ink-900 transition-colors"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display font-bold text-3xl text-accent-400">{s.num}</span>
                  {i < steps.length - 1 && <ArrowRight className="w-4 h-4 text-ink-600 hidden lg:block" />}
                </div>
                <h3 className="text-lg font-semibold mb-3 tracking-tight">{s.title}</h3>
                <p className="text-sm text-ink-400 leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>

          {/* AI demo strip */}
          <motion.div {...fadeUp} className="mt-16 rounded-2xl bg-gradient-to-br from-ink-900 to-ink-950 border border-ink-800 p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/30 text-xs font-medium text-accent-300 mb-5">
                  <Wand2 className="w-3 h-3" />
                  AI follow-up generator
                </div>
                <h3 className="font-display text-3xl font-bold tracking-tight mb-3">
                  Pick a tone. Hit generate. Send.
                </h3>
                <p className="text-ink-400 leading-relaxed mb-6">
                  LeadPilot reads the lead's status, last touchpoint, and your notes, then drafts a message
                  in your chosen tone. Mock-AI works out of the box; bring your own OpenAI or Claude key any time.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Professional', 'Friendly', 'Sales', 'Short'].map((t, i) => (
                    <span
                      key={t}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                        i === 1 ? 'bg-accent-500 border-accent-500 text-white' : 'border-ink-700 text-ink-300'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-ink-950 border border-ink-800 p-5 font-mono text-[13px] leading-relaxed text-ink-300">
                <p className="text-ink-500 mb-3">→ Drafting follow-up for <span className="text-white">Sarah Chen · Northbound</span></p>
                <p className="mb-2"><span className="text-accent-400">Hey Sarah,</span></p>
                <p className="mb-2">
                  Loved our chat last Tuesday — sounds like the brand refresh is moving fast. I put together
                  a 2-page outline based on what you mentioned about the spring launch.
                </p>
                <p className="mb-2">
                  Mind if I send it over Thursday? Takes 5 mins to skim, and we can decide if it's worth a
                  longer call from there.
                </p>
                <p><span className="text-accent-400">— You</span><span className="inline-block w-2 h-3.5 bg-accent-400 ml-1 align-middle animate-pulse" /></p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-widest text-accent-600 font-semibold mb-3">Pricing</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-ink-950 leading-[1.1]">
              Simple pricing.
              <span className="text-ink-400"> No surprise fees.</span>
            </h2>
            <p className="mt-5 text-ink-500">Start free forever. Upgrade when your pipeline outgrows it.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {plans.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`relative rounded-2xl p-7 ${
                  p.highlighted
                    ? 'bg-ink-950 text-white shadow-lift border border-ink-900 md:-translate-y-3'
                    : 'bg-white border border-ink-100'
                }`}
              >
                {p.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent-500 text-white text-[11px] font-bold uppercase tracking-wider">
                    Most popular
                  </span>
                )}
                <h3 className={`text-lg font-semibold tracking-tight mb-1 ${p.highlighted ? 'text-white' : 'text-ink-900'}`}>
                  {p.name}
                </h3>
                <p className={`text-sm mb-6 ${p.highlighted ? 'text-ink-400' : 'text-ink-500'}`}>{p.blurb}</p>
                <div className="flex items-baseline gap-1.5 mb-7">
                  <span className={`font-display text-5xl font-bold tracking-tight ${p.highlighted ? 'text-white' : 'text-ink-950'}`}>
                    {p.price}
                  </span>
                  <span className={`text-sm ${p.highlighted ? 'text-ink-400' : 'text-ink-500'}`}>/ {p.cadence}</span>
                </div>
                <a
                  href="#signup"
                  className={`block w-full text-center px-5 py-3 rounded-full text-sm font-semibold transition mb-7 ${
                    p.highlighted
                      ? 'bg-accent-500 text-white hover:bg-accent-600'
                      : 'bg-ink-900 text-white hover:bg-ink-800'
                  }`}
                >
                  {p.cta}
                </a>
                <ul className="space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${p.highlighted ? 'text-accent-400' : 'text-accent-600'}`} />
                      <span className={p.highlighted ? 'text-ink-300' : 'text-ink-700'}>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 md:py-32 px-6 lg:px-8 border-t border-ink-100 bg-ink-50/40">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-widest text-accent-600 font-semibold mb-3">Customers</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-ink-950 leading-[1.1]">
              Service teams ship more deals
              <span className="text-ink-400"> with LeadPilot.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-2xl bg-white border border-ink-100 p-7 flex flex-col"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-accent-500 text-accent-500" />
                  ))}
                </div>
                <blockquote className="text-[15px] text-ink-700 leading-relaxed mb-6 flex-1">
                  "{t.quote}"
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-sm font-semibold text-ink-900">{t.name}</div>
                    <div className="text-xs text-ink-500">{t.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <motion.div
          {...fadeUp}
          className="relative max-w-5xl mx-auto rounded-3xl bg-ink-950 text-white px-8 md:px-16 py-16 md:py-20 overflow-hidden text-center"
        >
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent-500/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent-700/20 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-5">
              Stop letting leads
              <br />
              go cold.
            </h2>
            <p className="text-ink-400 text-lg max-w-xl mx-auto mb-9">
              Spin up LeadPilot in 4 minutes. Free forever for your first 50 leads.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#signup"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-ink-950 text-[15px] font-semibold hover:bg-ink-100 transition inline-flex items-center justify-center gap-2"
              >
                Start free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#demo"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-ink-700 text-white text-[15px] font-semibold hover:bg-ink-900 transition"
              >
                Book a demo
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}