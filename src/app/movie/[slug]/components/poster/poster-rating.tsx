import { ComponentProps } from 'react'
import { FaStar } from 'react-icons/fa'

import { Text } from '@/components/ui/text'

import { cn } from '@/lib/utils'

type PosterRatingProps = ComponentProps<'span'> & {
  stars: number
}

export const PosterRating = ({
  className,
  stars,
  ...props
}: PosterRatingProps) => {
  return (
    <Text className="flex items-center justify-center gap-2">
      <FaStar size={20} className="text-yellow-500" />
      <span className={cn(className)} {...props}>
        {stars.toFixed(1)}/10
      </span>
    </Text>
  )
}
