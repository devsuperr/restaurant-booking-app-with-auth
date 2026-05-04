import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Users,
  Sparkles,
  DollarSign,
  ArrowUpRight,
  CalendarClock,
  Activity as ActivityIcon,
  Plus,
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip as RTooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import AppShell from '@/components/AppShell';
import { useLeads, useTasks, useActivity } from '@/lib/store';
import { formatCurrency, formatRelative, formatDate, isOverdue } from '@/lib/utils';
import type { LeadSource } from '@/lib/types';

const SOURCE_COLORS: Record<LeadSource, string> = {
  Website: '#6366f1',
  Referral: '#10b981',
  LinkedIn: '#0ea5e9',
  'Cold Outreach': '#f59e0b',
  Event: '#ec4899',
  Ads: '#8b5cf6',
  Other: '#6b7280',
};

export default function DashboardPage() {
  const { leads } = useLeads();
  const { allTasks } = useTasks();
  const activity = useActivity();

  const stats = useMemo(() => {
    const total = leads.length;
    const oneWeekAgo = Date.now() - 7 * 86400000;
    const newThisWeek = leads.filter((l) => new Date(l.created_at).getTime() >= oneWeekAgo).length;
    const won = leads.filter((l) => l.status === 'Won').length;
    const lost = leads.filter((l) => l.status === 'Lost').length;
    const closed = won + lost;
    const conversion = closed > 0 ? Math.round((won / closed) * 100) : 0;
    const pipelineValue = leads
      .filter((l) => l.status !== 'Won' && l.status !== 'Lost')
      .reduce((sum, l) => sum + (l.deal_value || 0), 0);
    return { total, newThisWeek, conversion, pipelineValue };
  }, [leads]);

  const sourceData = useMemo(() => {
    const counts = new Map<LeadSource, number>();
    leads.forEach((l) => counts.set(l.source, (counts.get(l.source) ?? 0) + 1));
    return Array.from(counts.entries()).map(([name, value]) => ({ name, value }));
  }, [leads]);

  const trendData = useMemo(() => {
    // Last 14 days, count of leads created
    const days: { day: string; leads: number }[] = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date();
      d.setHours(0, 0, 0, 0);
      d.setDate(d.getDate() - i);
      const start = d.getTime();
      const end = start + 86400000;
      const count = leads.filter((l) => {
        const t = new Date(l.created_at).getTime();
        return t >= start && t < end;
      }).length;
      days.push({ day: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }), leads: count });
    }
    return days;
  }, [leads]);

  const upcoming = useMemo(() => {
    return allTasks
      .filter((t) => t.status !== 'Done')
      .sort((a, b) => a.due_at.localeCompare(b.due_at))
      .slice(0, 6);
  }, [allTasks]);

  const cards = [
    { label: 'Total leads', value: stats.total.toLocaleString(), icon: Users, change: '+12%', positive: true },
    { label: 'New this week', value: stats.newThisWeek.toString(), icon: Sparkles, change: '+8%', positive: true },
    { label: 'Conversion rate', value: `${stats.conversion}%`, icon: TrendingUp, change: '+4%', positive: true },
    { label: 'Pipeline value', value: formatCurrency(stats.pipelineValue), icon: DollarSign, change: '+22%', positive: true },
  ];

  return (
    <AppShell title="Dashboard">
      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {cards.map((c) => (
          <div key={c.label} className="card p-5 hover:shadow-lifted transition">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <c.icon className="w-4.5 h-4.5" />
              </div>
              <span className="inline-flex items-center gap-0.5 text-xs font-medium text-emerald-600">
                <ArrowUpRight className="w-3 h-3" />
                {c.change}
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-1">{c.label}</p>
            <p className="text-2xl font-bold text-gray-900 tracking-tight">{c.value}</p>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid lg:grid-cols-3 gap-4 mb-6">
        <div className="card p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-gray-900">Leads — last 14 days</h3>
              <p className="text-xs text-gray-500 mt-0.5">Daily new lead count</p>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="leadGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} allowDecimals={false} />
                <RTooltip
                  contentStyle={{ background: '#fff', border: '1px solid #ececf1', borderRadius: 12, fontSize: 12, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
                  labelStyle={{ fontWeight: 600 }}
                />
                <Area type="monotone" dataKey="leads" stroke="#6366f1" strokeWidth={2} fill="url(#leadGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card p-5">
          <h3 className="font-semibold text-gray-900 mb-1">Lead sources</h3>
          <p className="text-xs text-gray-500 mb-4">Where your pipeline comes from</p>
          {sourceData.length === 0 ? (
            <EmptyMini message="No leads yet" />
          ) : (
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={sourceData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={42} outerRadius={70} paddingAngle={2}>
                    {sourceData.map((entry) => (
                      <Cell key={entry.name} fill={SOURCE_COLORS[entry.name as LeadSource] ?? '#6366f1'} />
                    ))}
                  </Pie>
                  <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: 11 }} />
                  <RTooltip contentStyle={{ background: '#fff', border: '1px solid #ececf1', borderRadius: 12, fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>

      {/* Activity + Upcoming */}
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="card p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ActivityIcon className="w-4 h-4 text-gray-400" />
              <h3 className="font-semibold text-gray-900">Recent activity</h3>
            </div>
            <Link to="/leads" className="text-xs font-medium text-brand-600 hover:text-brand-700">View all</Link>
          </div>
          {activity.length === 0 ? (
            <EmptyMini message="No activity yet" />
          ) : (
            <ul className="space-y-3">
              {activity.slice(0, 7).map((a) => (
                <li key={a.id} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center text-xs font-semibold text-gray-600">
                    {a.actor_name.split(' ').map((p) => p[0]).slice(0, 2).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{a.actor_name}</span>{' '}
                      <span className="text-gray-500">· {a.action.toLowerCase()}</span>
                    </p>
                    {a.detail && <p className="text-xs text-gray-500 truncate mt-0.5">{a.detail}</p>}
                    <p className="text-xs text-gray-400 mt-0.5">{formatRelative(a.created_at)}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="card p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <CalendarClock className="w-4 h-4 text-gray-400" />
              <h3 className="font-semibold text-gray-900">Upcoming follow-ups</h3>
            </div>
            <Link to="/tasks" className="text-xs font-medium text-brand-600 hover:text-brand-700">All tasks</Link>
          </div>
          {upcoming.length === 0 ? (
            <EmptyMini message="Nothing on the radar — nice." action={<Link to="/tasks" className="btn-secondary !py-2 !px-3 text-xs"><Plus className="w-3 h-3" /> New task</Link>} />
          ) : (
            <ul className="space-y-2">
              {upcoming.map((t) => {
                const lead = leads.find((l) => l.id === t.lead_id);
                const overdue = isOverdue(t.due_at) && t.status !== 'Done';
                return (
                  <li key={t.id}>
                    <Link
                      to={lead ? `/leads/${lead.id}` : '/tasks'}
                      className="flex items-center gap-3 p-2.5 -mx-2 rounded-xl hover:bg-gray-50 transition"
                    >
                      <span className={`w-1.5 h-8 rounded-full ${
                        t.priority === 'High' ? 'bg-red-400' : t.priority === 'Medium' ? 'bg-amber-400' : 'bg-gray-300'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{t.title}</p>
                        <p className="text-xs text-gray-500 truncate">
                          {lead ? `${lead.name} · ${lead.company}` : 'Unassigned'}
                        </p>
                      </div>
                      <span className={`text-xs font-medium ${overdue ? 'text-red-600' : 'text-gray-500'}`}>
                        {overdue ? 'Overdue' : formatDate(t.due_at)}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </AppShell>
  );
}

function EmptyMini({ message, action }: { message: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mb-2">
        <ActivityIcon className="w-4 h-4" />
      </div>
      <p className="text-sm text-gray-500 mb-3">{message}</p>
      {action}
    </div>
  );
}