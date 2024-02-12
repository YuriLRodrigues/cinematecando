import { tv } from 'tailwind-variants'

export const TextVariant = tv({
  variants: {
    variant: {
      title: 'text-muted-12',
      subtitle: 'text-muted-11',
      highlight: 'text-blue-main-highlight',
    },
    bold: {
      true: 'font-bold',
      false: 'font-normal',
    },
    size: {
      '3xs': 'text-[0.4rem] sm:text-[0.5rem]',
      '2xs': 'text-[0.5rem] sm:text-[0.65rem]',
      xs: 'text-[0.65rem] sm:text-xs',
      sm: 'text-xs sm:text-sm',
      bs: 'text-sm sm:text-base',
      md: 'text-base sm:text-md',
      lg: 'text-md sm:text-lg',
      xl: 'text-lg sm:text-xl',
      xgg: 'text-xl sm:text-2xl',
    },
    position: {
      centered: 'mx-auto text-center',
      left: 'mr-left text-start',
      right: 'ml-right text-end',
    },
    align: {
      justify: 'text-justify',
      right: 'text-right',
      left: 'text-start',
    },
  },
  defaultVariants: {
    size: 'bs',
    position: 'left',
    align: 'left',
    variant: 'title',
    bold: false,
  },
})
