import { tv } from 'tailwind-variants'

export const FlexContainerVariants = tv({
  base: ['relative'],
  variants: {
    variant: {
      start: 'flex',
      centered: 'flex justify-center',
      end: 'flex justify-end',
      between: 'flex justify-between',
      'start-centered': 'flex items-center sm:flex-row flex-col',
      'centered-all': 'flex justify-center items-center sm:flex-row',
      'end-centered': 'flex justify-end items-center sm:flex-row flex-col',
      'between-centered':
        'flex justify-between items-center sm:flex-row flex-col',
      'centered-col': 'flex flex-col justify-center items-center',
      'start-col': 'flex flex-col items-center',
      'end-col': 'flex flex-col items-center',
      'between-col': 'flex flex-col items-center',
    },
    gap: {
      '0': 'gap-0',
      '2': 'gap-2',
      '3': 'gap-3',
      '4': 'gap-4',
      '6': 'gap-6',
      '8': 'gap-8',
      '10': 'gap-10',
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
    gap: '0',
    position: 'left',
    variant: 'start',
    width: 'full',
  },
})
