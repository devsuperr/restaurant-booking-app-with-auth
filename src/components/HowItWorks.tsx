const STEPS = [
  {
    n: '01',
    title: 'Add your website',
    body: 'Drop in your URL. Plume reads every page, learns your tone, products and visual identity in under two minutes.',
  },
  {
    n: '02',
    title: 'Analysis & production',
    body: 'It studies your audience, the platforms that matter, and writes a month of on-brand posts — text, image and short-form video.',
  },
  {
    n: '03',
    title: 'Automatic publishing',
    body: 'Approve once or set it on autopilot. Plume schedules, publishes and learns from every reaction. You just keep working.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-28 px-6 bg-cream-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink/50 mb-4">How it works</p>
          <h2 className="font-serif text-5xl md:text-6xl tracking-tightish text-ink leading-[1.05]">
            Three steps. <span className="italic text-ink/60">Then it runs itself.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((s) => (
            <article
              key={s.n}
              className="bg-white rounded-3xl p-10 border border-black/5 hover:border-black/10 hover:shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-all"
            >
              <span className="font-serif italic text-accent text-5xl">{s.n}</span>
              <h3 className="font-serif text-2xl mt-6 mb-3">{s.title}</h3>
              <p className="text-ink/65 leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}