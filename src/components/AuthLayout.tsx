import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

export default function AuthLayout({
  title,
  description,
  children,
  footer,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50/40">
      <header className="px-6 lg:px-8 h-16 flex items-center">
        <Link to="/" className="flex items-center gap-2.5">
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
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
            {description && <p className="mt-2 text-sm text-gray-500">{description}</p>}
          </div>
          <div className="card p-6 md:p-8">{children}</div>
          {footer && <div className="mt-6 text-center text-sm text-gray-500">{footer}</div>}
        </div>
      </main>
    </div>
  );
}