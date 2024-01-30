import { movieFactory } from '@/infra/factory/movies.factory'

import { TopRatedSlider } from './top-rated-slider'

export const TopRated = async () => {
  const movies = await movieFactory().findAllByListType({
    page: '1',
    token: process.env.API_BEARER_TOKEN!,
    list: 'top_rated',
  })

  return <TopRatedSlider movies={movies} />
}
