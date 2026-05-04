/**
 * Local store — drop-in replacement for Supabase queries.
 * Persists everything to localStorage. Schema mirrors schema.sql exactly,
 * so we can swap to `supabase.from('leads').select()` later without touching pages.
 */
import { useEffect, useState, useCallback } from 'react';
import type { Lead, LeadNote, Task, AIMessage, ActivityLog, User, Company, LeadStatus, TaskStatus } from './types';
import {
  seedLeads,
  seedNotes,
  seedTasks,
  seedAIMessages,
  seedActivity,
  seedCompany,
  seedUser,
} from './mockData';
import { uid, isOverdue } from './utils';

const KEYS = {
  init: 'lp_initialized_v1',
  user: 'lp_user',
  company: 'lp_company',
  leads: 'lp_leads',
  notes: 'lp_notes',
  tasks: 'lp_tasks',
  ai: 'lp_ai_messages',
  activity: 'lp_activity',
  authed: 'lp_authed_user',
} as const;

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent('lp:store-change', { detail: { key } }));
  } catch (e) {
    console.error('store write failed', e);
  }
}

/** First-run seed: populate localStorage with demo data. Idempotent. */
export function ensureSeeded(): void {
  if (localStorage.getItem(KEYS.init)) return;
  write(KEYS.user, seedUser);
  write(KEYS.company, seedCompany);
  write(KEYS.leads, seedLeads);
  write(KEYS.notes, seedNotes);
  write(KEYS.tasks, seedTasks);
  write(KEYS.ai, seedAIMessages);
  write(KEYS.activity, seedActivity);
  localStorage.setItem(KEYS.init, '1');
}

