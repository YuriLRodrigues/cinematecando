import { Suspense } from 'react'

import { InCinemas } from './components/in-cinemas'
import { MoviesInCinemasLoading } from './components/in-cinemas/loading-in-cinema-cards'
import { Presentation } from './components/presentation'
import { MoviesPresentationLoading } from './components/presentation/loading-slide-and-thumbs'
import { TopRated } from './components/top-rated'
import { MoviesTopRatedLoading } from './components/top-rated/loading-top-rated-cards'
import { Upcoming } from './components/upcoming'
import { MoviesUpcomingLoading } from './components/upcoming/loading-upcoming-cards'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden pt-12">
      <Suspense fallback={<MoviesPresentationLoading />}>
        <Presentation />
      </Suspense>
      <Suspense fallback={<MoviesUpcomingLoading />}>
        <Upcoming />
      </Suspense>
      <Suspense fallback={<MoviesTopRatedLoading />}>
        <TopRated />
      </Suspense>
      <Suspense fallback={<MoviesInCinemasLoading />}>
        <InCinemas />
      </Suspense>
    </main>
  )
}
