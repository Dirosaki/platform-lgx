import { cva, VariantProps } from 'class-variance-authority'
import { LoaderCircle } from 'lucide-react'
import { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof variants> & {
    isLoading?: boolean
  }

export const variants = cva(
  'flex h-10 w-full items-center justify-center rounded-md px-6 font-medium text-white outline-none transition-all focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50 md:h-11',
  {
    variants: {
      variant: {
        primary: 'bg-primary enabled:hover:bg-primary-600',
        secondary:
          'group relative border border-border bg-input before:absolute before:-bottom-px before:left-0 before:z-10 before:h-px before:w-full before:bg-gradient-to-r before:from-primary/0 before:from-10% before:via-primary before:to-primary/0 before:to-90% focus-visible:before:via-primary/0 enabled:hover:border-primary',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

export const Button = ({
  disabled,
  isLoading = false,
  variant,
  className,
  children,
  ...props
}: ButtonProps) => (
  <button
    className={variants({ variant, className })}
    disabled={isLoading || disabled}
    type="button"
    {...props}
  >
    {isLoading ? <LoaderCircle className="animate-spin duration-700" /> : children}
  </button>
)
