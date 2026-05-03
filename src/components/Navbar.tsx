import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Zap, Menu, X, LayoutDashboard, BookOpen, MessageCircle, User, LogOut, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const NAV_LINKS = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/learn/video-editing', label: 'Learn', icon: BookOpen },
  { href: '/chat', label: 'AI Coach', icon: MessageCircle },
  { href: '/profile', label: 'Profile', icon: User },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const isActive = (href: string) =>
    location.pathname === href || location.pathname.startsWith(href.split('/')[1] ? '/' + href.split('/')[1] : href);

  return (
    <nav className="sticky top-0 z-50 bg-brand-black/90 backdrop-blur-md border-b border-brand-gray-mid">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
            <Zap className="w-4 h-4 text-brand-black" fill="currentColor" />
          </div>
          <span className="font-black text-white text-lg">
            Skill<span className="text-brand-yellow">ForBharat</span>
          </span>
        </Link>

        {/* Desktop links */}
        {user && (
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                to={href}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(href)
                    ? 'bg-brand-yellow/15 text-brand-yellow'
                    : 'text-gray-400 hover:text-white hover:bg-brand-gray-dark'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ))}
          </div>
        )}

        {/* Right side */}
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <button
                onClick={handleSignOut}
                className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-brand-gray-dark transition-all"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
              <button
                className="md:hidden p-2 text-gray-400 hover:text-white"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login" className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-brand-gray-dark transition-all">
                <LogIn className="w-4 h-4" />
                Login
              </Link>
              <Link to="/signup" className="bg-brand-yellow text-brand-black font-bold px-4 py-2 rounded-lg text-sm hover:bg-brand-yellow-dark transition-all">
                FREE Start
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && user && (
        <div className="md:hidden bg-brand-gray-dark border-t border-brand-gray-mid px-4 py-3 space-y-1">
          {NAV_LINKS.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              to={href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive(href) ? 'bg-brand-yellow/15 text-brand-yellow' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-red-400 hover:bg-red-500/10 w-full text-left"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}