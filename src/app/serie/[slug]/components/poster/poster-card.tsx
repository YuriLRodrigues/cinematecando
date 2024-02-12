import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type PosterCardProps = ComponentProps<'div'>

export const PosterCard = ({ className, ...props }: PosterCardProps) => {
  return (
    <div
      className={cn(
        'mx-auto h-full max-w-72 overflow-hidden rounded-xl md:mx-0 md:w-full',
        className,
      )}
      {...props}
    />
  )
}
