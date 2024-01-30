'use client'
import Image from 'next/image'
import { ComponentProps, useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

type ImageBlurLoadingProps = ComponentProps<typeof Image>

export const ImageBlurLoading = ({
  className,
  ...props
}: ImageBlurLoadingProps) => {
  const [isLoaded, setIsLoded] = useState<boolean>(false)

  useEffect(() => {
    setIsLoded(true)
  }, [])

  return (
    <Image
      className={cn(
        'scale-110 animate-pulse blur-lg',
        `${isLoaded} && scale-100 animate-none blur-none`,
        className,
      )}
      priority
      quality={100}
      {...props}
    />
  )
}
