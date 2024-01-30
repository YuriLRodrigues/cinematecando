import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type SlideButtonProps = ComponentProps<'button'>

export const SlideButton = ({ className, ...props }: SlideButtonProps) => {
  return (
    <button
      className={cn(
        'flex h-10 w-10 items-center justify-center rounded-full bg-dark-blue-main text-blue-main-highlight',
        className,
      )}
      {...props}
    />
  )
}
