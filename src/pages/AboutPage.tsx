import { Link } from 'react-router-dom';
import { ArrowRight, Globe2, Heart, Sparkles, Target } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const timeline = [
  { year: '2010', t: 'Founded in Bangalore', b: 'Three engineers, one Salesforce contract, a shared apartment.' },
  { year: '2014', t: 'First European clients', b: 'Opened a delivery line for Swiss insurance and German fintech.' },
  { year: '2018', t: 'Crossed 50 engineers', b: 'Specialised in Salesforce CPQ and MuleSoft. Built our first managed pods.' },
  { year: '2021', t: 'US office, Austin', b: 'Time-zone overlap for North American clients. Opened the Lisbon hub the year after.' },
  { year: '2024', t: '220+ engineers, 14 years', b: 'Three offices, 90+ active clients, and a 96% retention rate.' },
];

const values = [
  { icon: Sparkles, t: 'Senior by default', b: 'We hire people who can think, push back and ship — not just take tickets.' },
  { icon: Heart, t: 'Boring contracts', b: 'No 12-month lock-ins, no surprise fees, no consulting theatre.' },
  { icon: Target, t: 'Outcome over hours', b: 'We measure ourselves on what shipped, not on timesheets.' },
  { icon: Globe2, t: 'Three time zones', b: 'Bangalore, Lisbon and Austin give us a true follow-the-sun bench.' },
];

const team = [
  { name: 'Anil Verma', role: 'Founder & CEO', city: 'Bangalore' },
  { name: 'Marta Ribeiro', role: 'VP Delivery, EU', city: 'Lisbon' },
  { name: 'Jordan Hayes', role: 'VP Sales, NA', city: 'Austin' },
  { name: 'Priya Iyer', role: 'Principal Architect, Salesforce', city: 'Bangalore' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-white to-white" />
          <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
            <div className="text-xs uppercase tracking-wider text-brand-600 font-semibold">About</div>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mt-3 max-w-3xl">
              We build engineering teams that act like founders.
            </h1>
            <p className="mt-5 text-lg text-ink-500 max-w-2xl leading-relaxed">
              Red Orange Technologies started as a three-person Salesforce shop in 2010. Fourteen years later we run engineering teams for fintechs, insurers and SaaS scale-ups across three continents — and we still answer the phone the same way.
            </p>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.t} className="rounded-2xl border border-neutral-100 p-6">
                <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center">
                  <v.icon className="w-5 h-5" />
                </div>
                <div className="font-display font-bold mt-4">{v.t}</div>
                <div className="text-sm text-ink-500 mt-1 leading-relaxed">{v.b}</div>
              </div>
            ))}
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-20 bg-neutral-50/60 border-y border-neutral-100">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-xs uppercase tracking-wider text-brand-600 font-semibold">Our story</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mt-2">
              Fourteen years, one mission.
            </h2>

            <ol className="mt-12 relative border-l-2 border-brand-200 pl-8 space-y-10">
              {timeline.map((t) => (
                <li key={t.year} className="relative">
                  <div className="absolute -left-[42px] top-1 w-4 h-4 rounded-full bg-brand-600 ring-4 ring-white" />
                  <div className="font-display text-brand-600 font-bold">{t.year}</div>
                  <div className="font-display font-bold text-lg mt-1">{t.t}</div>
                  <p className="text-ink-500 mt-1.5 leading-relaxed text-sm max-w-2xl">{t.b}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* TEAM */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs uppercase tracking-wider text-brand-600 font-semibold">Leadership</div>
            <h2 className="font-display text-3xl font-bold tracking-tight mt-2">The people who pick up the phone</h2>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {team.map((m) => (
                <div key={m.name} className="rounded-2xl border border-neutral-100 p-6">
                  <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-700 font-display font-bold text-lg flex items-center justify-center">
                    {m.name
                      .split(' ')
                      .map((s) => s[0])
                      .join('')}
                  </div>
                  <div className="font-display font-bold mt-4">{m.name}</div>
                  <div className="text-sm text-ink-500">{m.role}</div>
                  <div className="text-xs text-ink-400 mt-1">{m.city}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="rounded-3xl bg-ink-900 text-white p-10 md:p-14 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-brand-600/30 blur-3xl" />
              <div className="relative">
                <h2 className="font-display text-3xl font-bold max-w-2xl">
                  Want to put faces to the names?
                </h2>
                <p className="mt-3 text-ink-200 max-w-xl">
                  We do a 30-minute intro call with every prospective client. No deck. No sales pitch. Just engineers talking shop.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-7 px-5 py-3 rounded-lg bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors"
                >
                  Book the call <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}