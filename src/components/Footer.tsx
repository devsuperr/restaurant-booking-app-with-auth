import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold">
              R
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              Red Orange<span className="text-brand-600">.</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-ink-500 leading-relaxed">
            Senior engineers, embedded into your roadmap. 14+ years across Asia, Europe and the US.
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-ink-400">Services</div>
          <ul className="mt-4 space-y-2 text-sm text-ink-700">
            <li><Link to="/services" className="hover:text-brand-600">Staff augmentation</Link></li>
            <li><Link to="/services" className="hover:text-brand-600">Salesforce delivery</Link></li>
            <li><Link to="/services" className="hover:text-brand-600">Platform engineering</Link></li>
            <li><Link to="/services" className="hover:text-brand-600">Managed pods</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-ink-400">Company</div>
          <ul className="mt-4 space-y-2 text-sm text-ink-700">
            <li><Link to="/about" className="hover:text-brand-600">About</Link></li>
            <li><Link to="/about" className="hover:text-brand-600">Our story</Link></li>
            <li><Link to="/contact" className="hover:text-brand-600">Contact</Link></li>
            <li><a href="mailto:careers@redorangetech.com" className="hover:text-brand-600">Careers</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-ink-400">Get in touch</div>
          <ul className="mt-4 space-y-2 text-sm text-ink-700">
            <li><a href="mailto:hello@redorangetech.com" className="hover:text-brand-600">hello@redorangetech.com</a></li>
            <li className="text-ink-500">Bangalore · Lisbon · Austin</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-ink-400 flex flex-wrap justify-between gap-3">
          <div>© {new Date().getFullYear()} Red Orange Technologies. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-brand-600">Privacy</a>
            <a href="#" className="hover:text-brand-600">Terms</a>
            <a href="#" className="hover:text-brand-600">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}