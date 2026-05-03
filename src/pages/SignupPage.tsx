import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Mail, Lock, User, Eye, EyeOff, ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function SignupPage() {
  const navigate = useNavigate();
  const { signUp, signInWithGoogle } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validatePassword = (p: string) => p.length >= 8;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!name.trim()) { setError('Apna naam likho.'); return; }
    if (!email) { setError('Email address daalo.'); return; }
    if (!validatePassword(password)) { setError('Password kam se kam 8 characters ka hona chahiye.'); return; }

    setLoading(true);
    const { error: err } = await signUp(email, password, name.trim());
    setLoading(false);

    if (err) {
      if (err.includes('already registered') || err.includes('already exists')) {
        setError('Yeh email already registered hai. Login karo ya dusra email use karo.');
      } else {
        setError(err);
      }
    } else {
      setSuccess(true);
    }
  };

  const handleGoogle = async () => {
    setGoogleLoading(true);
    const { error: err } = await signInWithGoogle();
    setGoogleLoading(false);
    if (err) setError('Google login abhi available nahi. Email se try karo.');
  };

  if (success) {
    return (
      <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md card-dark p-8 text-center"
        >
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-2xl font-black text-white mb-2">Account Ban Gaya!</h2>
          <p className="text-gray-400 mb-4">
            Tumhare email <span className="text-brand-yellow">{email}</span> pe ek confirmation link bheja gaya hai.
          </p>
          <div className="bg-brand-yellow/10 border border-brand-yellow/30 rounded-xl p-4 mb-6 text-sm text-brand-yellow">
            📧 Email check karo aur link pe click karke account verify karo. Phir login karo!
          </div>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 bg-brand-yellow text-brand-black font-black px-6 py-3 rounded-xl hover:bg-brand-yellow-dark transition-all"
          >
            Login Page Pe Jao
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center px-4 py-12">
      {/* Brand */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <Link to="/" className="inline-flex items-center gap-2 mb-4">
          <div className="w-10 h-10 bg-brand-yellow rounded-xl flex items-center justify-center yellow-glow">
            <Zap className="w-5 h-5 text-brand-black" fill="currentColor" />
          </div>
          <span className="font-black text-2xl text-white">
            Skill<span className="text-brand-yellow">ForBharat</span>
          </span>
        </Link>
        <h1 className="text-2xl font-black text-white">Aaj Se Shuru Karo! 🚀</h1>
        <p className="text-gray-400 text-sm mt-1">FREE account banao – 7 din mein earning start karo</p>
      </motion.div>

      {/* Benefits bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.05 }}
        className="flex items-center gap-4 flex-wrap justify-center mb-6"
      >
        {['100% Free', 'Hindi + English', 'Instant Start'].map(b => (
          <div key={b} className="flex items-center gap-1.5 text-xs text-green-400">
            <CheckCircle className="w-3.5 h-3.5" />
            {b}
          </div>
        ))}
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="w-full max-w-md card-dark p-7"
      >
        {/* Google button */}
        <button
          onClick={handleGoogle}
          disabled={googleLoading}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all mb-5 disabled:opacity-50"
        >
          {googleLoading ? (
            <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          )}
          Google se Signup Karo
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-brand-gray-light" />
          <span className="text-gray-500 text-xs">ya email se</span>
          <div className="flex-1 h-px bg-brand-gray-light" />
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-4 py-3 mb-4 text-sm">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="name">
              Tumhara Naam
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Jaise – Rahul Kumar"
                className="w-full bg-brand-gray-mid border border-brand-gray-light text-white placeholder-gray-600 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-brand-yellow transition-colors"
              />
            </div>
          </div>

          {/* Email */}
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

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                required
                minLength={8}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Kam se kam 8 characters"
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
            {password.length > 0 && (
              <div className={`flex items-center gap-1 mt-1 text-xs ${validatePassword(password) ? 'text-green-400' : 'text-red-400'}`}>
                {validatePassword(password) ? <CheckCircle className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                {validatePassword(password) ? 'Password strong hai ✓' : `${8 - password.length} aur characters chahiye`}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-brand-yellow text-brand-black font-black py-3.5 rounded-xl hover:bg-brand-yellow-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed text-base yellow-glow-sm"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-brand-black border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                FREE Account Banao
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-5">
          Already account hai?{' '}
          <Link to="/login" className="text-brand-yellow font-semibold hover:underline">
            Login Karo
          </Link>
        </p>
      </motion.div>

      <p className="text-gray-600 text-xs mt-6 text-center max-w-xs">
        Register karke tum hamare Terms aur Privacy Policy se agree karte ho. Koi spam nahi! 🙏
      </p>
    </div>
  );
}