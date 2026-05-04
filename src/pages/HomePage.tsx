import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CircleDot,
  Sparkles,
  ListTodo,
  BarChart3,
  PenLine,
  Zap,
  Check,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const features = [
  {
    icon: CircleDot,
    title: 'Leads, organized',
    body: 'Kanban or table — switch on the fly. Filter by status, source, value, or follow-up date.',
  },
  {
    icon: Sparkles,
    title: 'AI follow-ups',
    body: 'Pick a tone — professional, friendly, sales, short — and ship a polished follow-up in seconds.',
  },
  {
    icon: ListTodo,
    title: 'Tasks & reminders',
    body: 'Never drop a deal again. Priorities, due dates, overdue alerts — surfaced where you work.',
  },
  {
    icon: BarChart3,
    title: 'Pipeline analytics',
    body: 'Conversion rate, source breakdown, revenue projection — calculated live from your real data.',
  },
  {
    icon: PenLine,
    title: 'Notes & timeline',
    body: 'Every interaction in one place. Internal comments, status changes, AI drafts — fully searchable.',
  },
  {
    icon: Zap,
    title: 'Built to grow with you',
    body: 'Solo today, team tomorrow. Add seats, roles, and shared pipelines whenever you’re ready.',
  },
] as const;

const steps = [
  {
    n: '01',
    title: 'Import your leads',
    body: 'Paste a spreadsheet, forward emails, or add manually. We auto-detect duplicates and clean it up.',
  },
  {
    n: '02',
    title: 'Move them through your pipeline',
    body: 'Drag-and-drop kanban. Set follow-up dates. Add notes. Tag deal value. Done.',
  },
  {
    n: '03',
    title: 'Let AI handle the words',
    body: 'Generate, edit, send. Every follow-up sounds like you wrote it — because you did, faster.',
  },
] as const;

const plans = [
  {
    name: 'Solo',
    description: 'For founders flying solo.',
    price: '$0',
    cadence: '/forever',
    cta: 'Start free',
    highlight: false,
    features: [
      'Up to 100 leads',
      'Kanban & table views',
      '25 AI drafts / month',
      'Tasks & reminders',
    ],
  },
  {
    name: 'Studio',
    description: 'For growing service businesses.',
    price: '$29',
    cadence: '/month',
    cta: 'Start 14-day trial',
    highlight: true,
    features: [
      'Unlimited leads',
      '500 AI drafts / month',
      'Pipeline analytics',
      'Email follow-up automation',
      'Priority support',
    ],
  },
  {
    name: 'Team',
    description: 'For agencies & shared pipelines.',
    price: '$79',
    cadence: '/month',
    cta: 'Start trial',
    highlight: false,
    features: [
      'Everything in Studio',
      'Up to 10 team seats',
      'Unlimited AI drafts',
      'Roles & permissions',
      'Custom fields & API',
    ],
  },
] as const;

