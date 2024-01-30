import { tv } from 'tailwind-variants'

export const ContainerVariants = tv({
  variants: {
    mt: {
      4: 'md:mt-4 mt:3',
      8: 'md:mt-8 mt:6',
      10: 'md:mt-10 mt-7',
      16: 'md:mt-16 mt-10',
      20: 'md:mt-20 mt-12',
      24: 'md:mt-24 mt-16',
    },
    width: {
      full: 'w-full',
      fit: 'w-fit',
    },
    position: {
      centered: 'mx-auto',
      left: 'mr-auto',
      right: 'ml-auto',
    },
  },
  defaultVariants: {
    position: 'left',
    width: 'full',
    mt: 10,
  },
})
