import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, Star, Users, TrendingUp, CheckCircle, Play, Trophy, MessageCircle, IndianRupee, Flame } from 'lucide-react';

const SKILLS_TICKER = ['Video Editing', 'Graphic Design', 'Freelance Writing', 'Social Media', 'Data Entry', 'Electrical Work', 'Plumbing', 'Content Creation'];

const SUCCESS_STORIES = [
  { name: 'Ravi Sharma', city: 'Varanasi, UP', skill: 'Video Editing', earned: '₹22,000', days: 7, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces', quote: 'Sach mein 7 din mein pehla payment aaya! Yaqeen nahi tha.' },
  { name: 'Priya Devi', city: 'Patna, Bihar', skill: 'Freelance Writing', earned: '₹15,500', days: 6, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces', quote: 'Ghar baithe paisa kamana ab sapna nahi, reality hai!' },
  { name: 'Suresh Yadav', city: 'Nagpur, MH', skill: 'Social Media', earned: '₹18,200', days: 7, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces', quote: 'Platform ne sab kuch step-by-step sikhaya. Ekdum aasaan!' },
];

const FEATURES = [
  { emoji: '🤖', title: 'AI Skill Assessment', desc: 'Tumhari language, interest, aur goal ke basis pe best skill recommend karta hai' },
  { emoji: '📅', title: '7-Day Learning Path', desc: 'Roz ek task, ek video – sirf 30 min mein seekho aur immediately apply karo' },
  { emoji: '💰', title: 'Earn While Learning', desc: 'Learning ke saath hi real gigs milenge – Day 2 se earning start!' },
  { emoji: '🏆', title: 'Skill Passport', desc: 'Tumhari skills, earnings, aur achievements ek jagah – tumhara digital ID card' },
];

const STATS = [
  { value: '2.4L+', label: 'Users Learning', icon: Users },
  { value: '₹45Cr+', label: 'Total Earned', icon: IndianRupee },
  { value: '7 Days', label: 'Avg Time to First Earn', icon: Flame },
  { value: '4.9★', label: 'User Rating', icon: Star },
];

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brand-black overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black/95 backdrop-blur-xl border-b border-brand-gray-mid px-4 h-16 flex items-center justify-between max-w-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-brand-black" fill="currentColor" />
          </div>
          <span className="font-black text-lg text-white">Skill<span className="text-brand-yellow">ForBharat</span></span>
        </div>
        <button
          onClick={() => navigate('/onboarding')}
          className="bg-brand-yellow text-brand-black font-bold px-4 py-2 rounded-xl text-sm hover:bg-brand-yellow-dark transition-all"
        >
          Free Mein Shuru Karo
        </button>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Flame className="w-4 h-4" />
            India ka #1 Skill-to-Earn Platform
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white leading-tight mb-4"
          >
            7 Din Mein Seekho,<br />
            <span className="gradient-text">Paisa Kamana Shuru Karo</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            AI se personalized skill path milega. Roz 30 min do, real gigs lo, aur ₹15,000–₹40,000/month kamao. Koi degree nahi chahiye. 🚀
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <button
              onClick={() => navigate('/onboarding')}
              className="w-full sm:w-auto bg-brand-yellow text-brand-black font-black text-lg px-8 py-4 rounded-2xl hover:bg-brand-yellow-dark transition-all hover:scale-105 active:scale-95 yellow-glow flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" fill="currentColor" />
              Aaj Hi Shuru Karo – FREE
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full sm:w-auto border border-brand-gray-light text-white font-bold text-lg px-8 py-4 rounded-2xl hover:bg-brand-gray-dark transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              Demo Dekho
            </button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-3 text-sm text-gray-400"
          >
            <div className="flex -space-x-2">
              {['photo-1507003211169-0a1dd7228f2d', 'photo-1494790108377-be9c29b29330', 'photo-1500648767791-00dcc994a43e', 'photo-1472099645785-5658abf4ff4e'].map((id, i) => (
                <img key={i} src={`https://images.unsplash.com/${id}?w=40&h=40&fit=crop&crop=faces`} alt="User" className="w-8 h-8 rounded-full border-2 border-brand-black object-cover" loading="lazy" />
              ))}
            </div>
            <span>2,40,000+ log seekh rahe hain abhi</span>
          </motion.div>
        </div>

        {/* Skill ticker */}
        <div className="mt-10 overflow-hidden">
          <div className="flex gap-3 animate-pulse-slow flex-wrap justify-center">
            {SKILLS_TICKER.map((skill, i) => (
              <span key={i} className="badge badge-yellow whitespace-nowrap">
                ✓ {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-brand-gray-dark">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map(({ value, label, icon: Icon }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-2">
                <Icon className="w-6 h-6 text-brand-yellow" />
              </div>
              <div className="text-2xl md:text-3xl font-black text-white">{value}</div>
              <div className="text-sm text-gray-400">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Kyun hai yeh <span className="gradient-text">alag?</span>
            </h2>
            <p className="text-gray-400">Sirf seekho mat – seedha kamao</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FEATURES.map(({ emoji, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card-dark p-6 hover:border-brand-yellow/30 transition-all group"
              >
                <div className="text-3xl mb-3">{emoji}</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-yellow transition-colors">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 bg-brand-gray-dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Kaise kaam karta hai? <span className="gradient-text">3 Steps</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'AI Assessment', desc: '5 simple sawaalon ke jawab do – AI tumhari best skill dhundh deta hai', emoji: '🤖' },
              { step: '02', title: '7-Day Path Start', desc: 'Roz ek task, ek video. Practical seekho, immediately apply karo', emoji: '📚' },
              { step: '03', title: 'Earn Karo!', desc: 'Gig marketplace se real projects lo aur paisa kamao', emoji: '💸' },
            ].map(({ step, title, desc, emoji }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 text-gray-600 text-2xl z-10">→</div>
                )}
                <div className="w-16 h-16 bg-brand-yellow/10 border-2 border-brand-yellow/30 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                  {emoji}
                </div>
                <div className="text-brand-yellow font-black text-sm mb-2">STEP {step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Real Log, <span className="gradient-text">Real Kamai</span>
            </h2>
            <p className="text-gray-400">Inhi logon ki tarah tum bhi kar sakte ho</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SUCCESS_STORIES.map(({ name, city, skill, earned, days, avatar, quote }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card-dark p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover border-2 border-brand-yellow/30" loading="lazy" />
                  <div>
                    <div className="font-bold text-white text-sm">{name}</div>
                    <div className="text-xs text-gray-500">{city}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm italic mb-4">"{quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-brand-yellow font-black text-lg">{earned}/month</div>
                    <div className="text-xs text-gray-500">{skill} • {days} din mein</div>
                  </div>
                  <div className="flex text-brand-yellow">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3" fill="currentColor" />)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Coach Preview */}
      <section className="py-16 px-4 bg-brand-gray-dark">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="badge badge-yellow mb-4">AI-Powered</div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                24/7 AI Coach – <span className="gradient-text">Hinglish mein!</span>
              </h2>
              <p className="text-gray-400 mb-6">Koi sawaal ho toh pucho. Roz tasks chahiye toh bolo. Motivate karna ho toh message karo. AI har time ready hai tumhare liye! 🙌</p>
              <div className="space-y-3">
                {['Fast kaise seekhun?', 'Aaj ke tasks kya hain?', 'Earning kab start hogi?'].map((q, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                    "{q}"
                  </div>
                ))}
              </div>
              <button onClick={() => navigate('/chat')} className="mt-6 bg-brand-yellow text-brand-black font-bold px-6 py-3 rounded-xl hover:bg-brand-yellow-dark transition-all flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                AI Coach se Baat Karo
              </button>
            </div>
            {/* Chat preview */}
            <div className="card-dark p-4 space-y-3">
              <div className="flex items-center gap-2 border-b border-brand-gray-mid pb-3 mb-3">
                <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center text-brand-black font-black text-sm">AI</div>
                <div>
                  <div className="text-white font-bold text-sm">SkillBot</div>
                  <div className="flex items-center gap-1"><div className="w-2 h-2 bg-green-400 rounded-full" /><span className="text-xs text-gray-400">Always Online</span></div>
                </div>
              </div>
              <div className="chat-bubble-ai p-3 text-sm max-w-[80%]">Namaste! Aaj kya seekhna hai? 😊</div>
              <div className="chat-bubble-user p-3 text-sm max-w-[80%] ml-auto">Fast kaise seekhun?</div>
              <div className="chat-bubble-ai p-3 text-sm max-w-[85%]">
                🚀 3 simple tips:<br />
                1. Roz 30 min practice<br />
                2. Seedha apply karo<br />
                3. Ek skill pe focus raho!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-5xl mb-4">🚀</div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Aaj Hi Shuru Karo.<br />
            <span className="gradient-text">7 Din Baad Dekho Magic!</span>
          </h2>
          <p className="text-gray-400 mb-8">Bilkul FREE. Koi credit card nahi. Abhi 5 min mein assessment complete karo.</p>
          <button
            onClick={() => navigate('/onboarding')}
            className="w-full sm:w-auto bg-brand-yellow text-brand-black font-black text-xl px-10 py-5 rounded-2xl hover:bg-brand-yellow-dark transition-all hover:scale-105 active:scale-95 yellow-glow flex items-center justify-center gap-3 mx-auto"
          >
            <Zap className="w-6 h-6" fill="currentColor" />
            FREE Mein Skill Assessment Karo
            <ArrowRight className="w-6 h-6" />
          </button>
          <p className="text-gray-500 text-sm mt-4">✅ No credit card &nbsp;•&nbsp; ✅ Hindi + English &nbsp;•&nbsp; ✅ Mobile-friendly</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-gray-dark border-t border-brand-gray-mid py-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-brand-yellow rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-brand-black" fill="currentColor" />
            </div>
            <span className="font-black text-white">Skill<span className="text-brand-yellow">ForBharat</span></span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <TrendingUp className="w-4 h-4 text-brand-yellow" />
            Made with ❤️ for Bharat
          </div>
          <div className="text-gray-500 text-xs">© 2024 SkillForBharat. Sab rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}