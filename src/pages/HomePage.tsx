import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Cloud,
  Cog,
  Layers,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const bench = [
  { role: 'Salesforce CPQ Architect', meta: '8y · Remote · Bangalore', status: 'Available' as const },
  { role: 'Senior React / TS Engineer', meta: '6y · Hybrid · Lisbon', status: 'Available' as const },
  { role: 'MuleSoft Integration Lead', meta: '10y · Remote · Hyderabad', status: 'Aug 12' as const },
  { role: 'DevOps / Kubernetes', meta: '7y · Remote · Warsaw', status: 'Available' as const },
];

const services = [
  {
    icon: Users,
    title: 'Staff augmentation',
    body: 'Senior engineers embedded into your team in 5–10 days. Time-zone aligned, English-fluent, vetted by our principals.',
  },
  {
    icon: Cloud,
    title: 'Salesforce delivery',
    body: 'CPQ, Sales Cloud, Service Cloud, and Experience Cloud builds — from greenfield to large platform refits.',
  },
  {
    icon: Layers,
    title: 'Platform engineering',
    body: 'React, Node, Go and Python pods that ship product. We own the backlog or plug into yours.',
  },
  {
    icon: Cog,
    title: 'Managed pods',
    body: 'Fixed-price outcomes with a tech lead, two senior engineers, QA and a delivery manager.',
  },
];

const steps = [
  { n: '01', t: 'Discovery call', b: 'A 30-minute call with a principal engineer. We scope the work and shortlist 2–3 candidate profiles.' },
  { n: '02', t: 'Interview & trial', b: 'You interview the shortlist. Optional 1-week paid trial before committing.' },
  { n: '03', t: 'Onboard in days', b: 'Contracts, hardware, and access in under a week. Weekly reporting from day one.' },
  { n: '04', t: 'Scale or flex', b: 'Add or rotate engineers on 30-day notice. No long lock-ins.' },
];

const testimonials = [
  {
    quote:
      "Red Orange found us a Salesforce CPQ lead in eight days. Six months later they're running our entire revenue platform.",
    name: 'Marcus Patel',
    role: 'VP Engineering, OrbitPay',
  },
  {
    quote:
      'We replaced a Big-Four engagement with a six-person Red Orange pod. Same scope, half the cost, twice the velocity.',
    name: 'Sarah Chen',
    role: 'CTO, Lattice CRM',
  },
  {
    quote:
      "Their engineers don't need babysitting. They show up senior, they show up curious, and they own the work.",
    name: 'Anna Kowalski',
    role: 'Head of Platform, NorthBank',
  },
];

