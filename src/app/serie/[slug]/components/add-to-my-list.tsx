'use client'
import { Button } from '@nextui-org/react'
import { ComponentProps } from 'react'

import { SerieDetailsEntity } from '@/domain/series/enterprise/serie-details.entity'
import { cn } from '@/lib/utils'
import { useMovieStore } from '@/store/use-movie-store'
import { Plus, X } from 'lucide-react'

type AddToMyListProps = ComponentProps<'button'> & {
  serie: SerieDetailsEntity
}

export const AddToMyList = ({ className, serie }: AddToMyListProps) => {
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
    <Button
      radius="lg"
      className={cn(
        'flex w-fit items-center justify-center gap-3 rounded-lg border border-dark-blue bg-transparent p-1 text-xs text-dark-blue dark:border-white dark:text-white md:p-2 md:text-base',
        className,
      )}
      onClick={isAdded ? handleRemove : handleAdd}
    >
      {isAdded ? `Remover da lista` : `Minha lista`}
      {isAdded ? <X className="text-red-500" /> : <Plus />}
    </Button>
  )
}
