export type LeadStatus = 'New' | 'Contacted' | 'Qualified' | 'Proposal Sent' | 'Won' | 'Lost';
export type LeadSource = 'Website' | 'Referral' | 'Cold Outreach' | 'Social Media' | 'Event' | 'Other';
export type TaskStatus = 'Pending' | 'Done' | 'Overdue';
export type TaskPriority = 'Low' | 'Medium' | 'High';
export type ToneType = 'Professional' | 'Friendly' | 'Sales' | 'Short';

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  source: LeadSource;
  status: LeadStatus;
  dealValue: number;
  notes: string;
  nextFollowUp: string | null;
  createdAt: string;
  updatedAt: string;
  tags?: string[];
  avatar?: string;
}

export interface LeadNote {
  id: string;
  leadId: string;
  content: string;
  authorName: string;
  createdAt: string;
  type: 'note' | 'email' | 'call' | 'meeting';
}

export interface Task {
  id: string;
  leadId: string;
  leadName: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  createdAt: string;
  completedAt?: string;
}

export interface AIMessage {
  id: string;
  leadId: string;
  leadName: string;
  tone: ToneType;
  content: string;
  createdAt: string;
  used: boolean;
}

export interface ActivityLog {
  id: string;
  leadId?: string;
  leadName?: string;
  action: string;
  detail: string;
  createdAt: string;
  icon: string;
}

export interface DashboardStats {
  totalLeads: number;
  newLeadsThisWeek: number;
  conversionRate: number;
  pipelineValue: number;
  wonDeals: number;
  avgDealSize: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  companyId: string;
}

export interface Company {
  id: string;
  name: string;
  website?: string;
  industry?: string;
  timezone?: string;
  logo?: string;
}