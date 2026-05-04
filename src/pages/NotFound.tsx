import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ink-200 text-xs font-medium text-ink-500 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
          Coming soon
        </div>
        <h1 className="text-4xl font-bold text-ink-900 mb-3 tracking-tight">Page not built yet</h1>
        <p className="text-ink-500 mb-8">
          This route is on the roadmap but hasn't shipped in the current build. Head back to the home page to keep exploring.
        </p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </button>
      </div>
    </div>
  );
}