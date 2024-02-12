import { SeriesRepository } from '../repository/series.repository'

type Input = {
  id: number
  token: string
}

export class FindCastBySerieIdUseCase {
  constructor(private readonly seriesRepository: SeriesRepository) {}

  async execute({ id, token }: Input) {
    const casters = await this.seriesRepository.findCreditsBySerieId({
      id,
      token,
    })

    // if (casters.cast.length === 0) {
    //   throw new SerieCastersNotFoundError()
    // }

    return casters
  }
}
