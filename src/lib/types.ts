export type LeadStatus = 'New' | 'Contacted' | 'Qualified' | 'Proposal Sent' | 'Won' | 'Lost';
export type LeadSource = 'Website' | 'Referral' | 'LinkedIn' | 'Cold Outreach' | 'Event' | 'Ads' | 'Other';
export type Tone = 'Professional' | 'Friendly' | 'Sales' | 'Short';
export type TaskStatus = 'Pending' | 'Done' | 'Overdue';
export type TaskPriority = 'Low' | 'Medium' | 'High';

export interface Company {
  id: string;
  name: string;
  industry: string;
  website?: string;
  size?: string;
  created_at: string;
}

export interface User {
  id: string;
  company_id: string;
  email: string;
  name: string;
  role: 'owner' | 'admin' | 'member';
  avatar_url?: string;
  created_at: string;
}

export interface Lead {
  id: string;
  company_id: string;
  name: string;
  email: string;
  phone?: string;
  company: string;
  source: LeadSource;
  status: LeadStatus;
  deal_value: number;
  notes?: string;
  next_followup_at?: string | null;
  owner_id?: string;
  created_at: string;
  updated_at: string;
}

export interface LeadNote {
  id: string;
  lead_id: string;
  author_id: string;
  author_name: string;
  body: string;
  created_at: string;
}

export interface Task {
  id: string;
  lead_id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  due_at: string;
  completed_at?: string | null;
  created_at: string;
}

export interface AIMessage {
  id: string;
  lead_id: string;
  tone: Tone;
  subject: string;
  body: string;
  created_at: string;
}

export interface ActivityLog {
  id: string;
  lead_id?: string;
  actor_name: string;
  action: string;
  detail?: string;
  created_at: string;
}

export interface SubscriptionPlan {
  id: string;
  name: 'Starter' | 'Growth' | 'Scale';
  price_monthly: number;
  features: string[];
  lead_limit: number | null;
  ai_messages_limit: number | null;
}