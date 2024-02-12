import { ComponentProps } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

import { cn } from '@/lib/utils'

import { SlideButton } from '../ui/slide-button'

type SlideButtonsProps = ComponentProps<'div'> & {
  prev: () => void
  next: () => void
}

export const PrevNextSlideButtons = ({
  next,
  prev,
  className,
  ...props
}: SlideButtonsProps) => {
  return (
    <div
      className={cn(
        'absolute -top-0 right-3 z-[30] flex w-fit items-center justify-center gap-3 duration-300',
        className,
      )}
      {...props}
    >
      <SlideButton onClick={prev}>
        <BiLeftArrow />
      </SlideButton>
      <SlideButton onClick={next}>
        <BiRightArrow />
      </SlideButton>
    </div>
  )
}
