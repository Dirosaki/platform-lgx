import { ComponentProps } from 'react'

import { cn } from '@/utils/cn'

type LabelProps = ComponentProps<'label'>

export const Label = ({ className, htmlFor, ...props }: LabelProps) => (
  <label
    className={cn('inline-flex self-start text-sm text-white', className)}
    htmlFor={htmlFor}
    {...props}
  />
)
