import { ComponentProps } from 'react'

import { VariantProps } from 'tailwind-variants'

import { FlexContainerVariants } from '../../variants/flex-container'

type FlexContainerProps = ComponentProps<'div'> &
  VariantProps<typeof FlexContainerVariants>

export const FlexContainer = ({
  className,
  gap,
  position,
  variant,
  width,
  ...props
}: FlexContainerProps) => {
  return (
    <div
      className={FlexContainerVariants({
        gap,
        position,
        variant,
        width,
        className,
      })}
      {...props}
    />
  )
}
