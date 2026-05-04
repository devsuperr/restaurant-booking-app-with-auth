const FEATURES = [
  'Unlimited posts on 4 channels',
  'AI-generated images & reels',
  'Trained on your website & brand',
  'Performance analytics',
  'Approval workflows',
  'Slack & email digest',
  'Priority human support',
  '14-day free trial',
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink/50 mb-4">Pricing</p>
        <h2 className="font-serif text-5xl md:text-6xl tracking-tightish text-ink leading-[1.05]">
          One price <span className="italic text-ink/60">for autopilot.</span>
        </h2>
        <p className="font-serif italic text-xl text-ink/60 mt-5">
          Everything included. No extra costs. Cancel anytime.
        </p>

        <div className="mt-14 bg-white rounded-3xl border border-black/5 p-10 text-left shadow-[0_2px_24px_rgba(0,0,0,0.04)]">
          <div className="flex items-baseline justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-serif text-3xl">Plume Autopilot</h3>
              <p className="text-ink/55 text-sm mt-1">
                For founders, agencies and SMBs that just want it done.
              </p>
            </div>
            <div className="text-right">
              <span className="font-serif text-6xl">€349</span>
              <span className="text-ink/50">/month</span>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-ink/75">
            {FEATURES.map((f) => (
              <div key={f} className="flex gap-2">
                <span className="text-accent">✓</span> {f}
              </div>
            ))}
          </div>

          <a
            href="#start"
            className="mt-10 inline-flex w-full items-center justify-center gap-2 bg-ink text-white px-8 py-4 rounded-2xl font-serif text-lg hover:bg-black transition"
          >
            Start free trial →
          </a>
        </div>
      </div>
    </section>
  );
}