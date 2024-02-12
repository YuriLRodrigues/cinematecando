import Image from 'next/image'
import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type CardImageProps = ComponentProps<typeof Image>

export const CardImage = ({
  className,
  src,
  width,
  height,
  ...props
}: CardImageProps) => {
  return (
    <Image
      className={cn(
        'h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105',
        className,
      )}
      src={`${src ? `https://image.tmdb.org/t/p/w500${src}` : '/default-movie-card.png'}`}
      width={width || 500}
      height={height || 750}
      {...props}
    />
  )
}
