'use client'

import { ComponentProps } from 'react'

import { useMovieStore } from '@/store/use-movie-store'
import { Movie } from '@/types/movie'

import {} from '@uidotdev/usehooks'

import { useSessionStorage } from '@uidotdev/usehooks'

import { ButtonAction } from './button-action'

type AddToListProps = ComponentProps<'button'> & {
  movie: Movie
}

export const TriggerMovie = ({ movie }: AddToListProps) => {
  const [movies, setMovies] = useSessionStorage<Movie[]>('movies', [])

  const { add, remove, verify } = useMovieStore((state) => ({
    add: state.actions.addMovie,
    remove: state.actions.removeMovie,
    verify: state.actions.movieAlreadyExists,
  }))

  const handleAdd = () => {
    add(movie)
    setMovies((oldMovies) => [...oldMovies, movie])
  }

  const handleRemove = () => {
    remove(movie.id)
    const moviesFiltered = movies.filter((oldMovie) => oldMovie.id !== movie.id)
    setMovies(moviesFiltered)
  }

  const isAdded = verify(movie.id)

  return (
    <ButtonAction
      onClick={isAdded ? handleRemove : handleAdd}
      action={isAdded ? 'remove' : 'add'}
    />
  )
}
