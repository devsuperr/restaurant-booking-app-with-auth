import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Zap, Menu, X, LayoutDashboard, BookOpen, MessageCircle, User, LogOut } from 'lucide-react';
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
    setMenuOpen(false);
  };

  const isActive = (href: string) =>
    location.pathname === href || (href !== '/' && location.pathname.startsWith(href.split('/').slice(0, 2).join('/')));

  return (
    <nav className="sticky top-0 z-50 bg-brand-black/90 backdrop-blur-md border-b border-brand-gray-mid">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-brand-black" fill="currentColor" />
          </div>
          <span className="font-black text-white text-lg">
            Skill<span className="text-brand-yellow">ForBharat</span>
          </span>
        </Link>

        {/* Desktop nav */}
        {user && (
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                to={href}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(href)
                    ? 'bg-brand-yellow/15 text-brand-yellow'
                    : 'text-gray-400 hover:text-white hover:bg-brand-gray-mid'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ))}
            <button
              onClick={handleSignOut}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all ml-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        )}

        {!user && (
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-brand-yellow text-brand-black font-bold px-4 py-2 rounded-xl text-sm hover:bg-brand-yellow-dark transition-all"
            >
              FREE Mein Shuru Karo
            </Link>
          </div>
        )}

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-400 hover:text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-gray-dark border-t border-brand-gray-mid px-4 py-4 space-y-2">
          {user
            ? NAV_LINKS.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  to={href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive(href) ? 'bg-brand-yellow/15 text-brand-yellow' : 'text-gray-300 hover:bg-brand-gray-light'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              ))
            : null}
          {user ? (
            <button
              onClick={handleSignOut}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-all"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)} className="flex items-center px-4 py-3 rounded-xl text-gray-300 text-sm font-medium hover:bg-brand-gray-light">
                Login
              </Link>
              <Link to="/signup" onClick={() => setMenuOpen(false)} className="flex items-center justify-center px-4 py-3 rounded-xl bg-brand-yellow text-brand-black text-sm font-bold">
                FREE Mein Shuru Karo
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}