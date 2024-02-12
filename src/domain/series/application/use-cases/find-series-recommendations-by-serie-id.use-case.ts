import { SeriesRepository } from '../repository/series.repository'

type Input = {
  id: number
  token: string
}

export class FindSeriesRecommendationsBySerieIdUseCase {
  constructor(private readonly seriesRepository: SeriesRepository) {}

  async execute({ id, token }: Input) {
    const seriesRecommendations =
      await this.seriesRepository.findRecommendationsBySerieId({ id, token })

    return seriesRecommendations
  }
}
