import { movieFactory } from '@/infra/factory/movies.factory'

import { UpcomingSlider } from './upcoming-slider'

export const Upcoming = async () => {
  const movies = await movieFactory().findAllByListType({
    page: '1',
    token: process.env.API_BEARER_TOKEN!,
    list: 'upcoming',
  })

  return <UpcomingSlider movies={movies} />
}
