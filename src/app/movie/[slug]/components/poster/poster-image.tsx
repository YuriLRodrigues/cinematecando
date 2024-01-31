import Image from 'next/image'
import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type PosterImageProps = ComponentProps<typeof Image>

export const PosterImage = ({
  className,
  src,
  width,
  height,
  ...props
}: PosterImageProps) => {
  return (
    <Image
      className={cn('h-full w-full object-cover object-center', className)}
      src={`https://image.tmdb.org/t/p/w500${src}`}
      width={width || 500}
      height={height || 750}
      {...props}
    />
  )
}
