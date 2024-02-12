import { serieFactory } from '@/infra/factory/series.factory'

import { RecommendationsSlider } from './recommendations-slider'

type RecommendationsWrapperProps = {
  serieId: number
}

export const RecommendationsWrapper = async ({
  serieId,
}: RecommendationsWrapperProps) => {
  const recommendations = await serieFactory().findRecommendationsBySerieId({
    id: serieId,
    token: process.env.API_BEARER_TOKEN!,
  })

  return <RecommendationsSlider series={recommendations} />
}
