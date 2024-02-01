'use client'

import { Card } from '@/components/ui/card'

import { useMovieStore } from '@/store/use-movie-store'

import { NoneItems } from './none-items'

export const MyListMovies = () => {
  const movies = useMovieStore((state) => state.movies)

  return movies.length > 0 ? (
    <div className="mx-auto grid w-full grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {movies.map((movie) => (
        <Card.Root key={movie.id}>
          <Card.Image src={movie.poster_path} alt={`movie-${movie.title}`} />
          <Card.Trigger.movie movie={movie} />
        </Card.Root>
      ))}
    </div>
  ) : (
    <NoneItems />
  )
}
