import { CircleAlert, CircleCheck, X } from 'lucide-react'
import { toast as sonner } from 'sonner'

import { cn } from '@/utils/cn'

type ToastProps = {
  id: string | number
  type?: 'success' | 'error'
  title?: string
  message: string
  closable?: boolean
}

export const Toast = ({ id, type, title, message, closable }: ToastProps) => {
  const handleDismissToast = () => {
    sonner.dismiss(id)
  }

  const Icon = type === 'error' ? CircleAlert : CircleCheck

  return (
    <div
      className={cn(
        'min-h-12 min-w-64 w-max max-w-96 rounded-md border p-4 bg-card flex items-center gap-2 overflow-hidden',
        type === 'error' && 'border-primary text-primary shadow-toast-error',
        type === 'success' && 'border-success text-success shadow-toast-success'
      )}
    >
      <Icon size={18} className={cn('min-w-[18px] min-h-[18px]', title && 'self-start')} />

      <div className="flex items-center gap-3 overflow-hidden">
        <div className="flex w-max flex-col gap-1 font-inter text-sm text-white">
          {title && <strong className="font-medium leading-[18px]">{title}</strong>}
          <p className="tracking-wide">{message}</p>
        </div>

        {closable && (
          <button
            type="button"
            className="flex min-h-6 min-w-6 items-center justify-center text-placeholder transition-colors hover:text-white"
            onClick={handleDismissToast}
            tabIndex={-1}
          >
            <X size={18} />
          </button>
        )}
      </div>
    </div>
  )
}
