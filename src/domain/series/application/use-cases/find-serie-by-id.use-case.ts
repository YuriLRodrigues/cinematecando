import { SerieNotFoundError } from '../errors/serie-not-found-error'
import { SeriesRepository } from '../repository/series.repository'

type Input = {
  id: number
  token: string
}

export class FindSerieByIdUseCase {
  constructor(private readonly seriesRepository: SeriesRepository) {}

  async execute({ id, token }: Input) {
    const serie = await this.seriesRepository.findById({ id, token })

    // if (!serie) {
    //   throw new SerieNotFoundError(id)
    // }

    return serie
  }
}
