import { useToast } from '../../contexts/ToastContext';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ToastContainer() {
  const { toasts, dismiss } = useToast();

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map(t => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl shadow-lift min-w-[280px] max-w-sm border ${
              t.type === 'success'
                ? 'bg-white border-green-100 text-green-800'
                : t.type === 'error'
                ? 'bg-white border-red-100 text-red-800'
                : 'bg-white border-accent-100 text-accent-700'
            }`}
          >
            {t.type === 'success' && <CheckCircle size={16} className="text-green-500 shrink-0" />}
            {t.type === 'error' && <AlertCircle size={16} className="text-red-500 shrink-0" />}
            {t.type === 'info' && <Info size={16} className="text-accent-500 shrink-0" />}
            <p className="text-sm font-medium flex-1">{t.message}</p>
            <button
              onClick={() => dismiss(t.id)}
              className="text-ink-300 hover:text-ink-600 transition-colors"
              aria-label="Dismiss"
            >
              <X size={14} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}