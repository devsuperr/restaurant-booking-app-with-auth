import { useEffect, useState } from 'react';
import { ArrowRight, Globe } from 'lucide-react';

const ROTATING = ['founders', 'small teams', 'agencies', 'SMBs', 'studios'];

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROTATING.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" className="relative pt-40 pb-28 px-6 overflow-hidden">
      {/* Decorative side images — only on large screens */}
      <div
        className="hidden lg:block absolute left-0 top-32 w-[420px] h-[480px] opacity-90 pointer-events-none animate-float"
        aria-hidden
      >
        <img
          src="https://images.unsplash.com/photo-1611605698335-8b1569810432?w=900&h=1000&fit=crop"
          alt=""
          className="w-full h-full object-cover rounded-3xl"
          loading="lazy"
        />
      </div>
      <div
        className="hidden lg:block absolute right-0 top-40 w-[400px] h-[460px] opacity-90 pointer-events-none animate-float"
        style={{ animationDelay: '1.5s' }}
        aria-hidden
      >
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=1000&fit=crop"
          alt=""
          className="w-full h-full object-cover rounded-3xl"
          loading="lazy"
        />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink/50 mb-8">
          Autonomous social · since 2024
        </p>

        <h1 className="font-serif text-[clamp(48px,8vw,84px)] leading-[1.05] tracking-tightish text-ink">
          Social media
          <span className="block">
            <span className="italic">for</span>{' '}
            <span className="italic text-accent transition-opacity">{ROTATING[idx]}</span>
            <span className="text-accent caret-blink font-normal not-italic">|</span>
          </span>
        </h1>

        <p className="font-serif italic text-xl md:text-2xl text-ink/60 mt-7 max-w-xl mx-auto leading-relaxed">
          Reach more customers — without lifting a finger. Plume writes, designs and posts every day, in your voice.
        </p>

        {/* URL capture card */}
        <form
          className="mt-12 max-w-xl mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const url = String(data.get('site') ?? '').trim();
            if (!url) return;
            // eslint-disable-next-line no-alert
            alert(`Plume will analyse ${url} — connect Supabase in Phase 2 to wire this up.`);
          }}
        >
          <div className="bg-white/85 backdrop-blur-xl rounded-[18px] p-[7px] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <div className="flex flex-col sm:flex-row gap-1.5">
              <label className="flex-1 flex items-center gap-3 bg-cream-50/70 rounded-[13px] px-5 py-4 border border-black/5">
                <Globe className="w-4 h-4 text-ink/40 shrink-0" />
                <input
                  type="url"
                  name="site"
                  placeholder="www.yourcompany.com"
                  className="flex-1 bg-transparent outline-none font-serif text-lg text-ink placeholder:text-ink/35 placeholder:italic"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-ink text-white px-7 py-4 rounded-[13px] font-serif text-base shadow-[0_2px_8px_rgba(0,0,0,0.12)] hover:bg-black transition"
              >
                Get started
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <p className="text-xs text-ink/40 mt-3">
            Free 14-day trial. No credit card. Connects to LinkedIn, X, Instagram &amp; TikTok.
          </p>
        </form>

        {/* Logo strip */}
        <div className="mt-20">
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink/40 mb-6">
            Trusted by 1,200+ teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-60">
            <span className="font-serif italic text-2xl">Foldsen &amp; Co</span>
            <span className="font-sans font-bold text-xl tracking-tight">norrøn</span>
            <span className="font-serif text-2xl">Helmer</span>
            <span className="font-mono text-lg">/skog</span>
            <span className="font-serif italic text-2xl">Lindholm</span>
            <span className="font-sans font-semibold text-xl">KILDE.</span>
          </div>
        </div>
      </div>
    </section>
  );
}