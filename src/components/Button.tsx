import { VariantProps, cva } from 'class-variance-authority'
import { LoaderCircle } from 'lucide-react'
import { ComponentProps } from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = ComponentProps<'button'> & {
  isLoading?: boolean
  as?: 'button'
}

type ExternalLinkProps = ComponentProps<'a'> & {
  as: 'external-link'
}

type InternalLinkProps = ComponentProps<typeof Link> & {
  as: 'internal-link'
}

type Props = VariantProps<typeof variants> & (ButtonProps | ExternalLinkProps | InternalLinkProps)

export const variants = cva(
  'flex h-10 w-full items-center justify-center rounded-md px-6 font-medium text-white outline-none transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card disabled:cursor-not-allowed disabled:opacity-50 md:h-11',
  {
    variants: {
      variant: {
        primary: 'bg-primary hover:enabled:bg-primary-600',
        secondary: `group relative border border-border bg-input before:absolute before:-bottom-px before:left-0 before:z-10 before:h-px before:w-full before:bg-gradient-to-r before:from-primary/0 before:via-primary before:to-primary/0 before:opacity-0 before:transition-all focus-visible:before:opacity-0
          [&:not(:focus-visible,:disabled)]:hover:before:opacity-100`,
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

export const Button = (props: Props) => {
  const { as } = props

  if (as === 'internal-link') {
    const { variant, className, ...rest } = props

    return <Link className={variants({ variant, className })} {...rest} />
  }

  if (as === 'external-link') {
    const { variant, className, children, ...rest } = props

    return (
      <a className={variants({ variant, className })} {...rest}>
        {children}
      </a>
    )
  }

  const { variant, type, className, isLoading = false, disabled, children, ...rest } = props

  return (
    <button
      className={variants({ variant, className })}
      disabled={isLoading || disabled}
      type={type === 'submit' ? 'submit' : 'button'}
      {...rest}
    >
      {isLoading ? <LoaderCircle className="animate-spin duration-700" /> : children}
    </button>
  )
}
