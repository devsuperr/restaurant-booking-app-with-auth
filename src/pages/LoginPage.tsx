import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '@/components/AuthLayout';
import { useAuth } from '@/lib/store';
import { useToast } from '@/components/ui/Toast';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const toast = useToast();
  const [email, setEmail] = useState('demo@northwind.studio');
  const [password, setPassword] = useState('demo1234');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const eMap: Record<string, string> = {};
    if (!/^\S+@\S+\.\S+$/.test(email)) eMap.email = 'Enter a valid email';
    if (!password) eMap.password = 'Password is required';
    setErrors(eMap);
    if (Object.keys(eMap).length) return;

    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 400));
      login(email, password);
      toast.success('Welcome back!');
      navigate('/dashboard');
    } catch {
      toast.error('Login failed', 'Check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      description="Log in to your LeadPilot workspace."
      footer={
        <>
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-brand-600 hover:text-brand-700">Sign up free</Link>
        </>
      }
    >
      <div className="mb-4 px-3 py-2 rounded-lg bg-brand-50 border border-brand-100 text-xs text-brand-700">
        <strong>Demo mode:</strong> any email + password works. We've pre-filled credentials for you.
      </div>
      <form onSubmit={onSubmit} noValidate className="space-y-4">
        <div>
          <label className="label" htmlFor="email">Email</label>
          <input id="email" type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={!!errors.email} />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label className="label !mb-0" htmlFor="password">Password</label>
            <Link to="/forgot-password" className="text-xs font-medium text-brand-600 hover:text-brand-700">Forgot?</Link>
          </div>
          <input id="password" type="password" className="input mt-1.5" value={password} onChange={(e) => setPassword(e.target.value)} aria-invalid={!!errors.password} />
          {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
        </div>
        <button type="submit" disabled={loading} className="btn-primary w-full !py-3">
          {loading ? 'Logging in…' : 'Log in'}
        </button>
      </form>
    </AuthLayout>
  );
}