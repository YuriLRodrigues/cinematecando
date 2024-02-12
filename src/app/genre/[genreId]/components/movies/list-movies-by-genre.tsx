import { Suspense } from 'react'

import { Card } from '@/components/ui/card'
import { Heading } from '@/components/ui/heading'
import { PaginationApp } from '@/components/ui/pagination-app'
import { Text } from '@/components/ui/text'
import { WrapperClient } from '@/components/ui/wrapper-client'

import { movieFactory } from '@/infra/factory/movies.factory'

export type ListMoviesByGenreProps = {
  genreId: number
  page: string
}

export const ListMoviesByGenre = async ({
  genreId,
  page,
}: ListMoviesByGenreProps) => {
  const [moviesByGenre] = await Promise.all([
    movieFactory().findAllByGenreId({
      id: genreId,
      page,
      token: process.env.API_BEARER_TOKEN!,
    }),
  ])

  return moviesByGenre.results.length > 0 ? (
    <>
      <Heading className="my-3"></Heading>
      <div className="mx-auto grid w-full grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {moviesByGenre.results.map((movie) => {
          return (
            <Card.Root key={movie.id}>
              <Card.Image
                src={movie.poster_path}
                alt={`Movie-${movie.title}`}
              />
              <WrapperClient>
                <Card.Trigger.movie movie={movie} />
              </WrapperClient>
            </Card.Root>
          )
        })}
      </div>

      {moviesByGenre.total_pages > 0 && (
        <PaginationApp
          actual_page={page}
          link={`/genre/${genreId}`}
          total_pages={moviesByGenre.total_pages}
        />
      )}
    </>
  ) : (
    <div className="flex min-h-[calc(100vh-100px)] items-center justify-center">
      <Text position="centered">Nenhum filme encontrado</Text>
    </div>
  )
}
