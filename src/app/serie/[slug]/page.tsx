import { Suspense } from 'react'

import { CastLoading } from './components/cast/cast-loading'
import { CastWrapper } from './components/cast/cast-wrapper'
import { PosterLoading } from './components/poster/poster-loading'
import { PosterWrapper } from './components/poster/poster-wrapper'
import { RecommendationsLoading } from './components/recommendations/recommendations-loading'
import { RecommendationsWrapper } from './components/recommendations/recommendations-wrapper'
import { Container } from '@/components/interface/container'

import { serieFactory } from '@/infra/factory/series.factory'

export async function generateStaticParams() {
  const series = await serieFactory().findAllByListType({
    token: process.env.API_BEARER_TOKEN!,
    list: 'popular',
    page: '1',
  })

  return series.results.map((serie) => ({
    slug: String(serie.id),
  }))
}

type SerieDetailsProps = {
  params: { slug: number }
}

export default async function SerieDetails({ params }: SerieDetailsProps) {
  return (
    <Container mt={24} className="px-3 lg:px-16">
      <Suspense fallback={<PosterLoading />}>
        <PosterWrapper params={params.slug} />
      </Suspense>
      <Suspense fallback={<CastLoading />}>
        <CastWrapper serieId={params.slug} />
      </Suspense>
      <Suspense fallback={<RecommendationsLoading />}>
        <RecommendationsWrapper serieId={params.slug} />
      </Suspense>
    </Container>
  )
}
