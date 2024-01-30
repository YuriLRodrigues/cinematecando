import Image from 'next/image'
import Link from 'next/link'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { Movie } from '@/types/movie'

import { AddToListButton } from './add-to-list'
import { RemoveFromListButton } from './remove-from-list'

type CardProps = {
  imageUrl: string
  imageName: string
  movieToSave?: Movie
  movieIdToRemove?: number
  movieId: number
}

export const Card = ({
  imageUrl,
  imageName,
  movieId,
  movieToSave,
  movieIdToRemove,
}: CardProps) => {
  return (
    <div className="relative mx-auto min-h-96 max-w-56 overflow-hidden rounded-xl shadow-sm shadow-slate-100 duration-300 hover:scale-95 dark:shadow-dark-blue">
      {movieToSave && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="absolute right-3 top-3 z-30">
              <AddToListButton movie={movieToSave} />
            </TooltipTrigger>
            <TooltipContent className="absolute -top-1 right-5 z-40">
              <p>Adicionar a minha lista</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
      {movieIdToRemove && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="absolute right-3 top-3 z-30">
              <RemoveFromListButton movieId={movieIdToRemove} />
            </TooltipTrigger>
            <TooltipContent className="absolute -top-1 right-5 z-40">
              <p>Remover da lista</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      <Link href={`/movie/${movieId}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${imageUrl}`}
          alt={imageName}
          className="h-full w-full object-cover object-center"
          width={300}
          height={400}
        />
      </Link>
    </div>
  )
}
