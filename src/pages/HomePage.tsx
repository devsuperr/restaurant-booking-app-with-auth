import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Check,
  KanbanSquare,
  CalendarClock,
  BarChart3,
  Users,
  Zap,
  Star,
  Mail,
  Workflow,
} from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

const features = [
  { icon: Sparkles, title: 'AI follow-ups in your voice', body: 'Generate professional, friendly, or sales-toned drafts in seconds. Approve, tweak, send.' },
  { icon: KanbanSquare, title: 'Kanban + table for every stage', body: 'Drag leads across stages, or switch to a sortable table when you want the bird\'s-eye view.' },
  { icon: CalendarClock, title: 'Never miss a follow-up', body: 'Smart reminders surface overdue tasks before they go cold. Priority + due dates baked in.' },
  { icon: BarChart3, title: 'Pipeline that breathes', body: 'Live conversion rate, source attribution, and pipeline value updates the moment a deal moves.' },
  { icon: Users, title: 'Built for service teams', body: 'Designed for agencies, studios, and trades. Multi-seat ready with company-scoped isolation.' },
  { icon: Zap, title: 'Set up in 4 minutes', body: 'Import a CSV, paste a contact list, or start from sample data. No onboarding call required.' },
];

const steps = [
  { num: '01', title: 'Capture every lead', body: 'Add contacts manually, import a CSV, or paste from anywhere. Every field maps automatically.' },
  { num: '02', title: 'Track the conversation', body: 'Move leads through New → Won. Notes, tasks, and history live on one focused profile.' },
  { num: '03', title: 'Let AI write the follow-up', body: 'Pick a tone, click Generate. A polished, on-brand email lands in your draft folder.' },
  { num: '04', title: 'Watch the pipeline move', body: 'Real-time dashboard shows conversion rate, revenue, and what to chase next.' },
];

const tiers = [
  { name: 'Starter', price: 29, sub: 'For solo founders', features: ['Up to 250 leads', '50 AI messages / mo', 'Kanban + table views', 'Email support'], cta: 'Start free', popular: false },
  { name: 'Growth', price: 79, sub: 'For small teams', features: ['Up to 2,500 leads', '500 AI messages / mo', 'Custom pipeline stages', 'Up to 5 seats', 'Priority support'], cta: 'Start free', popular: true },
  { name: 'Scale', price: 199, sub: 'For agencies', features: ['Unlimited leads', 'Unlimited AI messages', 'Advanced automations', 'Unlimited seats', 'Dedicated CSM'], cta: 'Talk to sales', popular: false },
];

