import { Suspense } from 'react'

import { Container } from '@/components/interface/container'
import { Card } from '@/components/ui/card'
import { CardLoading } from '@/components/ui/card/card-loading'
import { PaginationApp } from '@/components/ui/pagination-app'

import { movieFactory } from '@/infra/factory/movies.factory'

export default async function Movies({
  searchParams,
}: {
  searchParams: { page: string }
}) {
  const movies = await movieFactory().findAllByListType({
    page: String(searchParams.page ?? 1),
    list: 'popular',
    token: process.env.API_BEARER_TOKEN!,
  })

  return (
    <Container mt={24} className="px-3 lg:px-16">
      <div className="mx-auto grid w-full grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
        <Suspense fallback={<CardLoading />}>
          {movies.results.map((movie) => (
            <Card
              movieId={movie.id}
              movieToSave={movie}
              imageName={movie.title}
              imageUrl={movie.poster_path}
              key={movie.id}
            />
          ))}
        </Suspense>
      </div>
      <PaginationApp actual_page={searchParams.page ?? 1} total_pages={500} />
    </Container>
  )
}
