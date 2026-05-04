import { Twitter, Linkedin, Github } from 'lucide-react';

const sections = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Integrations'],
  },
  {
    title: 'Resources',
    links: ['Help center', 'Lead playbook', 'Templates', 'API docs', 'Status'],
  },
  {
    title: 'Company',
    links: ['About', 'Customers', 'Careers', 'Press kit', 'Contact'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300 pt-20 pb-10 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="relative w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-br from-accent-500 via-accent-600 to-ink-900" />
                <svg viewBox="0 0 24 24" className="relative w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 11l18-8-8 18-2-8-8-2z" />
                </svg>
              </span>
              <span className="font-display font-bold text-white text-lg tracking-tight">
                LeadPilot<span className="text-accent-400">.ai</span>
              </span>
            </div>
            <p className="text-sm text-ink-400 max-w-xs leading-relaxed mb-6">
              The AI lead engine for service businesses — capture, qualify, and follow up automatically. Built for teams that close.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Github, label: 'GitHub' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-ink-800 hover:bg-ink-700 text-ink-300 hover:text-white flex items-center justify-center transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {sections.map((s) => (
            <div key={s.title}>
              <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">{s.title}</h4>
              <ul className="space-y-3">
                {s.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-ink-400 hover:text-white transition">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-ink-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-ink-500">© 2026 LeadPilot AI, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-ink-500">
            <a href="#" className="hover:text-ink-300 transition">Privacy</a>
            <a href="#" className="hover:text-ink-300 transition">Terms</a>
            <a href="#" className="hover:text-ink-300 transition">Security</a>
            <a href="#" className="hover:text-ink-300 transition">DPA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}