import Link from 'next/link'
import { Suspense } from 'react'

import { Card } from '@/components/ui/card'
import { PaginationApp } from '@/components/ui/pagination-app'
import { WrapperClient } from '@/components/ui/wrapper-client'

import { searchFactory } from '@/infra/factory/search.factory'

import { NoneItems } from './none-items'

type MoviesSearchListProps = {
  page?: string
  search: string
}

export const MoviesSearchList = async ({
  page,
  search,
}: MoviesSearchListProps) => {
  const moviesFound = await searchFactory().findAllMovies({
    page: page ?? '1',
    search,
    token: process.env.API_BEARER_TOKEN!,
  })
  console.log(moviesFound)

  return moviesFound.results.length > 0 ? (
    <>
      <div className="mx-auto my-6 grid w-full grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 md:grid-cols-4 lg:my-12 lg:grid-cols-5 xl:grid-cols-6">
        {moviesFound.results.map((movie) => (
          <Card.Root key={movie.id}>
            <Link href={`movie/${movie.id}`}>
              <Card.Image
                src={movie.poster_path}
                alt={`movie-${movie.title}`}
              />
            </Link>
            <WrapperClient>
              <Card.Trigger.movie movie={movie} />
            </WrapperClient>
          </Card.Root>
        ))}
      </div>

      <PaginationApp
        actual_page={page ?? '1'}
        link="/search"
        total_pages={moviesFound.total_pages}
      />
    </>
  ) : (
    <NoneItems title="Nenhum filme encontrado" />
  )
}
