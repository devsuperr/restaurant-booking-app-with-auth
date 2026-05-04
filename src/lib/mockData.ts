export type Platform = 'Upwork' | 'Toptal' | 'Fiverr' | 'Direct' | 'LinkedIn' | 'Contra';
export type SkillType = 'React Dev' | 'Full-Stack' | 'UX Design' | 'Strategy' | 'Data Analysis' | 'Mobile Dev' | 'DevOps' | 'Copywriting';

export interface RateEntry {
  id: string;
  clientName: string;
  platform: Platform;
  skillType: SkillType;
  rate: number;
  previousRate: number | null;
  hoursLogged: number;
  date: string;
  projectName: string;
  notes: string;
  currency: 'USD';
}

export interface Client {
  id: string;
  name: string;
  industry: string;
  country: string;
  platform: Platform;
  totalEarned: number;
  avgRate: number;
  hoursWorked: number;
  projectCount: number;
  lastEngaged: string;
  status: 'active' | 'inactive' | 'paused';
  avatar: string;
}

export interface Goal {
  id: string;
  skillType: SkillType;
  currentRate: number;
  targetRate: number;
  deadline: string;
  platform: Platform;
  notes: string;
  createdAt: string;
}

export interface Project {
  id: string;
  name: string;
  clientName: string;
  platform: Platform;
  skillType: SkillType;
  rate: number;
  totalHours: number;
  totalEarned: number;
  startDate: string;
  endDate: string | null;
  status: 'active' | 'completed' | 'paused';
  description: string;
}

export const rateEntries: RateEntry[] = [
  { id: '1', clientName: 'Stripe Inc.', platform: 'Toptal', skillType: 'React Dev', rate: 185, previousRate: 175, hoursLogged: 40, date: '2025-06-12', projectName: 'Payment SDK Revamp', notes: 'Rate negotiated after sprint delivery', currency: 'USD' },
  { id: '2', clientName: 'Notion Labs', platform: 'Direct', skillType: 'UX Design', rate: 160, previousRate: 140, hoursLogged: 32, date: '2025-06-10', projectName: 'Editor Redesign v3', notes: 'Long-term engagement bumped rate', currency: 'USD' },
  { id: '3', clientName: 'Vercel Corp', platform: 'Upwork', skillType: 'Full-Stack', rate: 145, previousRate: 145, hoursLogged: 60, date: '2025-06-08', projectName: 'CI/CD Dashboard', notes: 'Steady engagement, rate unchanged', currency: 'USD' },
  { id: '4', clientName: 'Figma LLC', platform: 'Direct', skillType: 'Strategy', rate: 220, previousRate: 190, hoursLogged: 20, date: '2025-06-05', projectName: 'Product Roadmap Advisory', notes: 'Premium strategy retainer', currency: 'USD' },
  { id: '5', clientName: 'Linear HQ', platform: 'Toptal', skillType: 'React Dev', rate: 180, previousRate: 160, hoursLogged: 50, date: '2025-05-28', projectName: 'Issue Tracker Rewrite', notes: 'Delivered ahead of schedule', currency: 'USD' },
  { id: '6', clientName: 'Loom Inc.', platform: 'Contra', skillType: 'Mobile Dev', rate: 155, previousRate: 130, hoursLogged: 45, date: '2025-05-20', projectName: 'iOS Screen Recorder', notes: 'New platform, strong negotiation', currency: 'USD' },
  { id: '7', clientName: 'Coda.io', platform: 'LinkedIn', skillType: 'Data Analysis', rate: 120, previousRate: 110, hoursLogged: 35, date: '2025-05-15', projectName: 'User Analytics Audit', notes: 'First engagement via LinkedIn', currency: 'USD' },
  { id: '8', clientName: 'Framer Ltd.', platform: 'Direct', skillType: 'UX Design', rate: 175, previousRate: 155, hoursLogged: 55, date: '2025-05-10', projectName: 'Motion Design System', notes: 'Premium direct client', currency: 'USD' },
  { id: '9', clientName: 'Railway.app', platform: 'Upwork', skillType: 'DevOps', rate: 135, previousRate: 120, hoursLogged: 28, date: '2025-04-30', projectName: 'K8s Migration', notes: 'Niche skill premium', currency: 'USD' },
  { id: '10', clientName: 'Ghost CMS', platform: 'Fiverr', skillType: 'Copywriting', rate: 95, previousRate: 85, hoursLogged: 15, date: '2025-04-22', projectName: 'Blog Content Strategy', notes: 'Fast turnaround rate', currency: 'USD' },
];

