import { FindAllByGenreIdUseCase } from '@/domain/series/application/use-cases/find-all-by-genre-id.use-case'
import { FindAllSeriesByListTypeUseCase } from '@/domain/series/application/use-cases/find-all-series-by-list-type.use-case'
import { FindCastBySerieIdUseCase } from '@/domain/series/application/use-cases/find-casters-by-serie-id.use-case'
import { FindSerieByIdUseCase } from '@/domain/series/application/use-cases/find-serie-by-id.use-case'
import { FindSeriesRecommendationsBySerieIdUseCase } from '@/domain/series/application/use-cases/find-series-recommendations-by-serie-id.use-case'

import { SeriesController } from '../controller/series.controller'
import { SeriesGateway } from '../gateway/series.gateway'
import { HttpService } from '../http/http.service'

export const serieFactory = () => {
  const http = new HttpService()

  const gateway = new SeriesGateway(http)

  const findByIdUseCase = new FindSerieByIdUseCase(gateway)

  const findAllUseCase = new FindAllSeriesByListTypeUseCase(gateway)

  const findCastUseCase = new FindCastBySerieIdUseCase(gateway)

  const findRecommendationsUseCase =
    new FindSeriesRecommendationsBySerieIdUseCase(gateway)

  const findAllByGenreIdUseCase = new FindAllByGenreIdUseCase(gateway)

  const controller = new SeriesController(
    findAllUseCase,
    findByIdUseCase,
    findCastUseCase,
    findRecommendationsUseCase,
    findAllByGenreIdUseCase,
  )

  return controller
}
