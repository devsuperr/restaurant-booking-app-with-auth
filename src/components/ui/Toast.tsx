import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { cn } from '@/lib/utils';

type ToastKind = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  kind: ToastKind;
  title: string;
  description?: string;
}

interface ToastContextValue {
  toast: (t: Omit<Toast, 'id'>) => void;
  success: (title: string, description?: string) => void;
  error: (title: string, description?: string) => void;
  info: (title: string, description?: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((t) => t.filter((x) => x.id !== id));
  }, []);

  const toast = useCallback(
    (t: Omit<Toast, 'id'>) => {
      const id = Math.random().toString(36).slice(2);
      setToasts((cur) => [...cur, { ...t, id }]);
      setTimeout(() => dismiss(id), 4200);
    },
    [dismiss],
  );

  const value: ToastContextValue = {
    toast,
    success: (title, description) => toast({ kind: 'success', title, description }),
    error: (title, description) => toast({ kind: 'error', title, description }),
    info: (title, description) => toast({ kind: 'info', title, description }),
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-2 w-[min(380px,calc(100vw-2rem))]">
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} onDismiss={() => dismiss(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function ToastItem({ toast, onDismiss }: { toast: Toast; onDismiss: () => void }) {
  const Icon = toast.kind === 'success' ? CheckCircle2 : toast.kind === 'error' ? AlertCircle : Info;
  return (
    <div
      className={cn(
        'animate-slide-up bg-white border rounded-2xl shadow-lifted p-4 flex items-start gap-3',
        toast.kind === 'success' && 'border-emerald-200',
        toast.kind === 'error' && 'border-red-200',
        toast.kind === 'info' && 'border-brand-200',
      )}
    >
      <Icon
        className={cn(
          'w-5 h-5 mt-0.5 flex-shrink-0',
          toast.kind === 'success' && 'text-emerald-600',
          toast.kind === 'error' && 'text-red-600',
          toast.kind === 'info' && 'text-brand-600',
        )}
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900">{toast.title}</p>
        {toast.description && <p className="text-xs text-gray-500 mt-0.5">{toast.description}</p>}
      </div>
      <button onClick={onDismiss} className="text-gray-400 hover:text-gray-700 transition" aria-label="Dismiss">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}