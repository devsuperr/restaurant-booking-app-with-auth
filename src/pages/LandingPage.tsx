import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Zap, ArrowRight, Star, CheckCircle, Users, TrendingUp,
  Award, MessageCircle, ChevronDown, Play, IndianRupee,
} from 'lucide-react';

const STATS = [
  { value: '2,40,000+', label: 'Learners', emoji: '👥' },
  { value: '₹18,000', label: 'Avg Monthly Earning', emoji: '💰' },
  { value: '7 Din', label: 'Mein Earning Shuru', emoji: '🚀' },
  { value: '4.9★', label: 'User Rating', emoji: '⭐' },
];

const SKILLS = [
  { emoji: '🎬', title: 'Video Editing', earning: '₹25,000/month', tag: 'Most Popular' },
  { emoji: '📱', title: 'Social Media', earning: '₹22,000/month', tag: 'Fast Growth' },
  { emoji: '🎨', title: 'Graphic Design', earning: '₹28,000/month', tag: 'High Demand' },
  { emoji: '✍️', title: 'Freelance Writing', earning: '₹18,000/month', tag: 'Work from Home' },
  { emoji: '⚡', title: 'Electrical Work', earning: '₹35,000/month', tag: 'Trade Skill' },
  { emoji: '📊', title: 'Data Entry', earning: '₹12,000/month', tag: 'Beginner Friendly' },
];

const HOW_IT_WORKS = [
  { step: '01', emoji: '🤖', title: 'AI Assessment Karo', desc: 'Simple sawaalon se AI tumhara skill level detect karta hai aur best skill suggest karta hai.' },
  { step: '02', emoji: '📅', title: '7-Din Plan Follow Karo', desc: 'Roz ek task, ek video, ek assignment. Simple aur clear path sirf tumhare liye.' },
  { step: '03', emoji: '💰', title: 'Earn Karna Shuru Karo', desc: 'Day 2 se hi micro gigs milna shuru! Seekhte seekhte earning bhi hoti hai.' },
];

const SUCCESS_STORIES = [
  {
    name: 'Priya Sharma',
    city: 'Jaipur, Rajasthan',
    skill: 'Video Editing',
    earned: '₹22,000',
    days: '7',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces',
    quote: 'Phone se editing seekhi, ab har mahine 22k kama rahi hoon. SkillForBharat ne life badal di!',
  },
  {
    name: 'Ramesh Yadav',
    city: 'Patna, Bihar',
    skill: 'Data Entry',
    earned: '₹14,000',
    days: '7',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces',
    quote: '10th pass hoon, lekin aaj ghar se kaam karke family support kar raha hoon. Thank you!',
  },
  {
    name: 'Sunita Devi',
    city: 'Lucknow, UP',
    skill: 'Social Media',
    earned: '₹19,500',
    days: '7',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces',
    quote: 'Ghar baithe social media manage karti hoon. Bacche bhi khush hain, main bhi earning kar rahi hoon!',
  },
];

const FAQS = [
  { q: 'Kya yeh platform bilkul free hai?', a: 'Haan! Basic skills aur 7-day plans bilkul free hain. Koi credit card ya payment nahi chahiye.' },
  { q: 'Kya mujhe computer chahiye seekhne ke liye?', a: 'Nahi! Sirf smartphone se kaam chalta hai. 90% skills phone se hi seekhi ja sakti hain.' },
  { q: 'Main Hindi mein seekh sakta hoon kya?', a: 'Bilkul! Saara content Hindi + Hinglish mein available hai. English ki zaroorat nahi.' },
  { q: 'Kya 7 din mein sach mein earning hogi?', a: 'Haan! Day 2 se micro-tasks milna shuru ho jaate hain. ₹300–₹1,200 per task possible hai.' },
  { q: 'Kya yeh blue-collar workers ke liye bhi hai?', a: 'Bilkul! Electricians, plumbers, cleaners – sabke liye trade skill paths available hain.' },
];

