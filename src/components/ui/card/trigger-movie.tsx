'use client'

import { ComponentProps } from 'react'

import { useMovieStore } from '@/store/use-movie-store'
import { Movie } from '@/types/movie'

import { ButtonAction } from './button-action'

type AddToListProps = ComponentProps<'button'> & {
  movie: Movie
}

export const TriggerMovie = ({ movie }: AddToListProps) => {
  const { add, remove, verify } = useMovieStore((state) => ({
    add: state.actions.addMovie,
    remove: state.actions.removeMovie,
    verify: state.actions.movieAlreadyExists,
  }))

  const handleAdd = () => {
    // const storedMovies: Movie[] = localStorage.getItem('movies') ?? []
    // const allMovies = [...storedMovies, movie]

    // localStorage.setItem('movies', JSON.stringify(allMovies))

    add(movie)
  }

  const handleRemove = () => {
    remove(movie.id)
  }

  const isAdded = verify(movie.id)

  return (
    <ButtonAction
      onClick={isAdded ? handleRemove : handleAdd}
      action={isAdded ? 'remove' : 'add'}
    />
  )
}
