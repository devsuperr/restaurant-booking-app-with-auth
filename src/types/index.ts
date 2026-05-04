export type LeadStatus = 'New' | 'Contacted' | 'Qualified' | 'Proposal Sent' | 'Won' | 'Lost';
export type TaskStatus = 'Pending' | 'Done' | 'Overdue';
export type TaskPriority = 'Low' | 'Medium' | 'High';
export type AITone = 'Professional' | 'Friendly' | 'Sales' | 'Short';

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  source: string;
  status: LeadStatus;
  deal_value: number;
  notes: string;
  next_followup: string | null;
  created_at: string;
  updated_at: string;
}

export interface LeadNote {
  id: string;
  lead_id: string;
  content: string;
  created_at: string;
}

export interface Task {
  id: string;
  lead_id: string;
  title: string;
  status: TaskStatus;
  priority: TaskPriority;
  due_date: string;
  notes: string;
  created_at: string;
}

export interface AIMessage {
  id: string;
  lead_id: string;
  tone: AITone;
  subject: string;
  body: string;
  created_at: string;
}

export interface ActivityLog {
  id: string;
  lead_id: string;
  action: string;
  description: string;
  created_at: string;
}

export interface DashboardStats {
  totalLeads: number;
  newLeadsThisWeek: number;
  conversionRate: number;
  pipelineValue: number;
}