/** React hook that subscribes to a store key and re-renders on change. */
function useStore<T>(key: string, fallback: T): [T, (next: T | ((prev: T) => T)) => void] {
  ensureSeeded();
  const [value, setValue] = useState<T>(() => read(key, fallback));

  useEffect(() => {
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent).detail as { key: string };
      if (detail?.key === key) setValue(read(key, fallback));
    };
    window.addEventListener('lp:store-change', onChange);
    window.addEventListener('storage', () => setValue(read(key, fallback)));
    return () => {
      window.removeEventListener('lp:store-change', onChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const setter = useCallback(
    (next: T | ((prev: T) => T)) => {
      const v = typeof next === 'function' ? (next as (p: T) => T)(read(key, fallback)) : next;
      write(key, v);
      setValue(v);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key],
  );

  return [value, setter];
}

// ─── Activity logger ──────────────────────────────────────────────────────────
function logActivity(entry: Omit<ActivityLog, 'id' | 'created_at'>): void {
  const log: ActivityLog = { ...entry, id: uid(), created_at: new Date().toISOString() };
  const cur = read<ActivityLog[]>(KEYS.activity, []);
  write(KEYS.activity, [log, ...cur].slice(0, 100));
}

// ─── Hooks ────────────────────────────────────────────────────────────────────
export function useUser() {
  return useStore<User>(KEYS.user, seedUser);
}
export function useCompany() {
  const [company, setCompany] = useStore<Company>(KEYS.company, seedCompany);
  return { company, updateCompany: (patch: Partial<Company>) => setCompany({ ...company, ...patch }) };
}

export function useLeads() {
  const [leads, setLeads] = useStore<Lead[]>(KEYS.leads, []);

  const create = useCallback((input: Omit<Lead, 'id' | 'company_id' | 'created_at' | 'updated_at'>) => {
    const lead: Lead = {
      ...input,
      id: uid(),
      company_id: 'cmp_demo',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    const cur = read<Lead[]>(KEYS.leads, []);
    write(KEYS.leads, [lead, ...cur]);
    logActivity({ lead_id: lead.id, actor_name: 'Alex Rivera', action: 'Lead created', detail: `${lead.name} · ${lead.company}` });
    return lead;
  }, []);

  const update = useCallback((id: string, patch: Partial<Lead>) => {
    const cur = read<Lead[]>(KEYS.leads, []);
    const before = cur.find((l) => l.id === id);
    const next = cur.map((l) => (l.id === id ? { ...l, ...patch, updated_at: new Date().toISOString() } : l));
    write(KEYS.leads, next);
    if (patch.status && before && before.status !== patch.status) {
      logActivity({ lead_id: id, actor_name: 'Alex Rivera', action: 'Status changed', detail: `${before.status} → ${patch.status}` });
    }
  }, []);

  const remove = useCallback((id: string) => {
    const cur = read<Lead[]>(KEYS.leads, []);
    const lead = cur.find((l) => l.id === id);
    write(KEYS.leads, cur.filter((l) => l.id !== id));
    if (lead) logActivity({ lead_id: id, actor_name: 'Alex Rivera', action: 'Lead deleted', detail: lead.name });
  }, []);

  const setStatus = useCallback((id: string, status: LeadStatus) => update(id, { status }), [update]);

  return { leads, setLeads, create, update, remove, setStatus };
}

export function useLead(id: string | undefined) {
  const { leads } = useLeads();
  return leads.find((l) => l.id === id);
}

export function useNotes(leadId?: string) {
  const [notes] = useStore<LeadNote[]>(KEYS.notes, []);
  const filtered = leadId ? notes.filter((n) => n.lead_id === leadId) : notes;
  filtered.sort((a, b) => b.created_at.localeCompare(a.created_at));

  const addNote = useCallback((leadIdArg: string, body: string) => {
    const user = read<User>(KEYS.user, seedUser);
    const note: LeadNote = {
      id: uid(),
      lead_id: leadIdArg,
      author_id: user.id,
      author_name: user.name,
      body,
      created_at: new Date().toISOString(),
    };
    const cur = read<LeadNote[]>(KEYS.notes, []);
    write(KEYS.notes, [note, ...cur]);
    logActivity({ lead_id: leadIdArg, actor_name: user.name, action: 'Note added', detail: body.slice(0, 60) });
    return note;
  }, []);

  return { notes: filtered, addNote };
}

export function useTasks(leadId?: string) {
  const [rawTasks, setTasks] = useStore<Task[]>(KEYS.tasks, []);
  // Compute overdue dynamically
  const tasks = rawTasks.map((t) =>
    t.status === 'Pending' && isOverdue(t.due_at) ? { ...t, status: 'Overdue' as TaskStatus } : t,
  );
  const filtered = leadId ? tasks.filter((t) => t.lead_id === leadId) : tasks;

  const create = useCallback((input: Omit<Task, 'id' | 'created_at' | 'status'> & { status?: TaskStatus }) => {
    const task: Task = {
      ...input,
      id: uid(),
      status: input.status ?? 'Pending',
      created_at: new Date().toISOString(),
    };
    const cur = read<Task[]>(KEYS.tasks, []);
    write(KEYS.tasks, [task, ...cur]);
    logActivity({ lead_id: task.lead_id, actor_name: 'Alex Rivera', action: 'Task created', detail: task.title });
    return task;
  }, []);

  const toggle = useCallback((id: string) => {
    const cur = read<Task[]>(KEYS.tasks, []);
    const next = cur.map((t) => {
      if (t.id !== id) return t;
      const isDone = t.status === 'Done';
      return { ...t, status: (isDone ? 'Pending' : 'Done') as TaskStatus, completed_at: isDone ? null : new Date().toISOString() };
    });
    write(KEYS.tasks, next);
    const task = next.find((t) => t.id === id);
    if (task && task.status === 'Done') {
      logActivity({ lead_id: task.lead_id, actor_name: 'Alex Rivera', action: 'Task completed', detail: task.title });
    }
  }, []);

  const remove = useCallback((id: string) => {
    const cur = read<Task[]>(KEYS.tasks, []);
    write(KEYS.tasks, cur.filter((t) => t.id !== id));
  }, []);

  return { tasks: filtered, allTasks: tasks, setTasks, create, toggle, remove };
}

export function useAIMessages(leadId?: string) {
  const [messages] = useStore<AIMessage[]>(KEYS.ai, []);
  const filtered = leadId ? messages.filter((m) => m.lead_id === leadId) : messages;

  const save = useCallback((msg: Omit<AIMessage, 'id' | 'created_at'>) => {
    const full: AIMessage = { ...msg, id: uid(), created_at: new Date().toISOString() };
    const cur = read<AIMessage[]>(KEYS.ai, []);
    write(KEYS.ai, [full, ...cur]);
    logActivity({ lead_id: msg.lead_id, actor_name: 'Alex Rivera', action: 'AI message generated', detail: `${msg.tone} tone` });
    return full;
  }, []);

  return { messages: filtered, save };
}

export function useActivity() {
  const [activity] = useStore<ActivityLog[]>(KEYS.activity, []);
  return activity;
}

// ─── Mock auth ────────────────────────────────────────────────────────────────
export interface AuthedUser {
  email: string;
  name: string;
  loggedInAt: string;
}

export function useAuth() {
  const [user, setUser] = useStore<AuthedUser | null>(KEYS.authed, null);

  const login = (email: string, _password: string) => {
    const authed: AuthedUser = { email, name: email.split('@')[0], loggedInAt: new Date().toISOString() };
    write(KEYS.authed, authed);
    setUser(authed);
    return authed;
  };
  const signup = (email: string, _password: string, name: string) => {
    const authed: AuthedUser = { email, name, loggedInAt: new Date().toISOString() };
    write(KEYS.authed, authed);
    setUser(authed);
    return authed;
  };
  const logout = () => {
    write(KEYS.authed, null);
    setUser(null);
  };

  return { user, isAuthed: !!user, login, signup, logout };
}

/** Reset everything to seed data (Settings → "Reset demo data"). */
export function resetDemoData(): void {
  Object.values(KEYS).forEach((k) => localStorage.removeItem(k));
  ensureSeeded();
  window.dispatchEvent(new CustomEvent('lp:store-change', { detail: { key: '*' } }));
}