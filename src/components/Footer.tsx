export default function Footer() {
  return (
    <footer className="border-t border-black/5 px-6 py-16 bg-cream-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <a href="#hero" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-ink flex items-center justify-center">
              <span className="font-serif italic text-accent text-lg leading-none">p</span>
            </span>
            <span className="font-serif text-xl">Plume</span>
          </a>
          <p className="font-serif italic text-ink/55 mt-4 max-w-sm">
            The first autonomous AI for social media. Made in Oslo, used everywhere.
          </p>
        </div>

        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink/50 mb-3">Product</p>
          <ul className="space-y-2 text-ink/70 text-sm">
            <li><a href="#how" className="hover:text-ink">How it works</a></li>
            <li><a href="#pricing" className="hover:text-ink">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-ink">Customers</a></li>
            <li><a href="#contact" className="hover:text-ink">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink/50 mb-3">Company</p>
          <ul className="space-y-2 text-ink/70 text-sm">
            <li><a href="#" className="hover:text-ink">About</a></li>
            <li><a href="#" className="hover:text-ink">Careers</a></li>
            <li><a href="#" className="hover:text-ink">Privacy</a></li>
            <li><a href="#" className="hover:text-ink">Terms</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-black/5 flex flex-wrap justify-between gap-3 text-xs text-ink/50">
        <p>© 2026 Plume AS. Built quietly in Oslo.</p>
        <p className="font-mono">v1.0 · status: all systems go</p>
      </div>
    </footer>
  );
}