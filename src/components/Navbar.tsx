import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Customers' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-ink-100' : 'bg-transparent',
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 group">
          <span className="relative w-8 h-8 rounded-lg bg-ink-900 flex items-center justify-center overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-br from-accent-500 via-accent-600 to-ink-900 opacity-90" />
            <svg viewBox="0 0 24 24" className="relative w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 11l18-8-8 18-2-8-8-2z" />
            </svg>
          </span>
          <span className="font-display font-bold text-[17px] tracking-tight text-ink-900">
            LeadPilot<span className="text-accent-600">.ai</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-600 hover:text-ink-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href="#login" className="px-4 py-2 text-sm font-medium text-ink-700 hover:text-ink-900 transition">
            Sign in
          </a>
          <a
            href="#signup"
            className="px-4 py-2 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition shadow-soft"
          >
            Start free
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-ink-700"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink-100 bg-white">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-ink-700"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-ink-100 flex flex-col gap-2">
              <a href="#login" className="py-2.5 text-sm font-medium text-ink-700">Sign in</a>
              <a href="#signup" className="px-4 py-2.5 rounded-full bg-ink-900 text-white text-sm font-medium text-center">
                Start free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}