import { Link } from 'react-router-dom';
import { ArrowRight, Check, Users, Cloud, Layers, Cog } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type Service = {
  icon: typeof Users;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  price: string;
  recommended?: boolean;
};

const services: Service[] = [
  {
    icon: Users,
    title: 'Staff augmentation',
    subtitle: 'Senior engineers, in your standup by next sprint',
    description:
      'Plug one or more vetted engineers directly into your team. They follow your process, your codebase and your stand-up — billed by the hour, no recruiter fees.',
    bullets: [
      '5–10 day ramp from signed SOW',
      'Time-zone aligned with your team',
      'Same-day replacement if the fit goes wrong',
      '30-day rolling notice — no lock-ins',
    ],
    price: 'From $58 / hour',
  },
  {
    icon: Cloud,
    title: 'Salesforce delivery',
    subtitle: 'CPQ, Sales, Service and Experience Cloud',
    description:
      'Greenfield builds, platform refits and rescue missions. Led by certified Salesforce architects who have shipped at scale for banks, insurers and SaaS.',
    bullets: [
      'CPQ + Billing implementation specialists',
      'MuleSoft, Snowflake and HubSpot integrations',
      'Migration from legacy CRMs (MS Dynamics, Siebel, custom)',
      'Managed support after go-live',
    ],
    price: 'From $14k / month',
    recommended: true,
  },
  {
    icon: Layers,
    title: 'Platform engineering pods',
    subtitle: 'Full-stack squads that ship product',
    description:
      'A self-organising pod of 3–6 engineers, a tech lead and QA. They take a roadmap, a Jira board, or a Notion doc and turn it into shipped software.',
    bullets: [
      'React, Node, Go, Python, Kotlin',
      'Owns sprint planning, code review and release',
      'Weekly demos and roadmap reviews',
      'You keep the IP, the repo and the architecture',
    ],
    price: 'From $22k / month',
  },
  {
    icon: Cog,
    title: 'Outcome-priced builds',
    subtitle: 'Fixed scope, fixed price, fixed timeline',
    description:
      'For well-defined projects where you want a number on the contract. We scope, estimate and ship — with milestone gates and a fixed go-live.',
    bullets: [
      'Free 2-week discovery and scoping',
      'Milestone-based invoicing',
      '30-day hypercare included',
      'Optional managed support after',
    ],
    price: 'From $48k / project',
  },
];

const faqs = [
  {
    q: 'How fast can engineers start?',
    a: 'Typical kickoff is 5–10 business days from a signed SOW. For Salesforce specialists or niche stacks, plan for 2–3 weeks.',
  },
  {
    q: 'Can we interview before committing?',
    a: 'Always. Every engineer goes through your interview loop. We also offer a 1-week paid trial so you can validate fit on real work.',
  },
  {
    q: 'Who owns the IP?',
    a: 'You do. Our standard MSA assigns all work product, code and derivative IP to you on payment of each invoice.',
  },
  {
    q: 'What about data and security?',
    a: 'We are SOC 2 aligned. Engineers use your SSO, your VPN and your hardware policy. We sign DPAs and NDAs as standard.',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-white to-white" />
          <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
            <div className="text-xs uppercase tracking-wider text-brand-600 font-semibold">Services</div>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mt-3 max-w-3xl">
              Four engagement models. Pick the one that fits.
            </h1>
            <p className="mt-5 text-lg text-ink-500 max-w-2xl leading-relaxed">
              Most clients start with staff augmentation and graduate to a pod once they see the velocity. Some come straight in with a fixed-scope build. All paths lead to the same senior bench.
            </p>
          </div>
        </section>

        {/* MODELS */}
        <section className="pb-12">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-5">
            {services.map((s) => (
              <article
                key={s.title}
                className={
                  'rounded-2xl border p-7 flex flex-col ' +
                  (s.recommended
                    ? 'border-brand-300 bg-brand-50/40 shadow-soft'
                    : 'border-neutral-100 bg-white')
                }
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="w-11 h-11 rounded-lg bg-brand-600 text-white flex items-center justify-center">
                    <s.icon className="w-5 h-5" />
                  </div>
                  {s.recommended && (
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-700 bg-brand-100 px-2.5 py-1 rounded-full">
                      Most picked
                    </span>
                  )}
                </div>

                <h2 className="font-display font-bold text-xl mt-5">{s.title}</h2>
                <div className="text-sm text-ink-500 mt-1">{s.subtitle}</div>
                <p className="mt-4 text-sm text-ink-700 leading-relaxed">{s.description}</p>

                <ul className="mt-5 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-ink-700">
                      <Check className="w-4 h-4 text-brand-600 mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-neutral-100 flex items-center justify-between">
                  <div className="font-display font-bold">{s.price}</div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
                  >
                    Talk to us <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* COMPARE */}
        <section className="py-20 bg-neutral-50/60 border-y border-neutral-100">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
              Quick compare
            </h2>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-sm bg-white rounded-2xl overflow-hidden border border-neutral-100">
                <thead className="bg-neutral-50">
                  <tr className="text-left text-xs uppercase tracking-wider text-ink-400">
                    <th className="px-5 py-4 font-semibold">Model</th>
                    <th className="px-5 py-4 font-semibold">Best for</th>
                    <th className="px-5 py-4 font-semibold">Commitment</th>
                    <th className="px-5 py-4 font-semibold">Starts at</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-5 py-4 font-semibold">Staff augmentation</td>
                    <td className="px-5 py-4 text-ink-600">Filling specific roles fast</td>
                    <td className="px-5 py-4 text-ink-600">30-day rolling</td>
                    <td className="px-5 py-4 font-semibold">$58 / hr</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-semibold">Salesforce delivery</td>
                    <td className="px-5 py-4 text-ink-600">CRM platform builds & rescues</td>
                    <td className="px-5 py-4 text-ink-600">3-month minimum</td>
                    <td className="px-5 py-4 font-semibold">$14k / mo</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-semibold">Platform pod</td>
                    <td className="px-5 py-4 text-ink-600">Owning a product or roadmap</td>
                    <td className="px-5 py-4 text-ink-600">6-month minimum</td>
                    <td className="px-5 py-4 font-semibold">$22k / mo</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-semibold">Outcome build</td>
                    <td className="px-5 py-4 text-ink-600">Scoped, fixed-deadline projects</td>
                    <td className="px-5 py-4 text-ink-600">Fixed scope</td>
                    <td className="px-5 py-4 font-semibold">$48k / project</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-xs uppercase tracking-wider text-brand-600 font-semibold">FAQ</div>
            <h2 className="font-display text-3xl font-bold tracking-tight mt-2">
              Questions we hear most often
            </h2>

            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-neutral-100 p-5 open:bg-neutral-50/60"
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-ink-800">
                    {f.q}
                    <span className="text-brand-600 group-open:rotate-45 transition-transform text-lg leading-none">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-ink-500 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-ink-900 text-white p-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-display font-bold text-lg">Still scoping?</div>
                <div className="text-sm text-ink-200">Book 30 minutes with a principal engineer.</div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors text-sm"
              >
                Book a call <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}