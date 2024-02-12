import { Suspense } from 'react'

import { ListMovies, SearchParamsListMovies } from './components/list-movies'
import { ListMoviesLoading } from './components/list-movies-loading'
import { Container } from '@/components/interface/container'

const Movies = ({ searchParams }: SearchParamsListMovies) => {
  return (
    <Container mt={24}>
      <Suspense fallback={<ListMoviesLoading />}>
        <ListMovies searchParams={searchParams} />
      </Suspense>
    </Container>
  )
}

export default Movies
