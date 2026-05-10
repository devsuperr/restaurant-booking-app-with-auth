import { FormEvent, useState } from 'react';
import { CheckCircle2, Loader2, Mail, MapPin, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type FormState = {
  name: string;
  email: string;
  company: string;
  need: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const needs = ['Staff augmentation', 'Salesforce delivery', 'Platform pod', 'Outcome build', 'Not sure yet'];

const offices = [
  { city: 'Bangalore', address: 'Indiranagar · 5th Block', tz: 'IST · GMT+5:30' },
  { city: 'Lisbon', address: 'Avenida da Liberdade 110', tz: 'WET · GMT+0' },
  { city: 'Austin', address: '600 Congress Ave', tz: 'CT · GMT−6' },
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    need: needs[0],
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Errors = {};
    if (form.name.trim().length < 2) next.name = 'Please tell us your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'A valid work email helps us reply.';
    if (form.message.trim().length < 10) next.message = 'A sentence or two about the work would help.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Local-only simulation — wire to an API in Phase 2.
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSent(true);
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-white to-white" />
          <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
            <div className="text-xs uppercase tracking-wider text-brand-600 font-semibold">Contact</div>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mt-3 max-w-3xl">
              Tell us what you're building.
            </h1>
            <p className="mt-5 text-lg text-ink-500 max-w-2xl leading-relaxed">
              A principal engineer replies inside one business day — usually sooner. No call centres, no "account managers".
            </p>
          </div>
        </section>

        {/* FORM + INFO */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-neutral-100 bg-white shadow-card p-8">
                {sent ? (
                  <div className="py-10 text-center">
                    <div className="w-14 h-14 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h2 className="font-display font-bold text-2xl mt-5">Message received.</h2>
                    <p className="mt-2 text-ink-500 max-w-sm mx-auto">
                      A principal will reply to <span className="font-semibold text-ink-800">{form.email}</span> within one business day.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSent(false);
                        setForm({ name: '', email: '', company: '', need: needs[0], message: '' });
                      }}
                      className="mt-6 text-sm font-semibold text-brand-600 hover:text-brand-700"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field
                        label="Your name"
                        id="name"
                        value={form.name}
                        onChange={(v) => update('name', v)}
                        error={errors.name}
                        placeholder="Sarah Chen"
                      />
                      <Field
                        label="Work email"
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(v) => update('email', v)}
                        error={errors.email}
                        placeholder="sarah@company.com"
                      />
                    </div>

                    <Field
                      label="Company"
                      id="company"
                      value={form.company}
                      onChange={(v) => update('company', v)}
                      placeholder="Lattice CRM"
                      optional
                    />

                    <div>
                      <label htmlFor="need" className="block text-sm font-medium text-ink-700 mb-1.5">
                        What do you need?
                      </label>
                      <select
                        id="need"
                        value={form.need}
                        onChange={(e) => update('need', e.target.value)}
                        className="w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                      >
                        {needs.map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-ink-700 mb-1.5">
                        Tell us about the work
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                        placeholder="Roles, timeline, stack, anything else we should know..."
                        className={
                          'w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-brand-100 outline-none ' +
                          (errors.message
                            ? 'border-red-300 focus:border-red-400'
                            : 'border-neutral-200 focus:border-brand-500')
                        }
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <p className="text-xs text-ink-400 max-w-xs">
                        We reply inside one business day. Your details stay with us — never shared, never sold.
                      </p>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-600 text-white font-semibold hover:bg-brand-700 disabled:opacity-60 transition-colors"
                      >
                        {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                        {submitting ? 'Sending...' : 'Send message'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            <aside className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl border border-neutral-100 p-6">
                <div className="text-xs uppercase tracking-wider text-ink-400 font-semibold">
                  Direct lines
                </div>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4.5 h-4.5 text-brand-600 mt-0.5" />
                    <div>
                      <a
                        href="mailto:hello@redorangetech.com"
                        className="text-sm font-semibold text-ink-800 hover:text-brand-600"
                      >
                        hello@redorangetech.com
                      </a>
                      <div className="text-xs text-ink-400">For new engagements</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-4.5 h-4.5 text-brand-600 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-ink-800">+1 (512) 555 0148</div>
                      <div className="text-xs text-ink-400">Austin · 9am–6pm CT</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-100 p-6">
                <div className="text-xs uppercase tracking-wider text-ink-400 font-semibold">Offices</div>
                <ul className="mt-4 space-y-4">
                  {offices.map((o) => (
                    <li key={o.city} className="flex items-start gap-3">
                      <MapPin className="w-4.5 h-4.5 text-brand-600 mt-0.5" />
                      <div>
                        <div className="font-semibold text-sm">{o.city}</div>
                        <div className="text-xs text-ink-500">{o.address}</div>
                        <div className="text-xs text-ink-400 mt-0.5">{o.tz}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  error,
  placeholder,
  type = 'text',
  optional,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink-700 mb-1.5">
        {label}
        {optional && <span className="text-ink-400 font-normal"> (optional)</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={
          'w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-brand-100 outline-none ' +
          (error
            ? 'border-red-300 focus:border-red-400'
            : 'border-neutral-200 focus:border-brand-500')
        }
      />
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}