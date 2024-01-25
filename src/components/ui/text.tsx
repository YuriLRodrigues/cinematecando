import { ComponentProps } from 'react'

import { VariantProps } from 'tailwind-variants'

import { TextVariant } from '../../variants/text-variant'

type TextProps = ComponentProps<'p'> & VariantProps<typeof TextVariant>

export const Text = ({
  align,
  className,
  position,
  size,
  variant,
  bold,
  ...props
}: TextProps) => {
  return (
    <p
      className={TextVariant({
        align,
        variant,
        bold,
        position,
        size,
        className,
      })}
      {...props}
    />
  )
}
