import { ComponentPropsWithoutRef, ElementType } from 'react'

import { cn } from '@/utils/cn'

type CardProps<T extends ElementType> = ComponentPropsWithoutRef<T> & {
  as?: T
}

export const Card = <T extends ElementType>({ className, as, ...props }: CardProps<T>) => {
  const Element = as ?? 'div'

  return (
    <Element
      className={cn(
        'flex w-full max-w-[440px] flex-col items-start rounded-lg border border-border bg-card p-6 md:absolute md:top-1/2 md:-translate-y-1/2',
        className
      )}
      {...props}
    />
  )
}
