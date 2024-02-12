import { FindAllMoviesBySearchUseCase } from '@/domain/search/application/use-cases/find-all-movies-by-search.use-case'
import { FindAllSeriesBySearchUseCase } from '@/domain/search/application/use-cases/find-all-series-by-search.use-case'

import { SearchController } from '../controller/search.controller'
import { SearchGateway } from '../gateway/search.gateway'
import { HttpService } from '../http/http.service'

export const searchFactory = () => {
  const http = new HttpService()

  const gateway = new SearchGateway(http)

  const findAllMoviesUseCase = new FindAllMoviesBySearchUseCase(gateway)
  const findAllSeriesUseCase = new FindAllSeriesBySearchUseCase(gateway)

  const controller = new SearchController(
    findAllMoviesUseCase,
    findAllSeriesUseCase,
  )

  return controller
}
