import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#how', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Customers' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-colors',
        scrolled ? 'bg-white/85 backdrop-blur-xl border-b border-line' : 'bg-white/0 border-b border-transparent',
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="w-8 h-8 rounded-lg bg-ink text-white grid place-items-center text-sm font-black">L</span>
          <span>
            LeadPilot<span className="text-accent">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-ink/70">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login" className="hidden sm:inline text-sm font-medium text-ink/70 hover:text-ink">
            Sign in
          </Link>
          <Link
            to="/signup"
            className="inline-flex items-center gap-1.5 bg-ink text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-ink-soft transition-colors"
          >
            Start free →
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden w-9 h-9 grid place-items-center rounded-lg border border-line"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-white">
          <div className="px-6 py-4 flex flex-col gap-3 text-sm font-medium">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-ink/80 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <Link to="/login" onClick={() => setOpen(false)} className="py-2 text-ink/80 hover:text-ink">
              Sign in
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}