import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Zap, Menu, X, LayoutDashboard, BookOpen, MessageCircle, User, LogOut, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const NAV_LINKS = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/learn/video-editing', label: 'Seekho', icon: BookOpen },
  { path: '/chat', label: 'AI Coach', icon: MessageCircle },
  { path: '/profile', label: 'Profile', icon: User },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-brand-black/95 backdrop-blur border-b border-brand-gray-mid">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-brand-black" fill="currentColor" />
          </div>
          <span className="font-black text-white text-base">
            Skill<span className="text-brand-yellow">ForBharat</span>
          </span>
        </Link>

        {/* Desktop nav */}
        {user && (
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  pathname === path
                    ? 'bg-brand-yellow text-brand-black'
                    : 'text-gray-400 hover:text-white hover:bg-brand-gray-dark'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </Link>
            ))}
          </div>
        )}

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
                <div className="w-7 h-7 bg-brand-yellow/20 border border-brand-yellow/40 rounded-full flex items-center justify-center text-brand-yellow font-bold text-xs">
                  {(user.user_metadata?.display_name as string)?.[0]?.toUpperCase() ?? user.email?.[0]?.toUpperCase() ?? 'U'}
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-brand-gray-dark transition-all"
              >
                <LogOut className="w-3.5 h-3.5" />
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="hidden md:flex items-center gap-1.5 px-4 py-1.5 bg-brand-yellow text-brand-black font-bold text-sm rounded-lg hover:bg-brand-yellow-dark transition-all"
            >
              <LogIn className="w-3.5 h-3.5" />
              Login
            </Link>
          )}

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-gray-dark border-t border-brand-gray-mid px-4 py-3 space-y-1">
          {user ? (
            <>
              {NAV_LINKS.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all ${
                    pathname === path
                      ? 'bg-brand-yellow text-brand-black'
                      : 'text-gray-300 hover:bg-brand-gray-mid'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              ))}
              <button
                onClick={handleSignOut}
                className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-red-400 hover:bg-brand-gray-mid transition-all"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-brand-yellow text-brand-black font-bold rounded-xl text-sm"
            >
              <LogIn className="w-4 h-4" />
              Login / Signup
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}