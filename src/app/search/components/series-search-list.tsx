import Link from 'next/link'
import { Suspense } from 'react'

import { Card } from '@/components/ui/card'
import { PaginationApp } from '@/components/ui/pagination-app'
import { WrapperClient } from '@/components/ui/wrapper-client'

import { searchFactory } from '@/infra/factory/search.factory'

import { NoneItems } from './none-items'

type SeriesSearchListProps = {
  page?: string
  search: string
}

export const SeriesSearchList = async ({
  page,
  search,
}: SeriesSearchListProps) => {
  const seriesFound = await searchFactory().findAllSeries({
    page: page ?? '1',
    search,
    token: process.env.API_BEARER_TOKEN!,
  })

  console.log(seriesFound)

  return seriesFound.results.length > 0 ? (
    <>
      <div className="mx-auto my-6 grid w-full grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 md:grid-cols-4 lg:my-12 lg:grid-cols-5 xl:grid-cols-6">
        {seriesFound.results.map((serie) => (
          <Card.Root key={serie.id}>
            <Link href={`serie/${serie.id}`}>
              <Card.Image src={serie.poster_path} alt={`serie-${serie.name}`} />
            </Link>
            <WrapperClient>
              <Card.Trigger.serie serie={serie} />
            </WrapperClient>
          </Card.Root>
        ))}
      </div>

      <PaginationApp
        actual_page={page ?? '1'}
        link="/search"
        total_pages={seriesFound.total_pages}
      />
    </>
  ) : (
    <NoneItems title="Nenhum filme encontrado" />
  )
}
