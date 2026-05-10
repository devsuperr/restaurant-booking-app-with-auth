import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, X, Filter, Clock, MapPin, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

type Availability = 'Available now' | 'In 2 weeks' | 'In 4 weeks';
type Role = 'Salesforce' | 'Full-stack' | 'DevOps' | 'QA' | 'Mobile' | 'Data' | 'Design';

type Engineer = {
  id: string;
  initials: string;
  name: string;
  role: Role;
  title: string;
  years: number;
  rate: number;
  timezone: string;
  location: string;
  skills: string[];
  availability: Availability;
  gradient: string;
  bio: string;
};

const ENGINEERS: Engineer[] = [
  { id: 'e1',  initials: 'AK', name: 'Anita Khanna',     role: 'Salesforce', title: 'Sr. Salesforce Developer',     years: 8, rate: 72, timezone: 'IST',  location: 'Bengaluru · IN', skills: ['Apex', 'LWC', 'Service Cloud', 'CI/CD'],            availability: 'Available now', gradient: 'from-brand-400 to-brand-600', bio: 'Ten Service Cloud rollouts. Led the Quartz Bank migration.' },
  { id: 'e2',  initials: 'MP', name: 'Marcus Patel',     role: 'Full-stack', title: 'Full-stack React · Node',      years: 6, rate: 65, timezone: 'CET',  location: 'Berlin · DE',    skills: ['React', 'Node', 'Postgres', 'tRPC'],                availability: 'Available now', gradient: 'from-ink-700 to-ink-900',     bio: 'Product-minded. Ships features end-to-end with a designer-friendly eye.' },
  { id: 'e3',  initials: 'SC', name: 'Sarah Chen',       role: 'DevOps',     title: 'AWS Solutions Architect',      years: 9, rate: 85, timezone: 'PST',  location: 'Austin · US',    skills: ['AWS', 'Terraform', 'EKS', 'Datadog'],               availability: 'In 2 weeks',    gradient: 'from-amber-400 to-orange-600', bio: 'Scaled three startups past 10k req/s. Loves a clean CDK stack.' },
  { id: 'e4',  initials: 'JR', name: 'Jamie Rivera',     role: 'QA',         title: 'QA Automation Lead',           years: 5, rate: 48, timezone: 'EST',  location: 'Toronto · CA',   skills: ['Cypress', 'Playwright', 'k6', 'CI/CD'],             availability: 'Available now', gradient: 'from-rose-400 to-red-600',     bio: 'Turns flaky pipelines into 99% pass-rate suites.' },
  { id: 'e5',  initials: 'OE', name: 'Olivia Egwu',      role: 'Salesforce', title: 'Salesforce Architect',         years: 11, rate: 95, timezone: 'GMT', location: 'London · UK',   skills: ['Apex', 'Flows', 'Experience Cloud', 'OmniStudio'],  availability: 'In 4 weeks',    gradient: 'from-violet-400 to-fuchsia-600', bio: 'Salesforce CTA. Ex-Slalom architect lead, EU enterprise focus.' },
  { id: 'e6',  initials: 'TN', name: 'Thuong Nguyen',    role: 'Full-stack', title: 'Sr. Engineer · TypeScript',    years: 7, rate: 68, timezone: 'ICT',  location: 'Hanoi · VN',     skills: ['TypeScript', 'Next.js', 'GraphQL', 'Prisma'],       availability: 'Available now', gradient: 'from-emerald-400 to-teal-600', bio: 'Strong on DX. Owns docs, types, and observability without being asked.' },
  { id: 'e7',  initials: 'LM', name: 'Luca Moretti',     role: 'Mobile',     title: 'iOS & React Native',           years: 6, rate: 70, timezone: 'CET',  location: 'Milan · IT',     skills: ['React Native', 'Swift', 'Fastlane', 'GraphQL'],     availability: 'In 2 weeks',    gradient: 'from-sky-400 to-blue-600',     bio: 'Shipped 4 apps to App Store top-100 in finance.' },
  { id: 'e8',  initials: 'RT', name: 'Rin Tanaka',       role: 'Data',       title: 'Data Engineer · dbt',          years: 5, rate: 62, timezone: 'JST',  location: 'Tokyo · JP',     skills: ['dbt', 'Snowflake', 'Airflow', 'Python'],            availability: 'Available now', gradient: 'from-indigo-400 to-purple-600', bio: 'Modelled the Halcyon revenue mart end-to-end in 6 weeks.' },
  { id: 'e9',  initials: 'PM', name: 'Priya Mehta',      role: 'Design',     title: 'Product Designer',             years: 6, rate: 60, timezone: 'IST',  location: 'Mumbai · IN',    skills: ['Figma', 'Design Systems', 'Prototyping', 'UX research'], availability: 'In 4 weeks', gradient: 'from-pink-400 to-rose-600',     bio: 'Pairs with engineers daily. Tokens, components, the works.' },
  { id: 'e10', initials: 'DH', name: 'Daniel Heinz',     role: 'DevOps',     title: 'Platform Engineer',            years: 8, rate: 78, timezone: 'CET',  location: 'Zurich · CH',    skills: ['Kubernetes', 'GitOps', 'Argo', 'Helm'],             availability: 'Available now', gradient: 'from-slate-500 to-slate-800',  bio: 'Built two compliant platforms for regulated fintech.' },
  { id: 'e11', initials: 'NA', name: 'Noa Avraham',      role: 'Full-stack', title: 'Sr. Engineer · Python',        years: 7, rate: 70, timezone: 'IST',  location: 'Tel Aviv · IL',  skills: ['Python', 'FastAPI', 'Postgres', 'React'],           availability: 'In 2 weeks',    gradient: 'from-cyan-400 to-blue-600',    bio: 'Backend-leaning full-stack. Loves a well-typed API.' },
  { id: 'e12', initials: 'FS', name: 'Fatima Souza',     role: 'QA',         title: 'QA Engineer',                  years: 4, rate: 42, timezone: 'BRT',  location: 'São Paulo · BR', skills: ['Playwright', 'API testing', 'Postman', 'CI/CD'],    availability: 'Available now', gradient: 'from-orange-400 to-red-500',   bio: 'Pragmatic test pyramid. Catches regressions before PR review.' },
];

