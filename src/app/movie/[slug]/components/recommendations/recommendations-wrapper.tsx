import { movieFactory } from '@/infra/factory/movies.factory'

import { RecommendationsSlider } from './recommendations-slider'

type RecommendationsWrapperProps = {
  movieId: number
}

export const RecommendationsWrapper = async ({
  movieId,
}: RecommendationsWrapperProps) => {
  const recommendations = await movieFactory().findRecommendationsByMovieId({
    id: movieId,
    token: process.env.API_BEARER_TOKEN!,
  })

  return <RecommendationsSlider movies={recommendations} />
}
