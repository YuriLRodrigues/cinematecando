import { tv } from 'tailwind-variants'

export const HeadingVariants = tv({
  base: ['font-bold tracking-tight'],
  variants: {
    variant: {
      title: 'text-muted-12',
      subtitle: 'text-muted-1',
    },
    bold: {
      true: 'font-bold',
      false: 'font-normal',
    },
    size: {
      '3xs': 'sm:text-md text-xs',
      '2xs': 'sm:text-lg text-base',
      xs: 'sm:text-2xl text-xl',
      sm: 'sm:text-3xl text-xl',
      md: 'sm:text-4xl text-2xl',
      lg: 'sm:text-5xl text-3xl',
      xg: 'sm:text-6xl text-4xl',
      xxg: 'sm:text-7xl text-5xl',
    },
    position: {
      centered: 'mx-auto text-center',
      left: 'mr-left text-start',
      right: 'ml-right text-end',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'title',
    position: 'left',
    bold: false,
  },
})
