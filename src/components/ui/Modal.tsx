import { type ReactNode, useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function Modal({ open, onClose, title, description, children, footer, size = 'md' }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div
          role="dialog"
          aria-modal="true"
          className={cn(
            'relative bg-white rounded-2xl shadow-lifted w-full animate-slide-up',
            size === 'sm' && 'max-w-sm',
            size === 'md' && 'max-w-lg',
            size === 'lg' && 'max-w-2xl',
          )}
        >
          {(title || description) && (
            <div className="px-6 pt-6 pb-2">
              <div className="flex items-start justify-between gap-4">
                <div>
                  {title && <h3 className="text-lg font-semibold text-gray-900">{title}</h3>}
                  {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-700 transition -mt-1 -mr-1"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
          {children && <div className="px-6 py-4">{children}</div>}
          {footer && <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-end gap-2">{footer}</div>}
        </div>
      </div>
    </div>
  );
}

interface ConfirmModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  destructive?: boolean;
}

export function ConfirmModal({
  open,
  onClose,
  onConfirm,
  title,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  destructive = false,
}: ConfirmModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title}
      description={description}
      size="sm"
      footer={
        <>
          <button onClick={onClose} className="btn-secondary">
            {cancelLabel}
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className={destructive ? 'btn-danger' : 'btn-primary'}
          >
            {confirmLabel}
          </button>
        </>
      }
    />
  );
}