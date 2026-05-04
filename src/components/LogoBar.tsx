import { motion } from 'framer-motion';

const logos = [
  { name: 'Stripe', icon: '💳' },
  { name: 'Vercel', icon: '▲' },
  { name: 'Linear', icon: '◆' },
  { name: 'Notion', icon: '📄' },
  { name: 'Figma', icon: '🎨' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Slack', icon: '💬' },
  { name: 'Jira', icon: '🔵' },
];

export default function LogoBar() {
  return (
    <section className="py-16 bg-gray-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm text-gray-600 uppercase tracking-widest mb-10">
          Trusted by teams at world-class companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-2.5 text-gray-600 hover:text-gray-400 transition-colors duration-200 cursor-default"
            >
              <span className="text-xl">{logo.icon}</span>
              <span className="text-lg font-semibold">{logo.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}