const logos = ['Pointspay', 'Helvetia', 'NorthBank', 'OrbitPay', 'Lattice CRM', 'Veritas Group'];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-white to-white" />
          <div className="absolute -top-32 -right-32 -z-10 w-[480px] h-[480px] rounded-full bg-brand-200/40 blur-3xl" />
          <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-brand-700 bg-brand-100 px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                14+ years · Asia · Europe · US
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
                Engineering teams, <span className="text-brand-600">on demand.</span>
              </h1>
              <p className="mt-6 text-lg text-ink-500 max-w-xl leading-relaxed">
                We embed senior Salesforce, full-stack and platform engineers into your roadmap — vetted, ramped up in days, billed by the hour or by outcome.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors"
                >
                  Book a discovery call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-5 py-3 rounded-lg bg-white border border-neutral-200 font-semibold text-ink-800 hover:border-neutral-300 transition-colors"
                >
                  View engagement models
                </Link>
              </div>
              <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-ink-400">Engineers</dt>
                  <dd className="font-display text-2xl font-bold mt-1">220+</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-ink-400">Clients</dt>
                  <dd className="font-display text-2xl font-bold mt-1">90+</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-ink-400">Retention</dt>
                  <dd className="font-display text-2xl font-bold mt-1">96%</dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white border border-neutral-100 shadow-card p-6">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                    Bench snapshot
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-700 font-medium">
                    Live
                  </span>
                </div>
                <div className="mt-4 divide-y divide-neutral-100">
                  {bench.map((b) => (
                    <div key={b.role} className="py-3 flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-sm text-ink-800">{b.role}</div>
                        <div className="text-xs text-ink-400">{b.meta}</div>
                      </div>
                      <div
                        className={
                          b.status === 'Available'
                            ? 'text-xs font-semibold text-brand-600'
                            : 'text-xs font-semibold text-ink-400'
                        }
                      >
                        {b.status}
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="mt-4 block text-center text-xs font-semibold text-ink-700 hover:text-brand-600 border-t border-neutral-100 pt-4"
                >
                  Request the full bench →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* LOGOS */}
        <section className="border-y border-neutral-100 bg-neutral-50/60">
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="text-xs uppercase tracking-wider text-ink-400 text-center">
              Trusted by teams at
            </div>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-6 gap-6 items-center text-center font-display font-bold text-ink-300">
              {logos.map((l) => (
                <div key={l} className="hover:text-ink-500 transition-colors">
                  {l}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
              <div>
                <div className="text-xs uppercase tracking-wider text-brand-600 font-semibold">
                  What we do
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 tracking-tight">
                  Four ways to plug us in.
                </h2>
              </div>
              <Link to="/services" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
                See all engagement models →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-neutral-100 p-6 hover:border-brand-200 hover:shadow-soft transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg mt-5">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="py-24 bg-neutral-50/60 border-y border-neutral-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-wider text-brand-600 font-semibold">How we work</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 tracking-tight">
                From first call to live engineers in under two weeks.
              </h2>
              <p className="mt-4 text-ink-500 leading-relaxed">
                No long RFPs. No vendor theatre. Just a fast, senior process that ends in working code.
              </p>
            </div>

            <ol className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((s) => (
                <li key={s.n} className="rounded-2xl bg-white border border-neutral-100 p-6">
                  <div className="font-display text-brand-600 font-bold text-sm">{s.n}</div>
                  <div className="font-display font-bold text-lg mt-2">{s.t}</div>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed">{s.b}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* PILLARS */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs uppercase tracking-wider text-brand-600 font-semibold">Why teams pick us</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 tracking-tight">
                Senior by default. Predictable by design.
              </h2>
              <p className="mt-4 text-ink-500 leading-relaxed">
                We are not a recruiter passing resumes. Every engineer is interviewed and supported by a Red Orange principal — the same people who built Salesforce platforms for banks, insurers and fast-growing SaaS.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  'Vetted by senior engineers — not HR keyword filters',
                  'Direct line to a principal on every engagement',
                  'Same-day swap if a fit goes wrong',
                  'GDPR-aligned contracts, IP assigned to you',
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                    <span className="text-ink-700 text-sm">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Sparkles, t: 'Senior bench', b: 'Median 7 years experience. No bootcamp churn.' },
                { icon: ShieldCheck, t: 'Security-first', b: 'SOC 2 aligned processes. SSO + MFA standard.' },
                { icon: Cloud, t: 'Cloud native', b: 'AWS, GCP and Azure across the practice.' },
                { icon: Users, t: 'Time-zone aligned', b: 'Pods set up around your working hours, not ours.' },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border border-neutral-100 p-6">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div className="font-display font-bold mt-4">{c.t}</div>
                  <div className="text-sm text-ink-500 mt-1">{c.b}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 bg-neutral-50/60 border-y border-neutral-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs uppercase tracking-wider text-brand-600 font-semibold">Client voice</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 tracking-tight max-w-2xl">
              The engineers stay. The clients stay.
            </h2>

            <div className="mt-12 grid md:grid-cols-3 gap-5">
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="rounded-2xl bg-white border border-neutral-100 p-6 flex flex-col"
                >
                  <blockquote className="text-ink-700 leading-relaxed text-sm">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-6 pt-4 border-t border-neutral-100">
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-ink-400">{t.role}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="rounded-3xl bg-ink-900 text-white p-10 md:p-14 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-brand-600/30 blur-3xl" />
              <div className="relative">
                <div className="text-xs uppercase tracking-wider text-brand-300 font-semibold">
                  Ready when you are
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 max-w-2xl">
                  Let&apos;s scope your next engineering hire in 30 minutes.
                </h2>
                <p className="mt-4 text-ink-200 max-w-xl">
                  Tell us the role, the roadmap and the timezone. We&apos;ll come back with 2–3 named profiles inside 48 hours.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors"
                  >
                    Book a discovery call <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="mailto:hello@redorangetech.com"
                    className="inline-flex items-center px-5 py-3 rounded-lg bg-white/10 border border-white/15 text-white font-semibold hover:bg-white/15 transition-colors"
                  >
                    Email us directly
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}