import { Lead, LeadNote, Task, AIMessage, ActivityLog } from './types';
import { mockLeads, mockNotes, mockTasks, mockAIMessages, mockActivityLogs } from './mockData';

// In-memory store that persists within a session
let leads: Lead[] = [...mockLeads];
let notes: LeadNote[] = [...mockNotes];
let tasks: Task[] = [...mockTasks];
let aiMessages: AIMessage[] = [...mockAIMessages];
let activityLogs: ActivityLog[] = [...mockActivityLogs];

function generateId() {
  return `id-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

// LEADS
export const leadsStore = {
  getAll: () => [...leads],
  getById: (id: string) => leads.find(l => l.id === id),
  create: (data: Omit<Lead, 'id' | 'createdAt' | 'updatedAt'>) => {
    const lead: Lead = {
      ...data,
      id: generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    leads = [lead, ...leads];
    activityLogs = [{
      id: generateId(),
      leadId: lead.id,
      leadName: lead.name,
      action: 'Lead Created',
      detail: `New lead added: ${lead.name}`,
      createdAt: new Date().toISOString(),
      icon: 'plus',
    }, ...activityLogs];
    return lead;
  },
  update: (id: string, data: Partial<Lead>) => {
    const idx = leads.findIndex(l => l.id === id);
    if (idx === -1) return null;
    const old = leads[idx];
    leads[idx] = { ...old, ...data, updatedAt: new Date().toISOString() };
    if (data.status && data.status !== old.status) {
      activityLogs = [{
        id: generateId(),
        leadId: id,
        leadName: leads[idx].name,
        action: 'Status Changed',
        detail: `${leads[idx].name} → ${data.status}`,
        createdAt: new Date().toISOString(),
        icon: 'arrow',
      }, ...activityLogs];
    }
    return leads[idx];
  },
  delete: (id: string) => {
    const lead = leads.find(l => l.id === id);
    leads = leads.filter(l => l.id !== id);
    notes = notes.filter(n => n.leadId !== id);
    tasks = tasks.filter(t => t.leadId !== id);
    if (lead) {
      activityLogs = [{
        id: generateId(),
        leadId: id,
        leadName: lead.name,
        action: 'Lead Deleted',
        detail: `Lead deleted: ${lead.name}`,
        createdAt: new Date().toISOString(),
        icon: 'trash',
      }, ...activityLogs];
    }
    return true;
  },
};

// NOTES
export const notesStore = {
  getByLeadId: (leadId: string) => notes.filter(n => n.leadId === leadId).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  ),
  create: (data: Omit<LeadNote, 'id' | 'createdAt'>) => {
    const note: LeadNote = {
      ...data,
      id: generateId(),
      createdAt: new Date().toISOString(),
    };
    notes = [note, ...notes];
    const lead = leads.find(l => l.id === data.leadId);
    activityLogs = [{
      id: generateId(),
      leadId: data.leadId,
      leadName: lead?.name,
      action: 'Note Added',
      detail: `Note added for ${lead?.name ?? 'unknown'}`,
      createdAt: new Date().toISOString(),
      icon: 'message',
    }, ...activityLogs];
    return note;
  },
  delete: (id: string) => {
    notes = notes.filter(n => n.id !== id);
    return true;
  },
};

// TASKS
export const tasksStore = {
  getAll: () => [...tasks],
  getByLeadId: (leadId: string) => tasks.filter(t => t.leadId === leadId),
  create: (data: Omit<Task, 'id' | 'createdAt'>) => {
    const task: Task = {
      ...data,
      id: generateId(),
      createdAt: new Date().toISOString(),
    };
    tasks = [task, ...tasks];
    return task;
  },
  update: (id: string, data: Partial<Task>) => {
    const idx = tasks.findIndex(t => t.id === id);
    if (idx === -1) return null;
    if (data.status === 'Done' && tasks[idx].status !== 'Done') {
      data.completedAt = new Date().toISOString();
      const lead = leads.find(l => l.id === tasks[idx].leadId);
      activityLogs = [{
        id: generateId(),
        leadId: tasks[idx].leadId,
        leadName: lead?.name,
        action: 'Task Completed',
        detail: `Task "${tasks[idx].title}" marked done`,
        createdAt: new Date().toISOString(),
        icon: 'check',
      }, ...activityLogs];
    }
    tasks[idx] = { ...tasks[idx], ...data };
    return tasks[idx];
  },
  delete: (id: string) => {
    tasks = tasks.filter(t => t.id !== id);
    return true;
  },
};

// AI MESSAGES
export const aiMessagesStore = {
  getAll: () => [...aiMessages],
  getByLeadId: (leadId: string) => aiMessages.filter(m => m.leadId === leadId),
  create: (data: Omit<AIMessage, 'id' | 'createdAt'>) => {
    const msg: AIMessage = {
      ...data,
      id: generateId(),
      createdAt: new Date().toISOString(),
    };
    aiMessages = [msg, ...aiMessages];
    const lead = leads.find(l => l.id === data.leadId);
    activityLogs = [{
      id: generateId(),
      leadId: data.leadId,
      leadName: lead?.name,
      action: 'AI Message Generated',
      detail: `Follow-up generated for ${lead?.name ?? 'unknown'}`,
      createdAt: new Date().toISOString(),
      icon: 'ai',
    }, ...activityLogs];
    return msg;
  },
};

// ACTIVITY
export const activityStore = {
  getAll: () => [...activityLogs].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  ).slice(0, 50),
};

// DASHBOARD STATS
export const getDashboardStats = () => {
  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const newLeadsThisWeek = leads.filter(l => new Date(l.createdAt) >= weekAgo).length;
  const wonLeads = leads.filter(l => l.status === 'Won');
  const pipelineStatuses = ['New', 'Contacted', 'Qualified', 'Proposal Sent'];
  const pipelineValue = leads
    .filter(l => pipelineStatuses.includes(l.status))
    .reduce((sum, l) => sum + l.dealValue, 0);
  const totalClosed = leads.filter(l => l.status === 'Won' || l.status === 'Lost').length;
  const conversionRate = totalClosed > 0 ? Math.round((wonLeads.length / totalClosed) * 100) : 0;
  const avgDealSize = wonLeads.length > 0
    ? Math.round(wonLeads.reduce((s, l) => s + l.dealValue, 0) / wonLeads.length)
    : 0;
  return {
    totalLeads: leads.length,
    newLeadsThisWeek,
    conversionRate,
    pipelineValue,
    wonDeals: wonLeads.length,
    avgDealSize,
  };
};

export const getLeadSourceData = () => {
  const counts: Record<string, number> = {};
  leads.forEach(l => {
    counts[l.source] = (counts[l.source] || 0) + 1;
  });
  return Object.entries(counts).map(([name, value]) => ({ name, value }));
};

export const getStatusData = () => {
  const statuses = ['New', 'Contacted', 'Qualified', 'Proposal Sent', 'Won', 'Lost'];
  return statuses.map(s => ({
    name: s,
    count: leads.filter(l => l.status === s).length,
    value: leads.filter(l => l.status === s).reduce((sum, l) => sum + l.dealValue, 0),
  }));
};