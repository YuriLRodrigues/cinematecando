import { movieFactory } from '@/infra/factory/movies.factory'

import { CastSlider } from './cast-slider'

type CastWrapperProps = {
  movieId: number
}

export const CastWrapper = async ({ movieId }: CastWrapperProps) => {
  const cast = await movieFactory().findCastersByMovieId({
    id: movieId,
    token: process.env.API_BEARER_TOKEN!,
  })

  return <CastSlider cast={cast} movieId={movieId} />
}