const testimonials = [
  {
    quote:
      'Closed three deals my second week using LeadPilot. The AI follow-ups sound like me but ten minutes faster.',
    name: 'Sarah Chen',
    role: 'Founder · Northbound Studio',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces',
  },
  {
    quote:
      'Switched from a spreadsheet and a HubSpot trial. LeadPilot is the only one that didn’t make me hate Mondays.',
    name: 'Marcus Patel',
    role: 'Owner · Halo Roofing Co.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces',
  },
  {
    quote:
      'My follow-up rate went from "whenever I remember" to 100%. Pipeline is up 38% in two months.',
    name: 'Priya Shah',
    role: 'Consultant · Slatehouse Advisory',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces',
  },
] as const;

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 lg:pt-28 lg:pb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-semibold mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            New · AI follow-up generator is live
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] max-w-4xl mx-auto text-balance"
          >
            The CRM small businesses
            <br />
            <span className="bg-gradient-to-r from-accent to-indigo-400 bg-clip-text text-transparent">
              actually use.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-ink-muted max-w-2xl mx-auto leading-relaxed"
          >
            Capture leads, track deals, and let AI write your follow-ups. LeadPilot is the
            lightweight CRM built for service businesses that need to close more — without the
            spreadsheet chaos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2 bg-ink text-white font-semibold px-7 py-3.5 rounded-full hover:bg-ink-soft shadow-glow transition-all"
            >
              Start free — no card
            </Link>
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 bg-white border border-line text-ink font-semibold px-7 py-3.5 rounded-full hover:border-ink/30 transition-all"
            >
              Book a demo →
            </a>
          </motion.div>

          <p className="mt-6 text-xs text-ink-muted">
            Free forever for solo founders · No credit card · 2-minute setup
          </p>

          {/* Hero product card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-16 max-w-5xl mx-auto"
          >
            <div className="bg-white border border-line rounded-3xl shadow-card p-2">
              <div className="bg-[#FAFAFB] rounded-2xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-4 text-left">
                  <KpiCard label="Total leads" value="1,284" delta="↑ 12.4% this week" tone="emerald" />
                  <KpiCard label="Pipeline value" value="$184k" delta="↑ $24k this month" tone="emerald" />
                  <KpiCard
                    label="Conversion rate"
                    value="28.7%"
                    delta="+3.1pt vs last month"
                    tone="accent"
                  />
                </div>
                <div className="mt-4 grid md:grid-cols-4 gap-3">
                  <KanbanCol title="New · 24" items={['Sarah Chen — Acme Co', 'Marcus Patel — Halo']} />
                  <KanbanCol title="Contacted · 18" items={['Lena Rodriguez', 'Theo Nakamura']} />
                  <KanbanCol
                    title="Qualified · 11"
                    items={['Priya Shah · $12k', 'Daniel Voss']}
                    highlightFirst
                  />
                  <KanbanCol
                    title="Won · 7"
                    items={['Atlas Studio · $34k', 'Northbound · $9k']}
                    won
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 lg:py-32 border-b border-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
              Everything you need
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              A CRM that fits in your week, not the other way around.
            </h2>
            <p className="mt-4 text-lg text-ink-muted leading-relaxed">
              Built for service businesses — from agencies and consultants to local studios and
              contractors.
            </p>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <motion.div
                key={f.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-line rounded-2xl p-7 hover:shadow-card transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-accent-soft text-accent grid place-items-center mb-5">
                  <f.icon size={20} />
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24 lg:py-32 border-b border-line bg-[#FAFAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
              How it works
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Three steps. Same afternoon.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="bg-white border border-line rounded-2xl p-8">
                <div className="text-5xl font-black text-accent/20 mb-4">{s.n}</div>
                <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 lg:py-32 border-b border-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
              Pricing
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Simple, honest, scales when you do.
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Start free forever. Upgrade when you outgrow the limits.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((p) => (
              <div
                key={p.name}
                className={
                  p.highlight
                    ? 'bg-ink text-white rounded-2xl p-8 shadow-glow relative ring-2 ring-accent'
                    : 'bg-white border border-line rounded-2xl p-8'
                }
              >
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most popular
                  </div>
                )}
                <div className={p.highlight ? 'text-sm font-bold mb-1' : 'text-sm font-bold text-ink mb-1'}>
                  {p.name}
                </div>
                <div className={p.highlight ? 'text-xs text-white/60 mb-6' : 'text-xs text-ink-muted mb-6'}>
                  {p.description}
                </div>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-black">{p.price}</span>
                  <span className={p.highlight ? 'text-sm text-white/60' : 'text-sm text-ink-muted'}>
                    {p.cadence}
                  </span>
                </div>
                <Link
                  to="/signup"
                  className={
                    p.highlight
                      ? 'block text-center w-full bg-accent text-white font-semibold py-3 rounded-full hover:bg-accent-hover mb-6 transition-colors'
                      : 'block text-center w-full bg-white border border-line text-ink font-semibold py-3 rounded-full hover:border-ink/30 mb-6 transition-colors'
                  }
                >
                  {p.cta}
                </Link>
                <ul className="space-y-3 text-sm">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex gap-2 items-start">
                      <Check size={16} className="text-accent shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 lg:py-32 border-b border-line bg-[#FAFAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
              Customers
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Loved by 2,400+ small business owners.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="bg-white border border-line rounded-2xl p-7">
                <blockquote className="text-base leading-relaxed text-ink">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-ink-muted">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32" id="demo">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-ink text-white rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight">
                Stop losing leads
                <br />
                to a sticky note.
              </h2>
              <p className="mt-5 text-lg text-white/70 max-w-xl mx-auto">
                Set up your pipeline in 2 minutes. Free forever for solo founders.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center bg-white text-ink font-semibold px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors"
                >
                  Start free
                </Link>
                <a
                  href="#"
                  className="inline-flex items-center justify-center bg-white/10 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/20 transition-colors"
                >
                  Book a demo →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function KpiCard({
  label,
  value,
  delta,
  tone,
}: {
  label: string;
  value: string;
  delta: string;
  tone: 'emerald' | 'accent';
}) {
  return (
    <div className="bg-white rounded-xl border border-line p-5">
      <div className="text-xs text-ink-muted font-medium uppercase tracking-wider">{label}</div>
      <div className="mt-2 text-3xl font-black">{value}</div>
      <div
        className={
          tone === 'emerald'
            ? 'mt-1 text-xs font-semibold text-emerald-600'
            : 'mt-1 text-xs font-semibold text-accent'
        }
      >
        {delta}
      </div>
    </div>
  );
}

function KanbanCol({
  title,
  items,
  highlightFirst,
  won,
}: {
  title: string;
  items: string[];
  highlightFirst?: boolean;
  won?: boolean;
}) {
  return (
    <div className="bg-white rounded-lg border border-line p-3 text-xs">
      <div className="font-semibold text-ink-muted uppercase tracking-wider mb-2">{title}</div>
      <div className="space-y-1.5">
        {items.map((item, i) => {
          const cls = won
            ? 'bg-emerald-50 rounded p-2 font-medium text-emerald-700'
            : highlightFirst && i === 0
              ? 'bg-accent-soft rounded p-2 font-medium text-accent'
              : 'bg-[#FAFAFB] rounded p-2 font-medium';
          return (
            <div key={item} className={cls}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}