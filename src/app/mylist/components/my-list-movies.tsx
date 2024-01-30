'use client'

import { useEffect } from 'react'

import { Card } from '@/components/ui/card'

import { useMovieStore } from '@/store/use-movie-store'

export const MyListMovies = () => {
  const { movies } = useMovieStore.getState()

  return movies.map((movie) => (
    <Card
      key={movie.id}
      movieIdToRemove={movie.id}
      imageName={movie.title}
      imageUrl={movie.poster_path}
      movieId={movie.id}
    />
  ))
}
