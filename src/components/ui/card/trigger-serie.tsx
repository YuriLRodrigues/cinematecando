'use client'

import { ComponentProps } from 'react'

import { useMovieStore } from '@/store/use-movie-store'
import { Serie } from '@/types/serie'
import { useSessionStorage } from '@uidotdev/usehooks'

import { ButtonAction } from './button-action'

type AddToListProps = ComponentProps<'button'> & {
  serie: Serie
}

export const TriggerSerie = ({ serie }: AddToListProps) => {
  const [series, setSeries] = useSessionStorage<Serie[]>('series', [])

  const { add, remove, verify } = useMovieStore((state) => ({
    add: state.actions.addSerie,
    remove: state.actions.removeSerie,
    verify: state.actions.serieAlreadyExists,
  }))

  const handleAdd = () => {
    add(serie)
    setSeries((oldSeries) => [...oldSeries, serie])
  }

  const handleRemove = () => {
    remove(serie.id)
    const seriesFiltered = series.filter(
      (oldSeries) => oldSeries.id !== serie.id,
    )
    setSeries(seriesFiltered)
  }

  const isAdded = verify(serie.id)

  return (
    <ButtonAction
      onClick={isAdded ? handleRemove : handleAdd}
      action={isAdded ? 'remove' : 'add'}
    />
  )
}
