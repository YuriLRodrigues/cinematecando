import { LucideIcon, Plus, X } from 'lucide-react'

import { Button, ButtonProps } from '../button'

type ActionProps = 'add' | 'remove'

type ButtonActionProps = ButtonProps & {
  action: ActionProps
}

const VariantOptions = {
  add: 'default',
  remove: 'destructive',
} as Record<ActionProps, ButtonProps['variant']>

const IconOption = {
  add: Plus,
  remove: X,
} as Record<ActionProps, LucideIcon>

export const ButtonAction = ({
  action = 'add',
  ...props
}: ButtonActionProps) => {
  const Icon = IconOption[action]
  return (
    <Button
      size="icon"
      className="absolute right-2 top-2 z-10 h-8 w-8 opacity-80 transition-transform duration-300 group-hover:scale-110 group-hover:opacity-100"
      variant={VariantOptions[action]}
      {...props}
    >
      <Icon size={16} />
    </Button>
  )
}
