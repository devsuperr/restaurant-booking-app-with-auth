import { motion } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';

const avatars = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=faces',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 mesh-bg pt-16">
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-brand-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl"
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-600/20 border border-brand-500/30 text-brand-300 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
          Now in public beta — Join 12,000+ teams
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
        >
          Ship faster with{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-violet-400 to-cyan-400">
            intelligent
          </span>{' '}
          workflows
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Nexus unifies your team's tools, automates repetitive tasks, and gives you AI-powered insights — so you can focus on building what matters.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href="#pricing"
            className="group flex items-center gap-2 px-7 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-2xl transition-all duration-200 hover:shadow-2xl hover:shadow-brand-600/30 hover:-translate-y-0.5 text-base"
          >
            Start for free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="flex items-center gap-2.5 px-7 py-3.5 text-gray-300 hover:text-white font-medium rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-200 text-base">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Play className="w-3.5 h-3.5 fill-white text-white" />
            </div>
            Watch demo
          </button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="flex items-center -space-x-2">
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="User avatar"
                className="w-8 h-8 rounded-full border-2 border-gray-950 object-cover"
                loading="lazy"
              />
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span>
              <strong className="text-white">4.9/5</strong> from 2,400+ reviews
            </span>
          </div>
        </motion.div>

        {/* Hero dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 relative"
        >
          <div className="glass rounded-2xl border border-white/10 overflow-hidden glow">
            {/* Mock browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 mx-4 h-5 bg-white/5 rounded-md flex items-center px-3">
                <span className="text-xs text-gray-500">app.nexus.io/dashboard</span>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="bg-gray-900 p-6">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Active Projects', value: '84', trend: '+12%', color: 'text-accent-400' },
                  { label: 'Team Velocity', value: '96pt', trend: '+8%', color: 'text-brand-400' },
                  { label: 'Automations Run', value: '14.2k', trend: '+34%', color: 'text-violet-400' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-gray-800/60 rounded-xl p-4 border border-white/5">
                    <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className={`text-xs font-medium ${stat.color}`}>{stat.trend} this month</p>
                  </div>
                ))}
              </div>

              {/* Mini chart bars */}
              <div className="bg-gray-800/40 rounded-xl p-4 border border-white/5">
                <div className="flex items-end gap-1.5 h-16">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 + i * 0.04, ease: 'easeOut' }}
                      style={{ height: `${h}%`, transformOrigin: 'bottom' }}
                      className={`flex-1 rounded-t-sm ${i === 11 ? 'bg-brand-500' : 'bg-white/10'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-6 top-1/3 glass rounded-xl px-3 py-2 border border-white/10 hidden md:flex items-center gap-2"
          >
            <div className="w-6 h-6 rounded-full bg-accent-500/20 flex items-center justify-center">
              <span className="text-xs">⚡</span>
            </div>
            <div>
              <p className="text-xs text-white font-semibold">Task automated</p>
              <p className="text-[10px] text-gray-500">2 seconds ago</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -right-6 bottom-1/4 glass rounded-xl px-3 py-2 border border-white/10 hidden md:flex items-center gap-2"
          >
            <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center">
              <span className="text-xs">🎯</span>
            </div>
            <div>
              <p className="text-xs text-white font-semibold">Sprint complete</p>
              <p className="text-[10px] text-gray-500">97% on target</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}