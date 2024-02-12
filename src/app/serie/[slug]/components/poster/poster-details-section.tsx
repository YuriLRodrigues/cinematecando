import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type PosterDetailsSectionProps = ComponentProps<'section'>

export const PosterDetailsSection = ({
  className,
  ...props
}: PosterDetailsSectionProps) => {
  return (
    <section
      className={cn(
        'flex h-full w-full flex-col space-y-7 md:col-span-3',
        className,
      )}
      {...props}
    />
  )
}
