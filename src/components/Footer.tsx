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
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-3">Product</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-ink/70 hover:text-ink">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-ink/70 hover:text-ink">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#how" className="text-ink/70 hover:text-ink">
                  How it works
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-3">Company</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-ink/70 hover:text-ink">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-ink/70 hover:text-ink">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="text-ink/70 hover:text-ink">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-3">Legal</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-ink/70 hover:text-ink">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-ink/70 hover:text-ink">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-line text-xs text-ink-muted flex flex-col sm:flex-row justify-between gap-3">
          <div>© 2026 LeadPilot AI. All rights reserved.</div>
          <div>Made for small businesses that close.</div>
        </div>
      </div>
    </footer>
  );
}