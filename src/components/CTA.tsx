export default function CTA() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto bg-ink rounded-[32px] p-12 md:p-20 text-center text-white relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-5 relative">
          Ready when you are
        </p>
        <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tightish relative">
          Stop posting. <span className="italic text-accent">Start growing.</span>
        </h2>
        <p className="font-serif italic text-xl text-white/65 mt-6 max-w-xl mx-auto relative">
          Connect your site in 90 seconds. The first post goes out tomorrow.
        </p>
        <a
          href="#start"
          className="mt-10 inline-flex items-center gap-2 bg-accent text-ink px-8 py-4 rounded-2xl font-serif text-lg font-medium hover:bg-accent/90 transition relative"
        >
          Get started — free for 14 days
        </a>
      </div>
    </section>
  );
}