const ROLES: Role[] = ['Salesforce', 'Full-stack', 'DevOps', 'QA', 'Mobile', 'Data', 'Design'];
const AVAIL: Availability[] = ['Available now', 'In 2 weeks', 'In 4 weeks'];

export default function BenchPage() {
  const [query, setQuery] = useState('');
  const [activeRoles, setActiveRoles] = useState<Role[]>([]);
  const [activeAvail, setActiveAvail] = useState<Availability[]>([]);
  const [maxRate, setMaxRate] = useState(120);
  const [minYears, setMinYears] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ENGINEERS.filter((e) => {
      if (activeRoles.length && !activeRoles.includes(e.role)) return false;
      if (activeAvail.length && !activeAvail.includes(e.availability)) return false;
      if (e.rate > maxRate) return false;
      if (e.years < minYears) return false;
      if (q) {
        const blob = `${e.name} ${e.title} ${e.role} ${e.skills.join(' ')} ${e.location}`.toLowerCase();
        if (!blob.includes(q)) return false;
      }
      return true;
    });
  }, [query, activeRoles, activeAvail, maxRate, minYears]);

  function toggleRole(r: Role) {
    setActiveRoles((s) => (s.includes(r) ? s.filter((x) => x !== r) : [...s, r]));
  }
  function toggleAvail(a: Availability) {
    setActiveAvail((s) => (s.includes(a) ? s.filter((x) => x !== a) : [...s, a]));
  }
  function clearAll() {
    setQuery('');
    setActiveRoles([]);
    setActiveAvail([]);
    setMaxRate(120);
    setMinYears(0);
  }

  const hasFilters = !!query || activeRoles.length > 0 || activeAvail.length > 0 || maxRate < 120 || minYears > 0;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="relative overflow-hidden border-b border-black/5">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-white to-white" />
          <div className="max-w-7xl mx-auto px-6 pt-14 pb-10 md:pt-20 md:pb-14">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-200 text-brand-700 text-xs font-semibold tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600" /> Live bench · updated daily
                </span>
                <h1 className="font-display mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-ink-900">
                  Browse the bench.
                </h1>
                <p className="mt-4 text-lg text-ink-600 leading-relaxed">
                  Senior engineers, real availability windows, real rates. Shortlist any three and we&apos;ll set up calls within 48 hours.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand-600 text-white font-semibold shadow-soft hover:bg-brand-700 transition-colors self-start md:self-auto"
              >
                Request a brief <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-10 md:py-14 grid lg:grid-cols-12 gap-8">
          {/* Filters */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-24 space-y-7">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-semibold text-ink-900">
                  <Filter className="w-4 h-4" /> Filters
                </div>
                {hasFilters && (
                  <button
                    onClick={clearAll}
                    className="text-xs font-semibold text-brand-600 hover:text-brand-700"
                  >
                    Clear all
                  </button>
                )}
              </div>

              <div>
                <label htmlFor="search" className="text-xs uppercase tracking-widest font-semibold text-ink-400">Search</label>
                <div className="relative mt-2">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400" />
                  <input
                    id="search"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Name, skill, city…"
                    className="w-full pl-9 pr-9 py-2.5 rounded-xl border border-black/10 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  />
                  {query && (
                    <button
                      onClick={() => setQuery('')}
                      aria-label="Clear search"
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-ink-50"
                    >
                      <X className="w-3.5 h-3.5 text-ink-400" />
                    </button>
                  )}
                </div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-widest font-semibold text-ink-400">Role</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {ROLES.map((r) => {
                    const active = activeRoles.includes(r);
                    return (
                      <button
                        key={r}
                        onClick={() => toggleRole(r)}
                        className={cn(
                          'px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors',
                          active
                            ? 'bg-ink-900 text-white border-ink-900'
                            : 'bg-white text-ink-700 border-black/10 hover:border-ink-900',
                        )}
                      >
                        {r}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-widest font-semibold text-ink-400">Availability</div>
                <div className="mt-3 space-y-2">
                  {AVAIL.map((a) => {
                    const active = activeAvail.includes(a);
                    return (
                      <label key={a} className="flex items-center gap-2.5 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={active}
                          onChange={() => toggleAvail(a)}
                          className="w-4 h-4 rounded border-black/20 text-brand-600 focus:ring-brand-500"
                        />
                        <span className="text-sm text-ink-700">{a}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <div className="text-xs uppercase tracking-widest font-semibold text-ink-400">Max rate</div>
                  <div className="text-xs font-semibold text-ink-900">${maxRate}/hr</div>
                </div>
                <input
                  type="range"
                  min={40}
                  max={120}
                  step={5}
                  value={maxRate}
                  onChange={(e) => setMaxRate(Number(e.target.value))}
                  className="mt-3 w-full accent-brand-600"
                  aria-label="Maximum hourly rate"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <div className="text-xs uppercase tracking-widest font-semibold text-ink-400">Min experience</div>
                  <div className="text-xs font-semibold text-ink-900">{minYears}+ years</div>
                </div>
                <input
                  type="range"
                  min={0}
                  max={10}
                  step={1}
                  value={minYears}
                  onChange={(e) => setMinYears(Number(e.target.value))}
                  className="mt-3 w-full accent-brand-600"
                  aria-label="Minimum years of experience"
                />
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="lg:col-span-9">
            <div className="flex items-center justify-between pb-5 border-b border-black/5">
              <div className="text-sm text-ink-600">
                <span className="font-semibold text-ink-900">{filtered.length}</span> {filtered.length === 1 ? 'engineer' : 'engineers'} matching
              </div>
              <div className="text-xs text-ink-400 hidden md:block">Click any card to start a shortlist</div>
            </div>

            {filtered.length === 0 ? (
              <EmptyState onReset={clearAll} />
            ) : (
              <ul className="mt-6 grid sm:grid-cols-2 gap-4">
                {filtered.map((e) => (
                  <EngineerCard key={e.id} e={e} />
                ))}
              </ul>
            )}

            <div className="mt-12 rounded-2xl border border-black/5 bg-ink-50/60 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="font-display font-bold text-lg text-ink-900">Don&apos;t see the right fit?</div>
                <div className="text-sm text-ink-600 mt-1">
                  Tell us the stack and seniority you need. We&apos;ll source from our pre-vetted network.
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink-900 text-white font-semibold hover:bg-ink-800 transition-colors"
              >
                Request a custom shortlist <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function EngineerCard({ e }: { e: Engineer }) {
  const availTone =
    e.availability === 'Available now'
      ? 'bg-emerald-50 text-emerald-700'
      : e.availability === 'In 2 weeks'
      ? 'bg-amber-50 text-amber-700'
      : 'bg-ink-100 text-ink-700';

  return (
    <li className="group rounded-2xl border border-black/5 bg-white p-5 hover:shadow-card hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className={cn('w-12 h-12 rounded-full bg-gradient-to-br grid place-items-center text-white font-semibold shrink-0', e.gradient)}>
          {e.initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="font-semibold text-[15px] text-ink-900 truncate">{e.name}</div>
              <div className="text-xs text-ink-500 truncate">{e.title} · {e.years}y</div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-sm font-bold text-brand-600">${e.rate}<span className="text-xs font-medium text-ink-400">/hr</span></div>
            </div>
          </div>

          <p className="mt-3 text-[13px] text-ink-600 leading-relaxed line-clamp-2">{e.bio}</p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {e.skills.slice(0, 4).map((s) => (
              <span key={s} className="px-2 py-0.5 rounded-md bg-ink-50 text-ink-700 text-[11px] font-medium">{s}</span>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-black/5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-[11px] text-ink-500 min-w-0">
              <span className="inline-flex items-center gap-1 truncate"><MapPin className="w-3 h-3 shrink-0" /> {e.location}</span>
              <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {e.timezone}</span>
            </div>
            <span className={cn('px-2 py-0.5 rounded-full text-[11px] font-semibold shrink-0', availTone)}>
              {e.availability}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="mt-10 rounded-2xl border border-dashed border-black/10 bg-white p-12 text-center">
      <div className="mx-auto w-12 h-12 rounded-full bg-brand-50 grid place-items-center text-brand-600">
        <Sparkles className="w-5 h-5" />
      </div>
      <div className="mt-4 font-display font-bold text-lg text-ink-900">No matches with these filters</div>
      <p className="mt-2 text-sm text-ink-600 max-w-md mx-auto">
        Try widening the rate range or removing a role filter — or tell us what you need and we&apos;ll source it.
      </p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          onClick={onReset}
          className="px-4 py-2 rounded-full border border-black/10 text-sm font-semibold hover:border-ink-900 transition-colors"
        >
          Reset filters
        </button>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors"
        >
          Request a custom shortlist <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}