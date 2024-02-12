import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type ContainerCardProps = ComponentProps<'div'>

export const ContainerCard = ({ className, ...props }: ContainerCardProps) => {
  return (
    <div
      className={cn(
        'mx-auto grid w-full grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6',
        className,
      )}
      {...props}
    />
  )
}
