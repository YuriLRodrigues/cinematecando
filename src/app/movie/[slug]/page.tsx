import { Suspense } from 'react'

import { CastLoading } from './components/cast/cast-loading'
import { CastWrapper } from './components/cast/cast-wrapper'
import { PosterLoading } from './components/poster/poster-loading'
import { PosterWrapper } from './components/poster/poster-wrapper'
import { RecommendationsLoading } from './components/recommendations/recommendations-loading'
import { RecommendationsWrapper } from './components/recommendations/recommendations-wrapper'
import { Container } from '@/components/interface/container'

// export async function generateStaticParams({
//   params,
// }: {
//   params: { slug: string }
// }) {
//   const movie = await movieFactory().findById({
//     id: +params.slug,
//     token: process.env.API_BEARER_TOKEN!,
//   })

//   return movie
// }

type MovieDetailsProps = {
  params: { slug: number }
}

export default async function MovieDetails({ params }: MovieDetailsProps) {
  return (
    <Container mt={24}>
      <Suspense fallback={<PosterLoading />}>
        <PosterWrapper params={params.slug} />
      </Suspense>
      <Suspense fallback={<CastLoading />}>
        <CastWrapper movieId={params.slug} />
      </Suspense>
      <Suspense fallback={<RecommendationsLoading />}>
        <RecommendationsWrapper movieId={params.slug} />
      </Suspense>
    </Container>
  )
}
