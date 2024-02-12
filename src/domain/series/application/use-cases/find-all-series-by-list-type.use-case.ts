import { SeriesNotFoundError } from '../errors/series-not-found-error'
import { SeriesRepository } from '../repository/series.repository'

type Input = {
  page: string
  token: string
  list: string
}

export class FindAllSeriesByListTypeUseCase {
  constructor(private readonly seriesRepository: SeriesRepository) {}

  async execute({ page, token, list }: Input) {
    const series = await this.seriesRepository.findAllSeries({
      page,
      token,
      list,
    })

    // if (!series) {
    //   throw new SeriesNotFoundError()
    // }

    return series
  }
}
