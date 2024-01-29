import { Button } from '@nextui-org/react'
import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'

type AddToMyListButtonProps = ComponentProps<'button'> & {
  movieId: number
}

export const AddToMyListButton = ({
  className,
  movieId,
}: AddToMyListButtonProps) => {
  const addToList = (movieId: number) => {
    console.log('adicionou o id: ', movieId) // arrumar e passar a lista/zustand
  }

  return (
    <Button
      radius="lg"
      className={cn(
        'flex w-fit items-center justify-center gap-3 rounded-lg border border-white bg-transparent p-1 text-xs text-white md:p-2 md:text-base',
        className,
      )}
      onClick={() => addToList(movieId)}
    >
      Minha lista <Plus />
    </Button>
  )
}
