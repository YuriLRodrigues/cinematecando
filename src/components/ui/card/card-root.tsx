import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type CardRootProps = ComponentProps<'div'>

export const CardRoot = ({ className, ...props }: CardRootProps) => {
  return (
    <div
      className={cn(
        'group relative cursor-pointer overflow-hidden rounded-lg border',
        className,
      )}
      {...props}
    />
  )
}
