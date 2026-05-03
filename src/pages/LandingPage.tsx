import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Zap, ArrowRight, Star, CheckCircle, TrendingUp,
  Users, Award, MessageCircle, Play, ChevronDown,
} from 'lucide-react';
import Navbar from '../components/Navbar';

const STATS = [
  { value: '2.4L+', label: 'Students Enrolled' },
  { value: '₹28K', label: 'Avg Monthly Earning' },
  { value: '7 Din', label: 'Mein Skill Ready' },
  { value: '4.9★', label: 'Average Rating' },
];

const FEATURES = [
  { emoji: '🤖', title: 'AI Skill Assessment', desc: 'Bas 5 sawaalon mein pata chalega tumhare liye kaunsi skill best hai.' },
  { emoji: '📅', title: '7-Day Learning Path', desc: 'Daily tasks, short videos, aur real assignments. Roz thoda aage bado.' },
  { emoji: '💰', title: 'Earn While You Learn', desc: 'Day 2 se hi real gigs milne lagte hain. Seekhte seekhte kamai karo.' },
  { emoji: '🤝', title: 'AI Coach – 24/7', desc: 'Hinglish mein baat karo apne AI Coach se. Kabhi bhi, kahin bhi.' },
  { emoji: '🏆', title: 'Skill Passport', desc: 'Tumhara digital certificate jo clients ko dikhao aur kaam pao.' },
  { emoji: '🎯', title: 'Real Gig Marketplace', desc: 'Platform ke andar hi clients milenge. Apply karo, kaam karo, paisa pao.' },
];

const SUCCESS_STORIES = [
  {
    name: 'Priya Sharma',
    city: 'Jaipur, Rajasthan',
    skill: 'Video Editing',
    earned: '₹22,000',
    days: '7',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces',
    quote: 'Pehle ghar pe baith ke sochti thi kya karoon. Ab monthly ₹22K earn kar rahi hoon sirf phone se!',
  },
  {
    name: 'Ramesh Yadav',
    city: 'Patna, Bihar',
    skill: 'Social Media',
    earned: '₹18,500',
    days: '7',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces',
    quote: '10th pass hoon, English nahi aati – phir bhi SkillForBharat se sikhke ab freelance karta hoon!',
  },
  {
    name: 'Sunita Devi',
    city: 'Kanpur, UP',
    skill: 'Canva Design',
    earned: '₹15,000',
    days: '7',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces',
    quote: 'Ghar ke kaam ke saath part-time kaam karne lagi. ₹15K extra income meri zindagi badal di!',
  },
];

const HOW_STEPS = [
  { step: '01', emoji: '🎯', title: 'AI Assessment Do', desc: '5 simple sawaalon ke jawab do. AI tumhare liye best skill choose karegi.' },
  { step: '02', emoji: '📚', title: '7-Day Plan Follow Karo', desc: 'Roz ek task, ek video, ek assignment. Sirf 30-60 min roz.' },
  { step: '03', emoji: '💼', title: 'Gigs Apply Karo', desc: 'Day 2 se hi platform pe real kaam milna shuru ho jaata hai.' },
  { step: '04', emoji: '💰', title: 'Paisa Kamao', desc: 'Pehli kamai 7 din ke andar. Phir scale karo aur zyada kamao!' },
];

const FAQS = [
  { q: 'Kya English zaruri hai?', a: 'Bilkul nahi! SkillForBharat poori tarah Hindi + Hinglish mein hai. Aap apni bhasha mein seekh sakte ho.' },
  { q: 'Kitna paisa lagega?', a: 'Shuru karne ke liye bilkul FREE hai. Premium features baad mein unlock hote hain, lekin basic earning seedha free plan se bhi hoti hai.' },
  { q: 'Kya phone se ho sakta hai?', a: 'Haan! Sab kuch mobile-first design pe hai. Laptop ki zarurat nahi, sirf ek smartphone kaafi hai.' },
  { q: 'Kya guarantee hai ki kaam milega?', a: 'Humara platform real clients se connected hai. 87% students ko pehle 7 din mein pehla kaam mila hai.' },
];

