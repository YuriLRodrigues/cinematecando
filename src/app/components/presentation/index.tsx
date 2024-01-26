import { movieFactory } from '@/infra/factory/movies.factory'

import { SliderThumbs } from './slider-thumbs'

export const Presentation = async () => {
  const movies = await movieFactory().findAll({
    page: '1',
    token: process.env.API_BEARER_TOKEN!,
    list: 'top_rated',
  })

  return <SliderThumbs movies={movies} />
}
