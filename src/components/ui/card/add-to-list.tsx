'use client'

import { Button } from '@nextui-org/react'
import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'
import { useMovieStore } from '@/store/use-movie-store'
import { Movie } from '@/types/movie'
import { Plus } from 'lucide-react'

type AddToListProps = ComponentProps<'button'> & {
  movie: Movie
}

export const AddToListButton = ({ className, movie }: AddToListProps) => {
  const { addMovie } = useMovieStore().actions
  return (
    <Button
      className={cn(
        'rounded-full bg-blue-main-highlight p-1 text-white duration-300 hover:bg-blue-main-highlight/80',
        className,
      )}
      onClick={() => addMovie(movie)}
    >
      <Plus />
    </Button>
  )
}
