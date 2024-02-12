import { SeriesRepository } from '../repository/series.repository'

type Input = {
  id: number
  page: string
  token: string
}

export class FindAllByGenreIdUseCase {
  constructor(private readonly seriesRepository: SeriesRepository) {}

  async execute({ id, page, token }: Input) {
    const seriesByGenre = await this.seriesRepository.findAllByGenreId({
      id,
      page,
      token,
    })

    return seriesByGenre
  }
}
