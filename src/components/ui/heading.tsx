import { ComponentProps } from 'react'

import { VariantProps } from 'tailwind-variants'

import { HeadingVariants } from '../../variants/heading-variant'

type HeadingProps = ComponentProps<'h1'> &
  VariantProps<typeof HeadingVariants> & {
    HeadingType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  }

export const Heading = ({
  HeadingType = 'h2',
  className,
  position,
  size,
  variant,
  bold,
  ...props
}: HeadingProps) => {
  return (
    <HeadingType
      className={HeadingVariants({
        position,
        size,
        bold,
        variant,
        className,
      })}
      {...props}
    />
  )
}
