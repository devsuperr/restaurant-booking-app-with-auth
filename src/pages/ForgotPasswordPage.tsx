import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import AuthLayout from '@/components/AuthLayout';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErr('Enter a valid email');
      return;
    }
    setErr('');
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    setSent(true);
  };

  return (
    <AuthLayout
      title="Reset your password"
      description={sent ? 'Check your email for a reset link.' : 'Enter the email tied to your account.'}
      footer={
        <>
          Remembered it?{' '}
          <Link to="/login" className="font-medium text-brand-600 hover:text-brand-700">Back to login</Link>
        </>
      }
    >
      {sent ? (
        <div className="text-center py-6">
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Email sent</h3>
          <p className="text-sm text-gray-500">If <strong>{email}</strong> matches an account, you'll receive a reset link within 60 seconds.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate className="space-y-4">
          <div>
            <label className="label" htmlFor="email">Email</label>
            <input id="email" type="email" className="input" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            {err && <p className="mt-1 text-xs text-red-600">{err}</p>}
          </div>
          <button type="submit" disabled={loading} className="btn-primary w-full !py-3">
            {loading ? 'Sending…' : 'Send reset link'}
          </button>
        </form>
      )}
    </AuthLayout>
  );
}