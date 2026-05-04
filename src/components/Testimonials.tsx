const QUOTES = [
  {
    quote:
      'We went from posting twice a month to four times a week. Inbound leads doubled in the first quarter.',
    name: 'Marte Skogli',
    role: 'Founder, Foldsen & Co',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces',
  },
  {
    quote:
      'Cancelled our agency. Plume costs a tenth and the output is genuinely better. The voice is uncanny.',
    name: 'Henrik Voll',
    role: 'CEO, Norrøn Studio',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces',
  },
  {
    quote:
      'Set it up on a Sunday morning. By Wednesday it had written 18 posts, scheduled 12, and started a thread that hit 40k views.',
    name: 'Ingrid Lindholm',
    role: 'Marketing, Lindholm Atelier',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces',
  },
  {
    quote:
      'Honestly suspicious how good the captions are. My co-founder thought I had hired a copywriter.',
    name: 'Aksel Brun',
    role: 'Co-founder, Kilde',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=faces',
  },
  {
    quote:
      'We tried three other tools. Plume is the only one that actually felt on-brand on day one.',
    name: 'Sigrid Holm',
    role: 'Head of Growth, Helmer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces',
  },
  {
    quote:
      'It frees up about 30 hours a month for our team. That alone pays for it ten times over.',
    name: 'Jonas Eide',
    role: 'Operator, Skog Studio',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=faces',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 px-6 bg-cream-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink/50 mb-4">Customers</p>
          <h2 className="font-serif text-5xl md:text-6xl tracking-tightish text-ink leading-[1.05]">
            Loved by small &amp; medium <span className="italic text-ink/60">enterprises.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {QUOTES.map((q) => (
            <article
              key={q.name}
              className="bg-white rounded-3xl p-8 border border-black/5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.05)] transition"
            >
              <p className="font-serif text-xl text-ink leading-snug">"{q.quote}"</p>
              <div className="flex items-center gap-3 mt-8">
                <img
                  src={q.avatar}
                  alt={q.name}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="text-sm font-medium">{q.name}</div>
                  <div className="text-xs text-ink/50">{q.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}