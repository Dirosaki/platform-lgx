import { toast as sonner } from 'sonner'

import { Toast } from '@/components/Toast'

type Options = {
  title?: string
  closable?: boolean
  duration?: number | undefined
}

type ToastFn = {
  error: (message: string, options?: Options) => string | number
  success: (message: string, options?: Options) => string | number
}

export const toast: ToastFn = {
  error: (message, options = {}) => {
    const type = 'error'
    const { title, closable, ...toastOptions } = options

    return sonner.custom(
      (id) => <Toast id={id} type={type} title={title} message={message} closable={closable} />,
      toastOptions
    )
  },
  success: (message, options = {}) => {
    const type = 'success'
    const { title, closable, ...toastOptions } = options

    return sonner.custom(
      (id) => <Toast id={id} type={type} title={title} message={message} closable={closable} />,
      toastOptions
    )
  },
}
