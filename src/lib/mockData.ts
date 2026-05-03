export interface Skill {
  id: string;
  title: string;
  category: string;
  avgEarning: number;
  duration: string;
  level: string;
  emoji: string;
  enrolled: number;
  rating: number;
}

export interface DayTask {
  day: number;
  title: string;
  description: string;
  videoTitle: string;
  assignment: string;
  earning: number;
  completed: boolean;
  xp: number;
}

export interface GigTask {
  id: string;
  title: string;
  category: string;
  earning: number;
  duration: string;
  difficulty: string;
  emoji: string;
  postedBy: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  emoji: string;
  earned: boolean;
  earnedDate?: string;
}

export const TOP_SKILLS: Skill[] = [
  { id: 'video-editing', title: 'Video Editing', category: 'Digital', avgEarning: 25000, duration: '7 days', level: 'Beginner', emoji: '🎬', enrolled: 12847, rating: 4.8 },
  { id: 'freelance-writing', title: 'Freelance Writing', category: 'Content', avgEarning: 18000, duration: '7 days', level: 'Beginner', emoji: '✍️', enrolled: 9234, rating: 4.7 },
  { id: 'social-media', title: 'Social Media Management', category: 'Digital Marketing', avgEarning: 22000, duration: '7 days', level: 'Beginner', emoji: '📱', enrolled: 15621, rating: 4.9 },
  { id: 'data-entry', title: 'Data Entry & Excel', category: 'Office', avgEarning: 12000, duration: '7 days', level: 'Beginner', emoji: '📊', enrolled: 8432, rating: 4.6 },
  { id: 'graphic-design', title: 'Graphic Design (Canva)', category: 'Design', avgEarning: 28000, duration: '7 days', level: 'Beginner', emoji: '🎨', enrolled: 11203, rating: 4.8 },
  { id: 'electrical-work', title: 'Home Electrical Services', category: 'Trade Skill', avgEarning: 35000, duration: '7 days', level: 'Intermediate', emoji: '⚡', enrolled: 6781, rating: 4.7 },
];

export const SEVEN_DAY_PLAN: DayTask[] = [
  { day: 1, title: 'Basics Samjho – Foundation Day', description: 'Aaj hum sikhenge ki video editing kya hoti hai aur basic tools kaise use kare.', videoTitle: 'CapCut se shuru karo – 15 min crash course', assignment: 'Apne phone ka koi ek video edit karo aur WhatsApp pe share karo', earning: 0, completed: true, xp: 100 },
  { day: 2, title: 'Pehla Kaam – First Task Day', description: 'Aaj tumhara pehla real assignment hai. Ek simple 30-second reel banao.', videoTitle: 'Transitions aur music kaise add kare', assignment: 'Instagram reel banao kisi bhi topic pe – 30 seconds', earning: 150, completed: true, xp: 200 },
  { day: 3, title: 'Speed Up – Efficiency Training', description: 'Aaj hum shortcut keys aur fast editing techniques seekhenge.', videoTitle: 'Pro editor ki tarah kaam karo – shortcuts guide', assignment: 'Ek product review video banao – 1 minute', earning: 250, completed: true, xp: 300 },
  { day: 4, title: 'Client Work Simulation', description: 'Real client ki tarah ek brief diya gaya hai. Uss pe kaam karo.', videoTitle: 'Client brief kaise samjhe – real example', assignment: 'Diye gaye brief ke according ek video complete karo', earning: 400, completed: false, xp: 400 },
  { day: 5, title: 'Portfolio Banao', description: 'Aaj tumhara portfolio banane ka din hai. Yahi tumhe kaam dilaega.', videoTitle: 'Portfolio kaise banaye jisse client hire kare', assignment: 'Apne 3 best videos ka portfolio pack banao', earning: 0, completed: false, xp: 350 },
  { day: 6, title: 'Pehla Gig Apply Karo', description: 'Aaj pehli baar real platform pe apply karenge. Darr mat!', videoTitle: 'Fiverr/Internshala profile kaise setup kare', assignment: 'Ek platform pe profile banao aur pehla proposal bhejo', earning: 500, completed: false, xp: 500 },
  { day: 7, title: 'Celebration + Next Steps', description: 'Badhai ho! Tum ab ek earning-ready video editor ho.', videoTitle: 'Scale karo – 10k se 50k per month ka roadmap', assignment: 'Apna success story share karo community mein', earning: 750, completed: false, xp: 600 },
];

