import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '@/components/AuthLayout';
import { useAuth } from '@/lib/store';
import { useToast } from '@/components/ui/Toast';

export default function SignupPage() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const toast = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = 'Your name is required';
    if (!/^\S+@\S+\.\S+$/.test(email)) e.email = 'Enter a valid email';
    if (password.length < 6) e.password = 'Password must be at least 6 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 500));
      signup(email, password, name);
      toast.success('Welcome to LeadPilot AI!', 'Demo data has been loaded for you.');
      navigate('/dashboard');
    } catch {
      toast.error('Signup failed', 'Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create your account"
      description="Free for 14 days. No credit card required."
      footer={
        <>
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-brand-600 hover:text-brand-700">Log in</Link>
        </>
      }
    >
      <form onSubmit={onSubmit} noValidate className="space-y-4">
        <div>
          <label className="label" htmlFor="name">Full name</label>
          <input
            id="name"
            type="text"
            className="input"
            placeholder="Alex Rivera"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-err' : undefined}
          />
          {errors.name && <p id="name-err" className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label className="label" htmlFor="email">Work email</label>
          <input
            id="email"
            type="email"
            className="input"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label className="label" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="input"
            placeholder="At least 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-invalid={!!errors.password}
          />
          {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
        </div>
        <button type="submit" disabled={loading} className="btn-primary w-full !py-3">
          {loading ? 'Creating your workspace…' : 'Create account'}
        </button>
        <p className="text-xs text-gray-500 text-center pt-1">
          By creating an account you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
        </p>
      </form>
    </AuthLayout>
  );
}