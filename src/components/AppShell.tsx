import { type ReactNode, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  ListChecks,
  Sparkles,
  Settings,
  Search,
  Bell,
  Menu,
  X,
  LogOut,
  Plus,
} from 'lucide-react';
import { cn, initials } from '@/lib/utils';
import { useUser, useAuth } from '@/lib/store';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/leads', label: 'Leads', icon: Users },
  { to: '/tasks', label: 'Tasks', icon: ListChecks },
  { to: '/ai-generator', label: 'AI Follow-up', icon: Sparkles },
  { to: '/settings', label: 'Settings', icon: Settings },
];

export default function AppShell({ children, title, action }: { children: ReactNode; title?: string; action?: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [user] = useUser();
  const { logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50/50 flex">
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed md:sticky top-0 left-0 z-50 h-screen w-64 bg-white border-r border-gray-100 flex flex-col transition-transform md:translate-x-0',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="px-5 h-16 flex items-center justify-between border-b border-gray-100">
          <Link to="/dashboard" className="flex items-center gap-2.5">
            <span className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
              <span className="absolute inset-0 bg-gradient-to-br from-brand-500 to-brand-700" />
              <svg viewBox="0 0 24 24" className="relative w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </span>
            <span className="font-bold text-[15px] tracking-tight">
              LeadPilot<span className="text-brand-600">.ai</span>
            </span>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="md:hidden text-gray-400 hover:text-gray-700"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          <Link
            to="/leads/new"
            className="flex items-center gap-2 mb-3 px-3 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition shadow-soft"
            onClick={() => setMobileOpen(false)}
          >
            <Plus className="w-4 h-4" />
            New lead
          </Link>
          {navItems.map(({ to, label, icon: Icon }) => {
            const active = location.pathname === to || location.pathname.startsWith(to + '/');
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition',
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                )}
              >
                <Icon className={cn('w-4 h-4', active ? 'text-brand-600' : 'text-gray-400')} />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-gray-100">
          <Link
            to="/profile"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white text-xs font-semibold">
              {initials(user.name)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
              <p className="text-xs text-gray-500 truncate">{user.email}</p>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleLogout();
              }}
              className="text-gray-400 hover:text-gray-700 transition"
              aria-label="Log out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </aside>

      {/* Main area */}
      <main className="flex-1 min-w-0 flex flex-col">
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-100 h-16 px-4 md:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-gray-600 hover:text-gray-900"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            {title && <h1 className="text-base md:text-lg font-semibold text-gray-900 truncate">{title}</h1>}
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-100 text-sm text-gray-400 w-72">
              <Search className="w-4 h-4" />
              <span>Search leads, tasks…</span>
              <kbd className="ml-auto text-xs bg-white border border-gray-200 rounded px-1.5 py-0.5 text-gray-500">⌘K</kbd>
            </div>
            <button className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 transition" aria-label="Notifications">
              <Bell className="w-4 h-4" />
            </button>
            {action}
          </div>
        </header>
        <div className="flex-1 p-4 md:p-8">{children}</div>
      </main>
    </div>
  );
}