export default function LandingPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-brand-black">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="badge badge-yellow mb-6 mx-auto">
              🚀 India ka #1 Skill-to-Earn Platform
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white leading-tight mb-6"
          >
            Skill Seekho,{' '}
            <span className="gradient-text">7 Din Mein</span>
            <br />
            Kamai Shuru Karo
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            AI tumhari skill assess karega. 7-day plan milega. Real gigs milenge.{' '}
            <span className="text-white font-semibold">Students, freelancers, blue-collar workers</span> – sab ke liye!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => navigate('/signup')}
              className="group flex items-center justify-center gap-3 bg-brand-yellow text-brand-black font-black text-xl px-8 py-5 rounded-2xl hover:bg-brand-yellow-dark transition-all hover:scale-105 active:scale-95 yellow-glow"
            >
              <Zap className="w-5 h-5" fill="currentColor" />
              FREE Mein Shuru Karo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/onboarding')}
              className="flex items-center justify-center gap-2 border border-brand-gray-light text-white font-bold text-lg px-8 py-5 rounded-2xl hover:border-brand-yellow/50 hover:text-brand-yellow transition-all"
            >
              <Play className="w-5 h-5" />
              Skill Assessment Try Karo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-6 mt-8 flex-wrap"
          >
            {['No credit card', '100% Hindi/English', 'Mobile friendly', 'Instant start'].map(t => (
              <div key={t} className="flex items-center gap-1.5 text-gray-400 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                {t}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-brand-gray-dark border-y border-brand-gray-mid">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-black gradient-text mb-1">{value}</div>
              <div className="text-gray-400 text-sm">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="badge badge-blue mb-4 mx-auto">Platform Features</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Yeh Platform Sirf Tumhare Liye Hai
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Bharat ke har kone ke logon ke liye – simple, fast, aur result-oriented
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(({ emoji, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="card-dark p-6 hover:border-brand-yellow/30 transition-all cursor-default"
              >
                <div className="text-4xl mb-4">{emoji}</div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-brand-gray-dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="badge badge-yellow mb-4 mx-auto">Step-by-Step</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Kaise Kaam Karta Hai?
            </h2>
            <p className="text-gray-400">4 simple steps – aur tum earning start kar doge</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_STEPS.map(({ step, emoji, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{emoji}</div>
                <div className="text-brand-yellow font-black text-xs tracking-widest uppercase mb-2">Step {step}</div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="badge badge-green mb-4 mx-auto">Real Stories</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Real Log, <span className="gradient-text">Real Kamai</span>
            </h2>
            <p className="text-gray-400">Inhi logon ki tarah tum bhi kar sakte ho</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SUCCESS_STORIES.map(({ name, city, skill, earned, days, avatar, quote }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="card-dark p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover border-2 border-brand-yellow/30" loading="lazy" />
                  <div>
                    <div className="font-bold text-white text-sm">{name}</div>
                    <div className="text-xs text-gray-500">{city}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm italic mb-4 leading-relaxed">"{quote}"</p>
                <div className="flex items-center justify-between pt-3 border-t border-brand-gray-mid">
                  <div>
                    <div className="text-brand-yellow font-black text-lg">{earned}/month</div>
                    <div className="text-xs text-gray-500">{skill} • {days} din mein</div>
                  </div>
                  <div className="flex text-brand-yellow">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3" fill="currentColor" />)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Coach Preview */}
      <section className="py-20 px-4 bg-brand-gray-dark">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge badge-yellow mb-4">AI-Powered Coach</div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                24/7 AI Coach –{' '}
                <span className="gradient-text">Hinglish Mein!</span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Koi sawaal ho toh pucho. Roz tasks chahiye toh bolo. Motivate karna ho toh message karo. AI har time ready hai tumhare liye!
              </p>
              <div className="space-y-3 mb-6">
                {['"Fast kaise seekhun?"', '"Aaj ke tasks kya hain?"', '"Earning kab start hogi?"'].map((q, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                    {q}
                  </div>
                ))}
              </div>
              <button onClick={() => navigate('/chat')} className="flex items-center gap-2 bg-brand-yellow text-brand-black font-bold px-6 py-3 rounded-xl hover:bg-brand-yellow-dark transition-all">
                <MessageCircle className="w-4 h-4" />
                AI Coach se Baat Karo
              </button>
            </div>
            {/* Chat preview mockup */}
            <div className="card-dark p-5 space-y-3">
              <div className="flex items-center gap-2 border-b border-brand-gray-light pb-3 mb-4">
                <div className="w-9 h-9 bg-brand-yellow rounded-full flex items-center justify-center text-brand-black font-black text-sm">AI</div>
                <div>
                  <div className="text-white font-bold text-sm">SkillBot</div>
                  <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-green-400 rounded-full" /><span className="text-xs text-gray-400">Always Online</span></div>
                </div>
              </div>
              <div className="chat-bubble-ai p-3 text-sm max-w-[85%]">Namaste! Aaj kya seekhna hai? 😊</div>
              <div className="chat-bubble-user p-3 text-sm max-w-[80%] ml-auto">Fast kaise seekhun?</div>
              <div className="chat-bubble-ai p-3 text-sm max-w-[90%]">
                🚀 3 simple tips:<br />
                1️⃣ Roz 30 min practice<br />
                2️⃣ Seedha apply karo<br />
                3️⃣ Ek skill pe focus raho!
              </div>
              <div className="flex items-center gap-1.5 mt-2">
                <div className="w-2 h-2 bg-gray-500 rounded-full typing-dot" />
                <div className="w-2 h-2 bg-gray-500 rounded-full typing-dot" />
                <div className="w-2 h-2 bg-gray-500 rounded-full typing-dot" />
                <span className="text-xs text-gray-500 ml-1">SkillBot typing...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-3">Aksar Poochhe Jaane Wale Sawaal</h2>
            <p className="text-gray-400">Koi doubt? Yahan milega jawab!</p>
          </div>
          <div className="space-y-3">
            {FAQS.map(({ q, a }, i) => (
              <div key={i} className="card-dark overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-white font-semibold text-sm">{q}</span>
                  <ChevronDown className={`w-4 h-4 text-brand-yellow flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-brand-gray-mid pt-3">{a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-brand-gray-dark">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-5xl mb-5">🚀</div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Aaj Hi Shuru Karo.<br />
            <span className="gradient-text">7 Din Baad Dekho Magic!</span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">Bilkul FREE. Koi credit card nahi. Abhi 2 min mein account banao.</p>
          <button
            onClick={() => navigate('/signup')}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-yellow text-brand-black font-black text-xl px-10 py-5 rounded-2xl hover:bg-brand-yellow-dark transition-all hover:scale-105 active:scale-95 yellow-glow mx-auto"
          >
            <Zap className="w-6 h-6" fill="currentColor" />
            FREE Account Banao – Abhi!
            <ArrowRight className="w-6 h-6" />
          </button>
          <p className="text-gray-500 text-sm mt-4">✅ No spam &nbsp;•&nbsp; ✅ Hindi + English &nbsp;•&nbsp; ✅ Mobile-friendly</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-gray-mid py-8 px-4">
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
          <div className="flex items-center gap-4 text-gray-500 text-xs">
            <Users className="w-4 h-4" />
            <span>2,40,000+ learners</span>
            <Award className="w-4 h-4 text-brand-yellow" />
            <span>© 2024 SkillForBharat</span>
          </div>
        </div>
      </footer>
    </div>
  );
}