import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center text-center px-6">
      <div>
        <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-4">404</p>
        <h1 className="text-4xl font-bold text-white mb-4">Page not built yet</h1>
        <p className="text-gray-400 mb-8">This page hasn't been generated. Head back home to explore what's ready.</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-semibold transition-colors"
        >
          ← Back to home
        </button>
      </div>
    </div>
  );
}