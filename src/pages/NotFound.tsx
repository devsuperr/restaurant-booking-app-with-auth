import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 flex items-center">
        <div className="max-w-2xl mx-auto px-6 py-24 text-center">
          <div className="text-xs uppercase tracking-wider text-brand-600 font-semibold">404</div>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mt-3">
            That page hasn't been built yet.
          </h1>
          <p className="mt-4 text-ink-500 max-w-md mx-auto">
            The link took you somewhere that doesn't exist on the site. Head back home or get in touch.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <button
              onClick={() => navigate('/')}
              className="px-5 py-2.5 rounded-lg bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors"
            >
              ← Back to home
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-5 py-2.5 rounded-lg bg-white border border-neutral-200 font-semibold hover:border-neutral-300 transition-colors"
            >
              Contact us
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}