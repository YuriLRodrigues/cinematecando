'use client'

import { Suspense, useEffect } from 'react'

import { Card } from '@/components/ui/card'
import { WrapperClient } from '@/components/ui/wrapper-client'

import { useMovieStore } from '@/store/use-movie-store'
import { Serie } from '@/types/serie'
import { useSessionStorage } from '@uidotdev/usehooks'

import { NoneItems } from './none-items'

export const MyListSeries = () => {
  const seriesStore = useMovieStore((state) => state.series)

  const seriesActions = useMovieStore((state) => state.actions)

  const [series, setSeries] = useSessionStorage<Serie[]>('series', [])

  useEffect(() => {
    seriesActions.addAllSeries(series)
  }, [series, seriesActions])

  return series.length > 0 ? (
    <div className="mx-auto grid w-full grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {series.map((serie) => (
        <Card.Root key={serie.id}>
          <Card.Image src={serie.poster_path} alt={`serie-${serie.name}`} />
          <WrapperClient>
            <Card.Trigger.serie serie={serie} />
          </WrapperClient>
        </Card.Root>
      ))}
    </div>
  ) : (
    <NoneItems title="Nenhuma série na sua lista ainda..." />
  )
}
