import Link from 'next/link'

import { Card } from '@/components/ui/card'
import { ContainerCard } from '@/components/ui/card/container-card'
import { PaginationApp } from '@/components/ui/pagination-app'

import { movieFactory } from '@/infra/factory/movies.factory'

export type SearchParamsListMovies = {
  searchParams: { page: string }
}
export const ListMovies = async ({ searchParams }: SearchParamsListMovies) => {
  const movies = await movieFactory().findAllByListType({
    page: String(searchParams.page ?? 1),
    list: 'popular',
    token: process.env.API_BEARER_TOKEN!,
  })

  const isEmpty = movies.results.length === 0
  const visiblePagination = movies.results.length >= 20

  return (
    <>
      <ContainerCard className="px-3 lg:px-16">
        {!isEmpty &&
          movies.results.map((movie) => {
            return (
              <Card.Root key={movie.id}>
                <Link href={`/movie/${movie.id}`}>
                  <Card.Image src={movie.poster_path} alt={movie.title} />
                </Link>
                <Card.Trigger.movie movie={movie} />
              </Card.Root>
            )
          })}
      </ContainerCard>
      {visiblePagination && (
        <PaginationApp
          link="/movies"
          actual_page={searchParams.page ?? 1}
          total_pages={500}
        />
      )}
    </>
  )
}
