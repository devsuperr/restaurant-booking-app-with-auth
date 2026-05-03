import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BookOpen, MessageCircle, User, Menu, X, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

const NAV_ITEMS = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/learn/video-editing', label: 'Seekho', icon: BookOpen },
  { path: '/chat', label: 'AI Coach', icon: MessageCircle },
  { path: '/profile', label: 'Profile', icon: User },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith('/learn') && path.startsWith('/learn');

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black/95 backdrop-blur-xl border-b border-brand-gray-mid">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-brand-black" fill="currentColor" />
            </div>
            <span className="font-black text-lg text-white">
              Skill<span className="text-brand-yellow">ForBharat</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all',
                  isActive(path)
                    ? 'bg-brand-yellow text-brand-black'
                    : 'text-gray-400 hover:text-white hover:bg-brand-gray-dark'
                )}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-brand-gray-dark border-t border-brand-gray-mid px-4 py-3 flex flex-col gap-2">
            {NAV_ITEMS.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all',
                  isActive(path)
                    ? 'bg-brand-yellow text-brand-black'
                    : 'text-gray-400 hover:text-white hover:bg-brand-gray-light'
                )}
              >
                <Icon className="w-5 h-5" />
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-brand-gray-dark border-t border-brand-gray-mid">
        <div className="grid grid-cols-4 h-16">
          {NAV_ITEMS.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={cn(
                'flex flex-col items-center justify-center gap-1 transition-all',
                isActive(path) ? 'text-brand-yellow' : 'text-gray-500'
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}