export const GIG_TASKS: GigTask[] = [
  { id: 'g1', title: 'Instagram Reels ke liye 3 short videos edit karo', category: 'Video Editing', earning: 800, duration: '2 ghante', difficulty: 'Easy', emoji: '🎬', postedBy: 'Priya Fashion Store' },
  { id: 'g2', title: 'Restaurant menu ka Canva design banao', category: 'Design', earning: 500, duration: '1 ghanta', difficulty: 'Easy', emoji: '🎨', postedBy: 'Raju Dhaba, Jaipur' },
  { id: 'g3', title: 'Excel mein 500 entries fill karo', category: 'Data Entry', earning: 350, duration: '3 ghante', difficulty: 'Easy', emoji: '📊', postedBy: 'TechSoft Solutions' },
  { id: 'g4', title: 'WhatsApp broadcast ke liye 10 messages likhni hain', category: 'Writing', earning: 300, duration: '1 ghanta', difficulty: 'Easy', emoji: '✍️', postedBy: 'Local Kirana Chain' },
  { id: 'g5', title: 'Facebook page ke liye 7 din ke posts banao', category: 'Social Media', earning: 700, duration: '2 din', difficulty: 'Medium', emoji: '📱', postedBy: 'Sneha Boutique' },
  { id: 'g6', title: 'Ghar ki wiring check karni hai (on-site)', category: 'Electrical', earning: 1200, duration: '4 ghante', difficulty: 'Medium', emoji: '⚡', postedBy: 'Sharma Niwas, Lucknow' },
];

export const AI_RESPONSES: Record<string, string> = {
  default: '🙂 Bilkul bhai! Batao kya jaanna chahte ho? Main yahan hoon tumhari help ke liye!',
  fast: '🚀 Fast seekhne ke liye yeh 3 tips yaad raho:\n\n1️⃣ Roz 30 min practice karo\n2️⃣ Ek skill pe focus karo\n3️⃣ Seekhke turant apply karo\n\nBas yahi formula hai bhai! 💪',
  task: '📋 Aaj ke liye 3 tasks hain tumhare:\n\n✅ Task 1: 1 video edit karo (30 min)\n✅ Task 2: Portfolio drive mein save karo\n✅ Task 3: Ek platform pe profile update karo\n\nYeh kar lo, aaj ₹250 earn ho sakta hai! 💰',
  earn: '💰 Abhi tumhare paas 3 earning options hain:\n\n🔥 Gig 1: Instagram reels – ₹800\n🔥 Gig 2: Canva design – ₹500\n🔥 Gig 3: Data entry – ₹350\n\nKonsa karna chahte ho? 👇',
  motivation: '🔥 Bhai, tumne yeh start kiya hai toh kuch sochke kiya hai!\n\nIndia mein lakho log freelancing se ₹20,000–₹50,000 per month kama rahe hain.\n\nTum bhi kar sakte ho. Bas 7 din consistent raho! 💯',
  help: '🙌 Main tumhara AI Coach hoon!\n\nMujhse puchh sakte ho:\n• "Fast kaise seekhun?"\n• "Aaj ke tasks kya hain?"\n• "Earn kaise karu?"\n• "Mujhe motivate karo!"\n\nBolo, main ready hoon! 💬',
  skill: '🎯 Tumhare liye best 3 skills:\n\n1️⃣ Video Editing – ₹15k–₹40k/month\n2️⃣ Social Media – ₹12k–₹30k/month\n3️⃣ Freelance Writing – ₹8k–₹25k/month\n\nKonsi choose karni hai? 🤔',
};

export const BADGES: Badge[] = [
  { id: 'first-step', title: 'Pehla Qadam', description: 'Pehla task complete kiya', emoji: '👣', earned: true, earnedDate: '2 din pehle' },
  { id: 'streak-3', title: '3-Day Streak', description: '3 din lagatar seekha', emoji: '🔥', earned: true, earnedDate: 'Kal' },
  { id: 'first-earn', title: 'Pehli Kamai', description: 'Pehli baar paisa kamaya', emoji: '💰', earned: true, earnedDate: 'Aaj' },
  { id: 'speed-learner', title: 'Speed Learner', description: 'Day 1–3 ek din mein complete kiye', emoji: '⚡', earned: false },
  { id: 'gig-master', title: 'Gig Master', description: '5 gigs successfully complete kiye', emoji: '🏆', earned: false },
  { id: 'skill-pro', title: 'Skill Pro', description: 'Ek skill mein expert bane', emoji: '🎯', earned: false },
];

export const USER_STATS = {
  name: 'Rahul Kumar',
  city: 'Lucknow, UP',
  totalEarned: 1850,
  currentStreak: 3,
  tasksCompleted: 8,
  skillsLearned: 2,
  rating: 4.6,
  level: 'Rising Star',
  xp: 1250,
  nextLevelXp: 2000,
  referrals: 2,
  referralEarnings: 400,
  joinedDate: '5 din pehle',
};