import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-canvas flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink/50 mb-5">404 — adrift</p>
        <h1 className="font-serif text-5xl tracking-tightish text-ink leading-[1.05]">
          Page not built <span className="italic text-ink/60">yet.</span>
        </h1>
        <p className="font-serif italic text-lg text-ink/60 mt-5">
          This page hasn't been generated. Plume is busy elsewhere.
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-8 inline-flex items-center px-6 py-3 rounded-xl bg-ink text-white font-serif"
        >
          ← Back to home
        </button>
      </div>
    </div>
  );
}