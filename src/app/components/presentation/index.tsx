import { movieFactory } from '@/infra/factory/movies.factory'

import { PresentationSliderWithThumbs } from './presentation-slider-with-thumbs'

export const Presentation = async () => {
  const movies = await movieFactory().findAllByListType({
    page: '1',
    token: process.env.API_BEARER_TOKEN!,
    list: 'popular',
  })

  return <PresentationSliderWithThumbs movie={movies} />
}
