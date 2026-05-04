export interface PracticeSession {
  id: string;
  date: string;
  instrument: string;
  skillFocus: string;
  duration: number; // minutes
  mood: 1 | 2 | 3 | 4 | 5;
  notes: string;
}

export interface GroupMember {
  id: string;
  name: string;
  avatar: string;
  instrument: string;
  streak: number;
  totalHours: number;
  thisWeek: number;
  badges: string[];
}

export interface Milestone {
  id: string;
  memberId: string;
  memberName: string;
  memberAvatar: string;
  title: string;
  description: string;
  badge: string;
  date: string;
  reactions: { emoji: string; count: number }[];
}

export const INSTRUMENTS = [
  'Piano', 'Guitar', 'Violin', 'Cello', 'Drums', 'Bass',
  'Trumpet', 'Saxophone', 'Flute', 'Voice', 'Ukulele', 'Banjo',
];

export const SKILL_FOCUSES = [
  'Technique', 'Scales & Arpeggios', 'Repertoire', 'Sight-Reading',
  'Ear Training', 'Improvisation', 'Music Theory', 'Rhythm & Timing',
  'Expression & Dynamics', 'Memorization',
];

export const mockSessions: PracticeSession[] = [
  { id: '1',  date: '2025-06-15', instrument: 'Piano',  skillFocus: 'Scales & Arpeggios', duration: 45,  mood: 4, notes: 'Worked on B-flat major scales, hands together at 100bpm.' },
  { id: '2',  date: '2025-06-14', instrument: 'Piano',  skillFocus: 'Repertoire',          duration: 60,  mood: 5, notes: 'Chopin Nocturne Op.9 No.2 — finally nailed the ornamentation in bar 6.' },
  { id: '3',  date: '2025-06-13', instrument: 'Guitar', skillFocus: 'Technique',           duration: 30,  mood: 3, notes: 'Fingerpicking patterns, C CAGED position.' },
  { id: '4',  date: '2025-06-12', instrument: 'Piano',  skillFocus: 'Sight-Reading',       duration: 25,  mood: 4, notes: 'ABRSM Grade 7 pieces. Getting faster.' },
  { id: '5',  date: '2025-06-11', instrument: 'Guitar', skillFocus: 'Improvisation',       duration: 40,  mood: 5, notes: 'Pentatonic over blues backing track. Great flow today.' },
  { id: '6',  date: '2025-06-10', instrument: 'Piano',  skillFocus: 'Technique',           duration: 50,  mood: 3, notes: 'Hanon exercises 1–10, ugh.' },
  { id: '7',  date: '2025-06-09', instrument: 'Piano',  skillFocus: 'Repertoire',          duration: 75,  mood: 5, notes: 'Full run-through of Beethoven Sonata. Best session in weeks.' },
  { id: '8',  date: '2025-06-08', instrument: 'Guitar', skillFocus: 'Ear Training',        duration: 20,  mood: 4, notes: 'Interval recognition, 80% accuracy.' },
  { id: '9',  date: '2025-06-07', instrument: 'Piano',  skillFocus: 'Music Theory',        duration: 35,  mood: 4, notes: 'Voice leading principles, 4-part harmony.' },
  { id: '10', date: '2025-06-06', instrument: 'Guitar', skillFocus: 'Repertoire',          duration: 55,  mood: 4, notes: 'Fingerstyle arrangement of Blackbird.' },
  { id: '11', date: '2025-06-05', instrument: 'Piano',  skillFocus: 'Scales & Arpeggios', duration: 30,  mood: 2, notes: 'Tired after work. Short session.' },
  { id: '12', date: '2025-06-04', instrument: 'Piano',  skillFocus: 'Expression & Dynamics', duration: 60, mood: 5, notes: 'Focused on pedaling and dynamics in slow practice.' },
  { id: '13', date: '2025-06-03', instrument: 'Guitar', skillFocus: 'Rhythm & Timing',    duration: 30,  mood: 3, notes: 'Metronome work at 80bpm, syncopation.' },
  { id: '14', date: '2025-06-02', instrument: 'Piano',  skillFocus: 'Repertoire',          duration: 90,  mood: 5, notes: 'Prep for recital. Ran program start-to-finish twice.' },
  { id: '15', date: '2025-06-01', instrument: 'Piano',  skillFocus: 'Technique',           duration: 45,  mood: 4, notes: 'Chromatic exercises, left hand focus.' },
];

