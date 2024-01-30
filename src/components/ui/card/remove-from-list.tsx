'use client'

import { Button } from '@nextui-org/react'
import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'
import { useMovieStore } from '@/store/use-movie-store'
import { Trash } from 'lucide-react'

type RemoveFromListProps = ComponentProps<'button'> & {
  movieId: number
}

export const RemoveFromListButton = ({
  className,
  movieId,
}: RemoveFromListProps) => {
  const { removeMovie } = useMovieStore().actions
  return (
    <Button
      className={cn(
        'rounded-full bg-red-500 p-1 text-white duration-300 hover:bg-red-500/70',
        className,
      )}
      onClick={() => removeMovie(movieId)}
    >
      <Trash />
    </Button>
  )
}
