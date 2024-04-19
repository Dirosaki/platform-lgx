import { CircleAlert, CircleCheck, X } from 'lucide-react'
import { toast as sonner } from 'sonner'

import { cn } from '@/utils/cn'

type ToastProps = {
  id: number | string
  type?: 'error' | 'success'
  title?: string
  message: string
  isClosable?: boolean
}

export const Toast = ({ id, type, title, message, isClosable }: ToastProps) => {
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
      <Icon className={cn('min-w-[18px] min-h-[18px]', title && 'self-start')} size={18} />

      <div className="flex items-center gap-3 overflow-hidden">
        <div className="flex w-max flex-col gap-1 font-inter text-sm text-white">
          {title && <strong className="font-medium leading-[18px]">{title}</strong>}
          <p className="tracking-wide">{message}</p>
        </div>

        {isClosable && (
          <button
            aria-label="Fechar notificação"
            className="flex min-h-6 min-w-6 items-center justify-center text-placeholder transition-colors hover:text-white"
            tabIndex={-1}
            type="button"
            onClick={handleDismissToast}
          >
            <X size={18} />
          </button>
        )}
      </div>
    </div>
  )
}
