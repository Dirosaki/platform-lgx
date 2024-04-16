import { Eye, EyeOff } from 'lucide-react'
import { ComponentPropsWithoutRef, ForwardedRef, forwardRef, useState } from 'react'

import { cn } from '@/utils/cn'

type InputProps = ComponentPropsWithoutRef<'input'>

const InputBase = ({ type, className, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
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
          'peer w-full h-10 rounded-md border border-border bg-input px-3 text-sm text-white placeholder:text-placeholder outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 transition-all',
          isPasswordType && 'pr-12',
          className
        )}
        {...props}
        ref={ref}
      />

      {isPasswordType && (
        <button
          type="button"
          onClick={handleTogglePasswordVisibility}
          className="absolute right-0 top-0 flex size-10 items-center justify-center rounded-md text-placeholder outline-none transition-all hover:text-white focus-visible:ring-2 focus-visible:ring-primary peer-placeholder-shown:hidden"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  )
}

InputBase.displayName = 'Input'

export const Input = forwardRef(InputBase)
