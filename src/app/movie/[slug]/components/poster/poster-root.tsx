import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type PosterRootProps = ComponentProps<'div'>

export const PosterRoot = ({ className, ...props }: PosterRootProps) => {
  return (
    <div
      className={cn(
        'mx-auto my-6 grid w-full grid-cols-1 gap-10 px-2 md:grid-cols-4 md:px-0 lg:pl-16',
        className,
      )}
      {...props}
    />
  )
}
