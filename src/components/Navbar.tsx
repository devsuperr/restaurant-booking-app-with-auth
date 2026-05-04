import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#how', label: 'How it works' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#testimonials', label: 'Customers' },
    { href: '#contact', label: 'Get in touch' },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(96%,1100px)]">
      <nav
        className={`flex items-center justify-between px-5 py-3 rounded-2xl border transition-all ${
          scrolled
            ? 'bg-white/75 backdrop-blur-xl border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
            : 'bg-white/55 backdrop-blur-xl border-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]'
        }`}
      >
        <a href="#hero" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-ink flex items-center justify-center">
            <span className="font-serif italic text-accent text-lg leading-none">p</span>
          </span>
          <span className="font-serif text-xl text-ink tracking-tightish">Plume</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-ink/70">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#login"
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-xl bg-white border border-black/5 font-serif text-base text-ink hover:bg-cream-50 transition"
          >
            Log in
          </a>
          <a
            href="#start"
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-xl bg-ink text-white font-serif text-base shadow-[0_2px_8px_rgba(0,0,0,0.12)] hover:bg-black transition"
          >
            Get started
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden w-9 h-9 inline-flex items-center justify-center rounded-lg hover:bg-black/5"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden mt-2 rounded-2xl bg-white/90 backdrop-blur-xl border border-black/5 p-5 flex flex-col gap-3 shadow-lg">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-ink/80 font-serif text-lg"
            >
              {l.label}
            </a>
          ))}
          <a href="#start" className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-ink text-white font-serif">
            Get started
          </a>
        </div>
      )}
    </header>
  );
}