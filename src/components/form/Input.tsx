import { Eye, EyeOff } from 'lucide-react'
import { ComponentPropsWithoutRef, ForwardedRef, forwardRef, useState } from 'react'

import { cn } from '@/utils/cn'

type InputProps = ComponentPropsWithoutRef<'input'>

const InputBase = (
  { type, className, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  const isPasswordType = type === 'password'

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? 'text' : type}
        className={cn(
          'peer w-full h-10 rounded-md border border-border bg-input px-3 text-sm text-white placeholder:text-placeholder outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 transition-all md:h-11',
          isPasswordType && '[&:not(:placeholder-shown)]:pr-12',
          className
        )}
        {...props}
        ref={ref}
      />

      {!!isPasswordType && (
        <button
          className="absolute right-0 top-0 flex size-10 items-center justify-center rounded-md text-placeholder transition-all hover:text-white peer-placeholder-shown:hidden md:size-11"
          tabIndex={-1}
          type="button"
          onClick={() => {
            handleTogglePasswordVisibility()
          }}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  )
}

InputBase.displayName = 'Input'

export const Input = forwardRef(InputBase)
