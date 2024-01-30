import { Heading } from '@/components/ui/heading'

import { TopRatedCardLoading } from './top-rated-card-loading'

export const MoviesTopRatedLoading = () => {
  return (
    <div className="relative mb-10 w-full !px-2 !pt-14 lg:!pl-16">
      <Heading
        HeadingType="h2"
        size="xs"
        className="absolute left-0 top-0 z-[30] p-3 lg:pl-16"
      >
        Top filmes mais avaliados
      </Heading>
      <div className="flex w-full gap-3 overflow-hidden px-2">
        {Array.from({ length: 10 }).map((_, movie) => (
          <TopRatedCardLoading key={movie} />
        ))}
      </div>
    </div>
  )
}
