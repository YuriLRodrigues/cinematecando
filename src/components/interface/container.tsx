import { ComponentProps } from 'react'

import { type VariantProps } from 'tailwind-variants'

import { ContainerVariants } from '../../variants/container-variant'

type ContainerProps = ComponentProps<'div'> &
  VariantProps<typeof ContainerVariants>

export const Container = ({
  className,
  position,
  width,
  mt,
  ...props
}: ContainerProps) => {
  return (
    <section
      className={ContainerVariants({
        position,
        mt,
        width,
        className,
      })}
      {...props}
    />
  )
}
