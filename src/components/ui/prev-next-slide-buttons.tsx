import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

import { SlideButton } from '../ui/slide-button'

type SlideButtonsProps = {
  prev: () => void
  next: () => void
}

export const PrevNextSlideButtons = ({ next, prev }: SlideButtonsProps) => {
  return (
    <div className="absolute bottom-3 right-3 z-[30] flex w-fit items-center justify-center gap-3 duration-300">
      <SlideButton onClick={prev}>
        <BiLeftArrow />
      </SlideButton>
      <SlideButton onClick={next}>
        <BiRightArrow />
      </SlideButton>
    </div>
  )
}
