import { Heading } from '@/components/ui/heading'

import { InCinemasCardLoading } from './in-cinemas-card-loading'

export const MoviesInCinemasLoading = () => {
  return (
    <div className="relative mb-10 w-full !px-2 !pt-14 lg:!pl-16">
      <Heading
        HeadingType="h2"
        size="xs"
        className="absolute left-0 top-0 z-[30] p-3 lg:pl-16"
      >
        Em exibição nos cinemas
      </Heading>
      <div className="flex w-full gap-3 overflow-hidden px-2">
        {Array.from({ length: 10 }).map((_, movie) => (
          <InCinemasCardLoading key={movie} />
        ))}
      </div>
    </div>
  )
}