export const clients: Client[] = [
  { id: '1', name: 'Stripe Inc.', industry: 'Fintech', country: 'USA', platform: 'Toptal', totalEarned: 28400, avgRate: 180, hoursWorked: 158, projectCount: 3, lastEngaged: '2025-06-12', status: 'active', avatar: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=80&h=80&fit=crop&crop=faces' },
  { id: '2', name: 'Notion Labs', industry: 'Productivity', country: 'USA', platform: 'Direct', totalEarned: 18560, avgRate: 150, hoursWorked: 124, projectCount: 2, lastEngaged: '2025-06-10', status: 'active', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=faces' },
  { id: '3', name: 'Vercel Corp', industry: 'Infrastructure', country: 'USA', platform: 'Upwork', totalEarned: 15660, avgRate: 141, hoursWorked: 111, projectCount: 4, lastEngaged: '2025-06-08', status: 'active', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces' },
  { id: '4', name: 'Figma LLC', industry: 'Design Tools', country: 'USA', platform: 'Direct', totalEarned: 22000, avgRate: 215, hoursWorked: 102, projectCount: 2, lastEngaged: '2025-06-05', status: 'active', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=faces' },
  { id: '5', name: 'Linear HQ', industry: 'Project Mgmt', country: 'Canada', platform: 'Toptal', totalEarned: 14400, avgRate: 170, hoursWorked: 85, projectCount: 2, lastEngaged: '2025-05-28', status: 'active', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=faces' },
  { id: '6', name: 'Loom Inc.', industry: 'Video Tech', country: 'USA', platform: 'Contra', totalEarned: 8620, avgRate: 145, hoursWorked: 59, projectCount: 1, lastEngaged: '2025-05-20', status: 'paused', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces' },
  { id: '7', name: 'Coda.io', industry: 'Productivity', country: 'USA', platform: 'LinkedIn', totalEarned: 5250, avgRate: 115, hoursWorked: 46, projectCount: 1, lastEngaged: '2025-05-15', status: 'inactive', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces' },
  { id: '8', name: 'Framer Ltd.', industry: 'Design Tools', country: 'Netherlands', platform: 'Direct', totalEarned: 18480, avgRate: 162, hoursWorked: 114, projectCount: 3, lastEngaged: '2025-05-10', status: 'active', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces' },
];

export const goals: Goal[] = [
  { id: '1', skillType: 'React Dev', currentRate: 185, targetRate: 250, deadline: '2025-12-31', platform: 'Toptal', notes: 'Focus on senior-level enterprise clients', createdAt: '2025-01-15' },
  { id: '2', skillType: 'UX Design', currentRate: 160, targetRate: 195, deadline: '2025-09-30', platform: 'Direct', notes: 'Specialize in SaaS product design', createdAt: '2025-02-01' },
  { id: '3', skillType: 'Strategy', currentRate: 220, targetRate: 240, deadline: '2025-08-01', platform: 'Direct', notes: 'Almost at goal — target advisory roles', createdAt: '2025-01-10' },
  { id: '4', skillType: 'Full-Stack', currentRate: 145, targetRate: 180, deadline: '2025-10-31', platform: 'Upwork', notes: 'Build portfolio of complex architectures', createdAt: '2025-03-01' },
  { id: '5', skillType: 'Mobile Dev', currentRate: 155, targetRate: 200, deadline: '2025-12-15', platform: 'Contra', notes: 'Obtain iOS certifications', createdAt: '2025-02-20' },
];

export const projects: Project[] = [
  { id: '1', name: 'Payment SDK Revamp', clientName: 'Stripe Inc.', platform: 'Toptal', skillType: 'React Dev', rate: 185, totalHours: 160, totalEarned: 29600, startDate: '2025-04-01', endDate: null, status: 'active', description: 'Full rewrite of Stripe Elements v3 with React 18 concurrent features and accessibility overhaul.' },
  { id: '2', name: 'Editor Redesign v3', clientName: 'Notion Labs', platform: 'Direct', skillType: 'UX Design', rate: 160, totalHours: 120, totalEarned: 19200, startDate: '2025-03-15', endDate: null, status: 'active', description: 'Third iteration of the Notion block editor interface with improved mobile experience.' },
  { id: '3', name: 'CI/CD Dashboard', clientName: 'Vercel Corp', platform: 'Upwork', skillType: 'Full-Stack', rate: 145, totalHours: 200, totalEarned: 29000, startDate: '2025-01-10', endDate: '2025-05-30', status: 'completed', description: 'Internal deployment monitoring dashboard with real-time build logs and team notifications.' },
  { id: '4', name: 'Product Roadmap Advisory', clientName: 'Figma LLC', platform: 'Direct', skillType: 'Strategy', rate: 220, totalHours: 80, totalEarned: 17600, startDate: '2025-02-01', endDate: null, status: 'active', description: 'Ongoing product strategy retainer covering competitive analysis, roadmap prioritization, and GTM.' },
  { id: '5', name: 'Issue Tracker Rewrite', clientName: 'Linear HQ', platform: 'Toptal', skillType: 'React Dev', rate: 180, totalHours: 300, totalEarned: 54000, startDate: '2024-11-01', endDate: '2025-04-30', status: 'completed', description: 'Complete frontend rewrite of Linear's issue tracking UI with new filtering engine.' },
  { id: '6', name: 'iOS Screen Recorder', clientName: 'Loom Inc.', platform: 'Contra', skillType: 'Mobile Dev', rate: 155, totalHours: 140, totalEarned: 21700, startDate: '2025-03-01', endDate: null, status: 'paused', description: 'Native iOS screen recording module with real-time compression and Loom cloud upload.' },
  { id: '7', name: 'User Analytics Audit', clientName: 'Coda.io', platform: 'LinkedIn', skillType: 'Data Analysis', rate: 120, totalHours: 60, totalEarned: 7200, startDate: '2025-04-15', endDate: '2025-05-20', status: 'completed', description: 'Deep-dive analysis of Coda user retention metrics and A/B test result interpretation.' },
  { id: '8', name: 'Motion Design System', clientName: 'Framer Ltd.', platform: 'Direct', skillType: 'UX Design', rate: 175, totalHours: 180, totalEarned: 31500, startDate: '2025-02-15', endDate: null, status: 'active', description: 'Comprehensive animation system for Framer's component library with Lottie integration.' },
];

export const earningsByMonth = [
  { month: 'Jan', upwork: 3200, toptal: 5800, direct: 2100, contra: 800, linkedin: 400, fiverr: 600 },
  { month: 'Feb', upwork: 3600, toptal: 6200, direct: 2800, contra: 900, linkedin: 500, fiverr: 700 },
  { month: 'Mar', upwork: 4100, toptal: 7100, direct: 3200, contra: 1100, linkedin: 600, fiverr: 500 },
  { month: 'Apr', upwork: 4500, toptal: 7800, direct: 3800, contra: 1200, linkedin: 700, fiverr: 800 },
  { month: 'May', upwork: 4800, toptal: 8400, direct: 4100, contra: 1400, linkedin: 600, fiverr: 600 },
  { month: 'Jun', upwork: 5200, toptal: 9100, direct: 4600, contra: 1600, linkedin: 700, fiverr: 700 },
];

export const ratesBySkill = [
  { skill: 'Strategy', avgRate: 220, entries: 8, topRate: 240 },
  { skill: 'React Dev', avgRate: 182, entries: 24, topRate: 200 },
  { skill: 'UX Design', avgRate: 163, entries: 18, topRate: 185 },
  { skill: 'Mobile Dev', avgRate: 155, entries: 10, topRate: 175 },
  { skill: 'Full-Stack', avgRate: 144, entries: 15, topRate: 165 },
  { skill: 'DevOps', avgRate: 135, entries: 7, topRate: 150 },
  { skill: 'Data Analysis', avgRate: 118, entries: 6, topRate: 130 },
  { skill: 'Copywriting', avgRate: 95, entries: 4, topRate: 110 },
];