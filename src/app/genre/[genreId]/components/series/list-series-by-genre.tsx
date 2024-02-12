import { Card } from '@/components/ui/card'
import { Heading } from '@/components/ui/heading'
import { PaginationApp } from '@/components/ui/pagination-app'
import { Text } from '@/components/ui/text'

import { serieFactory } from '@/infra/factory/series.factory'

export type ListSeriesByGenreProps = {
  genreId: number
  page: string
}

export const ListSeriesByGenre = async ({
  genreId,
  page,
}: ListSeriesByGenreProps) => {
  const [seriesByGenre] = await Promise.all([
    serieFactory().findAllByGenreId({
      id: genreId,
      page,
      token: process.env.API_BEARER_TOKEN!,
    }),
  ])

  console.log(seriesByGenre)

  return seriesByGenre.results.length > 0 ? (
    <>
      <Heading className="my-3"></Heading>
      <div className="mx-auto grid w-full grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {seriesByGenre.results.map((serie) => {
          return (
            <Card.Root key={serie.id}>
              <Card.Image src={serie.poster_path} alt={`serie-${serie.name}`} />
              <Card.Trigger.serie serie={serie} />
            </Card.Root>
          )
        })}
      </div>

      {seriesByGenre.total_pages > 0 && (
        <PaginationApp
          actual_page={page}
          link={`/genre/${genreId}`}
          total_pages={seriesByGenre.total_pages}
        />
      )}
    </>
  ) : (
    <div className="flex min-h-[calc(100vh-100px)] items-center justify-center">
      <Text position="centered">Nenhuma série encontrada</Text>
    </div>
  )
}