export const mockGroupMembers: GroupMember[] = [
  {
    id: '1', name: 'You (Alex Chen)', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces',
    instrument: 'Piano + Guitar', streak: 18, totalHours: 312, thisWeek: 4.5,
    badges: ['🔥 18-Day Streak', '🏆 100h Club', '⭐ Theory Master'],
  },
  {
    id: '2', name: 'Mia Okonkwo', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=faces',
    instrument: 'Violin', streak: 24, totalHours: 540, thisWeek: 6.2,
    badges: ['🔥 24-Day Streak', '🏆 500h Legend', '🎻 Strings Pro'],
  },
  {
    id: '3', name: 'Jordan Kim', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces',
    instrument: 'Drums', streak: 7, totalHours: 89, thisWeek: 2.0,
    badges: ['🥁 Rhythm King'],
  },
  {
    id: '4', name: 'Priya Mehta', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces',
    instrument: 'Saxophone', streak: 12, totalHours: 230, thisWeek: 3.8,
    badges: ['🔥 12-Day Streak', '🎷 Jazz Devotee'],
  },
  {
    id: '5', name: 'Luca Romano', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=faces',
    instrument: 'Classical Guitar', streak: 31, totalHours: 780, thisWeek: 7.5,
    badges: ['🔥 31-Day Streak', '🏆 500h Legend', '🎸 Fingerstyle Guru', '⭐ All-Rounder'],
  },
];

export const mockMilestones: Milestone[] = [
  {
    id: '1', memberId: '5', memberName: 'Luca Romano',
    memberAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=faces',
    title: '31-Day Streak! 🔥', badge: '🔥',
    description: 'Just hit 31 consecutive days of practice. Never missed a day in June. The accountability pod kept me honest on the tough days — thank you all!',
    date: '2025-06-15',
    reactions: [{ emoji: '🔥', count: 12 }, { emoji: '👏', count: 8 }, { emoji: '🎸', count: 5 }],
  },
  {
    id: '2', memberId: '2', memberName: 'Mia Okonkwo',
    memberAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=faces',
    title: '500 Total Hours Milestone 🏆', badge: '🏆',
    description: 'Crossed 500 logged hours today! From 30-minute beginner sessions to 2-hour deep dives. The consistency charts helped me see exactly where I needed to push harder.',
    date: '2025-06-13',
    reactions: [{ emoji: '🏆', count: 15 }, { emoji: '😱', count: 10 }, { emoji: '🎻', count: 7 }],
  },
  {
    id: '3', memberId: '1', memberName: 'You (Alex Chen)',
    memberAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces',
    title: 'Recital Ready ⭐', badge: '⭐',
    description: 'Finally performed my full recital program from start to finish with no stops. Six months of Cadence logs led to this moment. Chopin Nocturne is ready!',
    date: '2025-06-10',
    reactions: [{ emoji: '⭐', count: 11 }, { emoji: '🎹', count: 9 }, { emoji: '💪', count: 6 }],
  },
  {
    id: '4', memberId: '4', memberName: 'Priya Mehta',
    memberAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces',
    title: '12-Day Streak 🔥', badge: '🔥',
    description: 'Back on track after a rough May. The daily nudges from Cadence and seeing the group\'s activity really pulled me back in. Day 12 and counting!',
    date: '2025-06-09',
    reactions: [{ emoji: '🔥', count: 8 }, { emoji: '💚', count: 6 }],
  },
];

// Weekly practice data for charts
export const weeklyData = [
  { day: 'Mon', minutes: 45, sessions: 1 },
  { day: 'Tue', minutes: 60, sessions: 1 },
  { day: 'Wed', minutes: 0,  sessions: 0 },
  { day: 'Thu', minutes: 75, sessions: 1 },
  { day: 'Fri', minutes: 30, sessions: 1 },
  { day: 'Sat', minutes: 90, sessions: 2 },
  { day: 'Sun', minutes: 50, sessions: 1 },
];

export const monthlyData = [
  { week: 'Week 1', Piano: 210, Guitar: 90  },
  { week: 'Week 2', Piano: 195, Guitar: 120 },
  { week: 'Week 3', Piano: 240, Guitar: 60  },
  { week: 'Week 4', Piano: 300, Guitar: 150 },
];

export const skillData = [
  { name: 'Repertoire',    value: 38, color: '#22c55e' },
  { name: 'Technique',     value: 22, color: '#86efac' },
  { name: 'Scales/Arps',   value: 15, color: '#fbbf24' },
  { name: 'Sight-Reading', value: 10, color: '#818cf8' },
  { name: 'Improvisation', value: 9,  color: '#f472b6' },
  { name: 'Theory',        value: 6,  color: '#67e8f9' },
];

// Generate heatmap data for past 12 weeks (84 days)
export function generateHeatmapData() {
  const today = new Date('2025-06-15');
  const data: { date: string; minutes: number; level: 0 | 1 | 2 | 3 | 4 }[] = [];
  for (let i = 83; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const skip = Math.random() < 0.2;
    const minutes = skip ? 0 : Math.floor(Math.random() * 90 + 20);
    const level = minutes === 0 ? 0 : minutes < 30 ? 1 : minutes < 60 ? 2 : minutes < 75 ? 3 : 4;
    data.push({ date: dateStr, minutes, level: level as 0 | 1 | 2 | 3 | 4 });
  }
  return data;
}