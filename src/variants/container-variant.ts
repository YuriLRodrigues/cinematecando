import { tv } from 'tailwind-variants'

export const ContainerVariants = tv({
  variants: {
    mt: {
      4: 'md:mt-4 mt:2',
      8: 'md:mt-8 mt:4',
      10: 'md:mt-10 mt-5',
      16: 'md:mt-16 mt-8',
      20: 'md:mt-20 mt-10',
      24: 'md:mt-24 mt-12',
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
