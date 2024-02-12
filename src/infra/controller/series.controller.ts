import { FindAllByGenreIdUseCase } from '@/domain/series/application/use-cases/find-all-by-genre-id.use-case'
import { FindAllSeriesByListTypeUseCase } from '@/domain/series/application/use-cases/find-all-series-by-list-type.use-case'
import { FindCastBySerieIdUseCase } from '@/domain/series/application/use-cases/find-casters-by-serie-id.use-case'
import { FindSerieByIdUseCase } from '@/domain/series/application/use-cases/find-serie-by-id.use-case'
import { FindSeriesRecommendationsBySerieIdUseCase } from '@/domain/series/application/use-cases/find-series-recommendations-by-serie-id.use-case'

import { FindAllByGenreIdDTO } from './dto/movies/find-all-movies-by-genre-id.dto'
import { FindAllSeriesByListTypeDTO } from './dto/series/find-all-series-by-list-type.dto'
import { FindCreditsBySerieIdDTO } from './dto/series/find-credits-by-serie-id.dto'
import { FindRecommendationsBySerieIdDTO } from './dto/series/find-recommendations-by-serie-id.dto'
import { FindSerieByIdDTO } from './dto/series/find-serie-by-id.dto'

export class SeriesController {
  constructor(
    private readonly findAllUseCase: FindAllSeriesByListTypeUseCase,
    private readonly findByIdUseCase: FindSerieByIdUseCase,
    private readonly findCreditsUseCase: FindCastBySerieIdUseCase,
    private readonly findRecommendationsBySerieIdUseCase: FindSeriesRecommendationsBySerieIdUseCase,
    private readonly findAllSeriesByGenreIdUseCase: FindAllByGenreIdUseCase,
  ) {}

  async findAllByListType({ page, token, list }: FindAllSeriesByListTypeDTO) {
    const series = await this.findAllUseCase.execute({
      page,
      token,
      list,
    })

    return series
  }

  async findAllByGenreId({ page, token, id }: FindAllByGenreIdDTO) {
    const series = await this.findAllSeriesByGenreIdUseCase.execute({
      page,
      token,
      id,
    })

    return series
  }

  async findById({ id, token }: FindSerieByIdDTO) {
    return await this.findByIdUseCase.execute({
      id,
      token,
    })
  }

  async findCreditsBySerieId({ id, token }: FindCreditsBySerieIdDTO) {
    return await this.findCreditsUseCase.execute({ id, token })
  }

  async findRecommendationsBySerieId({
    id,
    token,
  }: FindRecommendationsBySerieIdDTO) {
    return await this.findRecommendationsBySerieIdUseCase.execute({ id, token })
  }
}
