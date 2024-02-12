'use client'

import { Suspense, useEffect } from 'react'

import { Card } from '@/components/ui/card'
import { WrapperClient } from '@/components/ui/wrapper-client'

import { useMovieStore } from '@/store/use-movie-store'
import { Movie } from '@/types/movie'
import { useSessionStorage } from '@uidotdev/usehooks'

import { NoneItems } from './none-items'

export const MyListMovies = () => {
  const moviesStore = useMovieStore((state) => state.movies)

  const moviesActions = useMovieStore((state) => state.actions)

  const [movies, setMovies] = useSessionStorage<Movie[]>('movies', [])

  useEffect(() => {
    moviesActions.addAllMovies(movies)
  }, [movies, moviesActions])

  return movies.length > 0 ? (
    <div className="mx-auto grid w-full grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {movies.map((movie: Movie) => (
        <Card.Root key={movie.id}>
          <Card.Image src={movie.poster_path} alt={`movie-${movie.title}`} />
          <WrapperClient>
            <Card.Trigger.movie movie={movie} />
          </WrapperClient>
        </Card.Root>
      ))}
    </div>
  ) : (
    <NoneItems title="Nenhum filme na sua lista ainda..." />
  )
}
