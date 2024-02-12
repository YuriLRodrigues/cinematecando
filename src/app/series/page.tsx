import { Suspense } from 'react'

import { ListSeries, SearchParamsListSeries } from './components/list-series'
import { ListSeriesLoading } from './components/list-series-loading'
import { Container } from '@/components/interface/container'

const Series = ({ searchParams }: SearchParamsListSeries) => {
  return (
    <Container mt={24}>
      <Suspense fallback={<ListSeriesLoading />}>
        <ListSeries searchParams={searchParams} />
      </Suspense>
    </Container>
  )
}

export default Series
