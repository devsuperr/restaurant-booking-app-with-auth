import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 font-bold text-lg">
              <span className="w-8 h-8 rounded-lg bg-ink text-white grid place-items-center text-sm font-black">
                L
              </span>
              <span>
                LeadPilot<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-ink-muted">The CRM small businesses actually use.</p>
          </div>
          <FooterCol
            title="Product"
            links={[
              { href: '#features', label: 'Features' },
              { href: '#pricing', label: 'Pricing' },
              { href: '#how', label: 'How it works' },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { href: '#', label: 'About' },
              { href: '#', label: 'Customers' },
              { href: '#', label: 'Contact' },
            ]}
          />
          <FooterCol
            title="Legal"
            links={[
              { href: '#', label: 'Privacy' },
              { href: '#', label: 'Terms' },
            ]}
          />
        </div>
        <div className="mt-12 pt-8 border-t border-line text-xs text-ink-muted flex flex-col sm:flex-row justify-between gap-3">
          <div>© 2026 LeadPilot AI. All rights reserved.</div>
          <div>Made for small businesses that close.</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <div className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-3">{title}</div>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-ink/70 hover:text-ink transition-colors">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}