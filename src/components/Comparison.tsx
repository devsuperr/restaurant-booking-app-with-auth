const WITHOUT = [
  '40+ hours every month writing captions',
  'Freelancer invoices stacking up to €3,500/mo',
  'Inconsistent posting, off-brand drift',
  'Endless tabs: Buffer, Canva, ChatGPT, Notion',
  'Founders posting at 11pm on a Sunday',
];

const WITH = [
  '0 hours. It runs in the background.',
  'One flat fee. Everything included.',
  'On-brand, every post, on every channel',
  'One dashboard. Approve in two taps.',
  'Sleep at 11pm. Plume already posted.',
];

export default function Comparison() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl tracking-tightish text-ink leading-[1.05] text-center mb-16 max-w-3xl mx-auto">
          Traditional marketing is a full-time job.
          <span className="italic text-ink/60"> Plume does it for you.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-cream-200/50 rounded-3xl p-10 border border-black/5">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink/50 mb-5">Without Plume</p>
            <ul className="space-y-4 text-ink/70">
              {WITHOUT.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="text-ink/30">—</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-ink rounded-3xl p-10 text-white">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent mb-5">With Plume</p>
            <ul className="space-y-4 text-white/85">
              {WITH.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}