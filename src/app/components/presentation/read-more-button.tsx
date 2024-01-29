import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type ReadMoreButtonProps = ComponentProps<'button'> & {
  link: string
}

export const ReadMoreButton = ({ className, link }: ReadMoreButtonProps) => {
  return (
    <Button
      className={cn(
        'flex w-fit items-center justify-center rounded-lg bg-blue-main-highlight p-1 text-xs text-white md:p-2 md:text-base ',
        className,
      )}
    >
      <Link href={link}>Saiba mais</Link>
    </Button>
  )
}
