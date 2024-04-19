import { ComponentProps } from 'react'

import { cn } from '@/utils/cn'

type GroupProps = ComponentProps<'div'>

export const Group = ({ className, ...props }: GroupProps) => (
  <div className={cn('flex w-full flex-col gap-[6px] [&+&]:mt-4', className)} {...props} />
)
