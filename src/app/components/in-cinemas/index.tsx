import { movieFactory } from '@/infra/factory/movies.factory'

import { InCinemasSlider } from './in-cinemas-slider'

export const InCinemas = async () => {
  const movies = await movieFactory().findAllByListType({
    page: '1',
    token: process.env.API_BEARER_TOKEN!,
    list: 'now_playing',
  })

  return <InCinemasSlider movies={movies} />
}
