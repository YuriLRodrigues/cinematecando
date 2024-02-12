import { SearchRepository } from '../repository/search.repository'

type Input = {
  page: string
  token: string
  search: string
}

export class FindAllSeriesBySearchUseCase {
  constructor(private readonly searchRepository: SearchRepository) {}

  async execute({ page, search, token }: Input) {
    const seriesFound = await this.searchRepository.findSeries({
      page,
      search,
      token,
    })

    return seriesFound
  }
}
