import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen grid place-items-center px-6">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-semibold mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Coming soon
        </div>
        <h1 className="text-4xl font-black tracking-tight mb-3">Page not built yet</h1>
        <p className="text-ink-muted leading-relaxed mb-8">
          This route hasn't been generated. The dashboard, leads module, and other pages will land
          in the next phase of the build.
        </p>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 bg-ink text-white font-semibold px-6 py-3 rounded-full hover:bg-ink-soft transition-colors"
        >
          ← Back to home
        </button>
      </div>
    </div>
  );
}