const testimonials = [
  { quote: "We went from 23% to 61% reply rates the week we switched. The AI tone-matching is uncanny.", name: 'Maya Patel', role: 'Founder, Patel Creative', avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=faces' },
  { quote: "I closed two retainers in a single Tuesday morning. The follow-up reminders alone are worth it.", name: 'Jordan Knox', role: 'Principal, Knox Studio', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop&crop=faces' },
  { quote: "Finally, a CRM that's not bloated. Linear-quality UI, HubSpot-level pipeline tracking.", name: 'Elena Costa', role: 'Head of Sales, Drift Co.', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces' },
];

const logos = ['Northwind', 'Drift Co.', 'Patel Creative', 'Knox Studio', 'Brightlabs', 'Mistral'];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
              <span className="absolute inset-0 bg-gradient-to-br from-brand-500 to-brand-700" />
              <svg viewBox="0 0 24 24" className="relative w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </span>
            <span className="font-bold text-[17px] tracking-tight">LeadPilot<span className="text-brand-600">.ai</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition">Features</a>
            <a href="#how" className="hover:text-gray-900 transition">How it works</a>
            <a href="#pricing" className="hover:text-gray-900 transition">Pricing</a>
            <a href="#testimonials" className="hover:text-gray-900 transition">Customers</a>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/login" className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition">
              Log in
            </Link>
            <Link to="/signup" className="px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition shadow-soft">
              Start free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(99,102,241,0.14)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-20 pb-24 text-center">
          <motion.div {...fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-200 bg-brand-50/50 backdrop-blur-sm text-xs font-medium text-brand-700 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            Now with GPT-4 class follow-up generation
          </motion.div>
          <motion.h1 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 }} className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.05] mb-6">
            Close more deals with<br />
            <span className="gradient-text">AI follow-ups</span>
          </motion.h1>
          <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            LeadPilot AI captures your leads, tracks every conversation, and writes the perfect follow-up email — so no deal goes cold while you're heads-down on real work.
          </motion.p>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <Link to="/signup" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition shadow-lifted">
              Start free <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/dashboard" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm font-semibold hover:bg-gray-50 transition shadow-soft">
              Book a demo
            </Link>
          </motion.div>

          {/* Hero product preview */}
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="relative max-w-5xl mx-auto">
            <div className="card p-2 shadow-lifted bg-white/90 backdrop-blur-sm">
              <div className="rounded-xl overflow-hidden border border-gray-100">
                <div className="bg-gray-50 px-4 py-2.5 flex items-center gap-2 border-b border-gray-100">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 text-center text-xs text-gray-400 font-medium">app.leadpilot.ai/dashboard</div>
                </div>
                <div className="grid grid-cols-12 min-h-[420px] bg-white">
                  <div className="col-span-3 hidden md:flex flex-col gap-1 p-4 border-r border-gray-100 bg-gray-50/40">
                    {['Dashboard', 'Leads', 'Tasks', 'AI Follow-up', 'Settings'].map((l, i) => (
                      <div key={l} className={`text-xs px-3 py-2 rounded-lg ${i === 0 ? 'bg-white shadow-soft text-gray-900 font-semibold' : 'text-gray-500'}`}>
                        {l}
                      </div>
                    ))}
                  </div>
                  <div className="col-span-12 md:col-span-9 p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                      {[
                        { l: 'Total leads', v: '1,284', d: '+12%', up: true },
                        { l: 'New this week', v: '47', d: '+8%', up: true },
                        { l: 'Conversion', v: '34%', d: '+4%', up: true },
                        { l: 'Pipeline', v: '$184k', d: '+22%', up: true },
                      ].map((s) => (
                        <div key={s.l} className="bg-white border border-gray-100 rounded-xl p-3 text-left">
                          <p className="text-[11px] text-gray-500 mb-1">{s.l}</p>
                          <p className="text-lg font-bold text-gray-900">{s.v}</p>
                          <p className="text-[10px] text-emerald-600 mt-0.5">{s.d}</p>
                        </div>
                      ))}
                    </div>
                    <div className="grid md:grid-cols-3 gap-3">
                      {['New', 'Contacted', 'Qualified'].map((stage, idx) => (
                        <div key={stage} className="bg-gray-50/60 rounded-xl p-3">
                          <p className="text-[11px] font-semibold text-gray-700 mb-2 uppercase tracking-wider">{stage}</p>
                          {[1, 2].map((i) => (
                            <div key={i} className="bg-white border border-gray-100 rounded-lg p-2.5 mb-2 text-left">
                              <p className="text-xs font-medium text-gray-900">{['Sarah Chen', 'Marcus Patel', 'Priya Desai', 'David Okafor', 'Hannah B.', 'Jordan Lee'][idx * 2 + i - 1]}</p>
                              <p className="text-[10px] text-gray-500 mt-0.5">{['Acme Robotics', 'Brightlabs', 'Harbor Health', 'Craftworks', 'Orbitware', 'Maple Studio'][idx * 2 + i - 1]}</p>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Logo strip */}
          <div className="mt-16 pt-10 border-t border-gray-100">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-6">Trusted by 2,400+ small businesses</p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {logos.map((l) => (
                <span key={l} className="text-gray-400 text-sm font-semibold tracking-tight">{l}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-brand-600 font-semibold mb-3">Features</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Everything to close, nothing to slow you down</h2>
            <p className="text-lg text-gray-600">Built from the ground up for solo founders and small teams who hate bloated CRMs.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.04 }}
                className="card p-6 hover:shadow-lifted transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-24 px-6 lg:px-8 bg-gray-50/60 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-brand-600 font-semibold mb-3">How it works</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">From cold lead to closed deal in 4 steps</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <motion.div key={s.num} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }} className="card p-6">
                <div className="text-4xl font-bold text-brand-600/20 mb-3">{s.num}</div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="mt-16 grid md:grid-cols-3 gap-5">
            <div className="card p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0"><Mail className="w-5 h-5" /></div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Email integration</h4>
                <p className="text-sm text-gray-600">Drafts land directly in your inbox.</p>
              </div>
            </div>
            <div className="card p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0"><Workflow className="w-5 h-5" /></div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Smart automations</h4>
                <p className="text-sm text-gray-600">Auto-create tasks when stage changes.</p>
              </div>
            </div>
            <div className="card p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center flex-shrink-0"><BarChart3 className="w-5 h-5" /></div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Live reporting</h4>
                <p className="text-sm text-gray-600">Conversion + revenue, in real time.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-brand-600 font-semibold mb-3">Pricing</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Simple pricing, no surprises</h2>
            <p className="text-lg text-gray-600">14-day free trial. Cancel anytime. No credit card required.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {tiers.map((t, i) => (
              <motion.div
                key={t.name}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                className={`card p-7 relative ${t.popular ? 'ring-2 ring-brand-500 shadow-lifted' : ''}`}
              >
                {t.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand-600 text-white text-xs font-semibold">
                    Most popular
                  </div>
                )}
                <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
                <p className="text-sm text-gray-500 mt-1 mb-5">{t.sub}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">${t.price}</span>
                  <span className="text-sm text-gray-500">/ month</span>
                </div>
                <Link
                  to="/signup"
                  className={`block text-center py-2.5 rounded-xl text-sm font-semibold mb-6 transition ${
                    t.popular ? 'bg-gray-900 text-white hover:bg-gray-800' : 'border border-gray-200 text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {t.cta}
                </Link>
                <ul className="space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6 lg:px-8 bg-gray-50/60 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-brand-600 font-semibold mb-3">Customers</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Loved by service businesses</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }} className="card p-6">
                <div className="flex gap-0.5 text-amber-400 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-800 leading-relaxed mb-5">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="relative rounded-3xl bg-gray-900 text-white p-12 md:p-16 overflow-hidden text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(139,92,246,0.4)_0%,transparent_70%)]" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Stop losing deals to follow-up gaps.</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">Join 2,400+ small businesses closing more with less effort.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/signup" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-900 text-sm font-semibold hover:bg-gray-100 transition">
                  Start free <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/dashboard" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition">
                  Book a demo
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="relative w-7 h-7 rounded-lg overflow-hidden flex items-center justify-center">
              <span className="absolute inset-0 bg-gradient-to-br from-brand-500 to-brand-700" />
              <svg viewBox="0 0 24 24" className="relative w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </span>
            <span className="font-semibold text-sm">LeadPilot.ai</span>
            <span className="text-xs text-gray-400 ml-2">© 2026</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900 transition">Privacy</a>
            <a href="#" className="hover:text-gray-900 transition">Terms</a>
            <a href="#" className="hover:text-gray-900 transition">Security</a>
            <a href="#" className="hover:text-gray-900 transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}