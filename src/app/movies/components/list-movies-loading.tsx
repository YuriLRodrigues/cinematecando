import Image from 'next/image'

import { Card } from '@/components/ui/card'
import { ContainerCard } from '@/components/ui/card/container-card'

export const ListMoviesLoading = () => {
  return (
    <ContainerCard className="my-10">
      {Array.from({ length: 10 }).map((_, item) => (
        <Card.Root key={item} className="animate-pulse">
          <Image
            src={'/default-movie-card.png'}
            alt="movie-card-loading"
            width={500}
            height={500}
          />
        </Card.Root>
      ))}
    </ContainerCard>
  )
}