export default function LandingPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-brand-black">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-brand-black/90 backdrop-blur-md border-b border-brand-gray-mid">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-brand-black" fill="currentColor" />
            </div>
            <span className="font-black text-white text-lg">Skill<span className="text-brand-yellow">ForBharat</span></span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => navigate('/login')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              Login
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="bg-brand-yellow text-brand-black font-bold text-sm px-4 py-2 rounded-xl hover:bg-brand-yellow-dark transition-all"
            >
              FREE Mein Join Karo
            </button>
          </div>
          <button
            onClick={() => navigate('/signup')}
            className="md:hidden bg-brand-yellow text-brand-black font-bold text-xs px-3 py-2 rounded-lg"
          >
            Join FREE
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-16 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-brand-yellow/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="badge-pill badge-yellow mb-6 mx-auto">
              🇮🇳 &nbsp;Bharat Ka #1 Skill-to-Earn Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              7 Din Mein Skill Seekho,
              <br />
              <span className="gradient-text">Paisa Kamao!</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              AI-powered learning + real gigs. Students, freelancers, aur blue-collar workers ke liye.
              Hindi mein seekho, ghar baithe kamao.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={() => navigate('/signup')}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-yellow text-brand-black font-black text-lg px-8 py-4 rounded-2xl hover:bg-brand-yellow-dark transition-all hover:scale-105 active:scale-95 yellow-glow"
              >
                <Zap className="w-5 h-5" fill="currentColor" />
                FREE Mein Shuru Karo
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate('/chat')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 border border-brand-gray-light text-gray-300 hover:text-white hover:border-brand-yellow/50 font-medium px-8 py-4 rounded-2xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                AI Coach se Baat Karo
              </button>
            </div>
            <p className="text-gray-500 text-sm">✅ No credit card &nbsp;•&nbsp; ✅ Hindi mein &nbsp;•&nbsp; ✅ Mobile-friendly</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-brand-gray-dark border-y border-brand-gray-mid">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map(({ value, label, emoji }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-2xl mb-1">{emoji}</div>
              <div className="text-2xl md:text-3xl font-black text-brand-yellow">{value}</div>
              <div className="text-gray-400 text-sm mt-1">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="badge-pill badge-yellow mb-4 mx-auto">Top Skills</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Yeh Skills Sikho, <span className="gradient-text">Yeh Paisa Kamao</span>
            </h2>
            <p className="text-gray-400">Sabse zyada demand wali skills – beginner-friendly</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {SKILLS.map(({ emoji, title, earning, tag }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                onClick={() => navigate('/signup')}
                className="card-dark p-5 cursor-pointer hover:border-brand-yellow/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl">{emoji}</div>
                  <span className="badge-pill badge-green text-xs">{tag}</span>
                </div>
                <h3 className="font-bold text-white text-base mb-1">{title}</h3>
                <div className="flex items-center gap-1 text-brand-yellow font-black text-sm">
                  <IndianRupee className="w-3.5 h-3.5" />
                  <span>{earning.replace('₹', '')}</span>
                </div>
                <div className="flex items-center gap-1 mt-3 text-xs text-gray-500 group-hover:text-brand-yellow transition-colors">
                  <Play className="w-3 h-3" />
                  7-day path available
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-brand-gray-dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Sirf <span className="gradient-text">3 Simple Steps</span>
            </h2>
            <p className="text-gray-400">Koi confusion nahi. Bas yeh karo aur result dekho!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map(({ step, emoji, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card-dark p-6 text-center"
              >
                <div className="text-brand-yellow/30 font-black text-5xl mb-2 leading-none">{step}</div>
                <div className="text-4xl mb-3">{emoji}</div>
                <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Real Log, <span className="gradient-text">Real Kamai</span>
            </h2>
            <p className="text-gray-400">Inhi logon ki tarah tum bhi kar sakte ho</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
                  <img
                    src={avatar}
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-yellow/30"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-bold text-white text-sm">{name}</div>
                    <div className="text-xs text-gray-500">{city}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm italic mb-4">"{quote}"</p>
                <div className="flex items-center justify-between pt-3 border-t border-brand-gray-mid">
                  <div>
                    <div className="text-brand-yellow font-black">{earned}/month</div>
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

      {/* AI Coach preview */}
      <section className="py-20 px-4 bg-brand-gray-dark">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-pill badge-yellow mb-4">AI-Powered Coach</div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                24/7 AI Coach –{' '}
                <span className="gradient-text">Hinglish Mein!</span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Koi bhi sawaal, koi bhi time. AI Coach hamesha ready hai tumhare liye – motivation, tasks, guidance sab kuch.
              </p>
              <div className="space-y-3 mb-6">
                {['"Fast kaise seekhun?"', '"Aaj ke tasks kya hain?"', '"Earning kab start hogi?"'].map((q, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                    {q}
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('/chat')}
                className="flex items-center gap-2 bg-brand-yellow text-brand-black font-bold px-6 py-3 rounded-xl hover:bg-brand-yellow-dark transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                AI Coach se Baat Karo
              </button>
            </div>
            <div className="card-dark p-5 space-y-3">
              <div className="flex items-center gap-2 border-b border-brand-gray-light pb-3 mb-2">
                <div className="w-9 h-9 bg-brand-yellow rounded-full flex items-center justify-center text-brand-black font-black text-sm">AI</div>
                <div>
                  <div className="text-white font-bold text-sm">SkillBot</div>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    <span className="text-xs text-gray-400">Always Online</span>
                  </div>
                </div>
              </div>
              <div className="chat-bubble-ai p-3 text-sm max-w-[85%]">Namaste! Aaj kya seekhna hai? 😊</div>
              <div className="chat-bubble-user p-3 text-sm max-w-[75%] ml-auto">Fast kaise seekhun?</div>
              <div className="chat-bubble-ai p-3 text-sm max-w-[90%]">
                🚀 3 simple tips:<br />
                1️⃣ Roz 30 min practice<br />
                2️⃣ Seedha apply karo<br />
                3️⃣ Ek skill pe focus!
              </div>
              <div className="flex items-center gap-1.5 pl-1">
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
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-2">Sawaal Jawab</h2>
            <p className="text-gray-400">Koi doubt? Yahan milega jawab!</p>
          </div>
          <div className="space-y-3">
            {FAQS.map(({ q, a }, i) => (
              <div key={i} className="card-dark overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left gap-3"
                >
                  <span className="text-white font-semibold text-sm">{q}</span>
                  <ChevronDown className={`w-4 h-4 text-brand-yellow flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-brand-gray-mid pt-3">
                    {a}
                  </div>
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
          <div className="flex items-center gap-3 text-gray-500 text-xs">
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