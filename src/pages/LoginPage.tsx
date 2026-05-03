import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Mail, Lock, Eye, EyeOff, AlertCircle, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const { error: authError } = await signIn(email, password);
    setLoading(false);
    if (authError) {
      setError('Email ya password galat hai. Dobara try karo! 🙏');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center px-4 py-16">
      {/* Brand */}
      <Link to="/" className="flex items-center gap-2 mb-8">
        <div className="w-9 h-9 bg-brand-yellow rounded-xl flex items-center justify-center">
          <Zap className="w-5 h-5 text-brand-black" fill="currentColor" />
        </div>
        <span className="font-black text-white text-xl">Skill<span className="text-brand-yellow">ForBharat</span></span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-white mb-2">Wapas Aao! 👋</h1>
          <p className="text-gray-400">Login karo aur seekhna shuru karo</p>
        </div>

        <div className="card-dark p-7">
          {error && (
            <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-4 py-3 mb-5 text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="tumhara@email.com"
                  className="w-full bg-brand-gray-mid border border-brand-gray-light text-white placeholder-gray-600 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-brand-yellow transition-colors"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-gray-300" htmlFor="password">
                  Password
                </label>
                <Link to="/forgot-password" className="text-xs text-brand-yellow hover:underline">
                  Bhool gaye?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Apna password dalो"
                  className="w-full bg-brand-gray-mid border border-brand-gray-light text-white placeholder-gray-600 rounded-xl pl-10 pr-10 py-3 text-sm focus:outline-none focus:border-brand-yellow transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-brand-yellow text-brand-black font-black py-3.5 rounded-xl hover:bg-brand-yellow-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed text-base yellow-glow-sm mt-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-brand-black border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  Login Karo
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-5">
            Account nahi hai?{' '}
            <Link to="/signup" className="text-brand-yellow font-semibold hover:underline">
              FREE mein banao
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}