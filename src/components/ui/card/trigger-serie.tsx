'use client'

import { ComponentProps } from 'react'

import { useMovieStore } from '@/store/use-movie-store'
import { Movie } from '@/types/movie'

import { ButtonAction } from './button-action'

type AddToListProps = ComponentProps<'button'> & {
  serie: Movie
}

export const TriggerSerie = ({ serie }: AddToListProps) => {
  const { add, remove, verify } = useMovieStore((state) => ({
    add: state.actions.addSerie,
    remove: state.actions.removeSerie,
    verify: state.actions.serieAlreadyExists,
  }))

  const handleAdd = () => {
    add(serie)
  }

  const handleRemove = () => {
    remove(serie.id)
  }

  const isAdded = verify(serie.id)

  return (
    <ButtonAction
      onClick={isAdded ? handleRemove : handleAdd}
      action={isAdded ? 'remove' : 'add'}
    />
  )
}
