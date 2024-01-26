import { Suspense } from 'react'

import { Presentation } from './components/presentation'
import { MoviePresentationLoading } from './components/presentation/loading-slide-and-thumbs'
import { Upcoming } from './components/upcoming'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-12">
      <Suspense fallback={<MoviePresentationLoading />}>
        <Presentation />
      </Suspense>
      <Suspense fallback={<MoviePresentationLoading />}>
        <Upcoming />
      </Suspense>
    </main>
  )
}
