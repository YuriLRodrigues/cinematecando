import Link from 'next/link'

import { Card } from '@/components/ui/card'
import { ContainerCard } from '@/components/ui/card/container-card'
import { PaginationApp } from '@/components/ui/pagination-app'

import { serieFactory } from '@/infra/factory/series.factory'

export type SearchParamsListSeries = {
  searchParams: { page: string }
}

export const ListSeries = async ({ searchParams }: SearchParamsListSeries) => {
  const series = await serieFactory().findAllByListType({
    page: String(searchParams.page ?? 1),
    list: 'popular',
    token: process.env.API_BEARER_TOKEN!,
  })

  const isEmpty = series.results.length === 0
  const visiblePagination = series.results.length >= 20

  return (
    <>
      <ContainerCard className="px-3 lg:px-16">
        {!isEmpty &&
          series.results.map((serie) => {
            return (
              <Card.Root key={serie.id}>
                <Link href={`/serie/${serie.id}`}>
                  <Card.Image src={serie.poster_path} alt={serie.name} />
                </Link>
                <Card.Trigger.serie serie={serie} />
              </Card.Root>
            )
          })}
      </ContainerCard>
      {visiblePagination && (
        <PaginationApp
          link="/series"
          actual_page={searchParams.page ?? 1}
          total_pages={500}
        />
      )}
    </>
  )
}
