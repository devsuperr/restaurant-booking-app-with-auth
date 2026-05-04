import { motion } from 'framer-motion';
import {
  Zap, Shield, BarChart3, GitBranch, Bell, Users,
  Clock, Workflow, Globe,
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'AI-Powered Automation',
    description: 'Let intelligent agents handle repetitive workflows. Our AI learns your patterns and automates tasks before you even ask.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/20',
  },
  {
    icon: GitBranch,
    title: 'Visual Workflow Builder',
    description: 'Drag-and-drop workflow editor with 200+ pre-built integrations. Build complex automations without writing a single line of code.',
    color: 'text-brand-400',
    bg: 'bg-brand-400/10',
    border: 'border-brand-400/20',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Live dashboards with custom KPIs, predictive insights, and automated reports sent straight to your inbox every morning.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'SOC 2 Type II certified. End-to-end encryption, SSO, MFA, and role-based access controls your security team will love.',
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/20',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Real-time presence, shared workspaces, granular permissions, and async commenting. Your whole team, in sync.',
    color: 'text-violet-400',
    bg: 'bg-violet-400/10',
    border: 'border-violet-400/20',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'AI-filtered alerts that surface only what matters. Customize delivery per channel — Slack, email, SMS, or in-app.',
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/20',
  },
  {
    icon: Clock,
    title: 'Scheduled Tasks',
    description: 'Cron-like scheduling with human-readable syntax. Run tasks on any cadence with full execution history and retries.',
    color: 'text-pink-400',
    bg: 'bg-pink-400/10',
    border: 'border-pink-400/20',
  },
  {
    icon: Workflow,
    title: 'API-First Platform',
    description: 'Every feature accessible via our RESTful API and webhooks. Build on top of Nexus with full developer tooling.',
    color: 'text-teal-400',
    bg: 'bg-teal-400/10',
    border: 'border-teal-400/20',
  },
  {
    icon: Globe,
    title: 'Global Edge Network',
    description: '99.99% uptime SLA backed by our 32-region edge network. Your workflows run < 50ms from anywhere on earth.',
    color: 'text-sky-400',
    bg: 'bg-sky-400/10',
    border: 'border-sky-400/20',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Features() {
  return (
    <section id="features" className="py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Everything you need
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Powerful features,{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-cyan-400">
              zero complexity
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From solo founders to enterprise teams — Nexus gives you every tool to move faster without the overhead.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-6 rounded-2xl bg-gray-900/60 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-gray-900/80"
              >
                <div className={`w-11 h-11 rounded-xl ${feature.bg} border ${feature.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className={`w-5 h-5 ${feature.color}`} />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '12k+', label: 'Teams onboarded' },
            { value: '99.99%', label: 'Uptime SLA' },
            { value: '140M+', label: 'Tasks automated' },
            { value: '4.9★', label: 'Average rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-8 px-4 rounded-2xl bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-white/5">
              <p className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}