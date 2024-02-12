import { SearchRepository } from '../repository/search.repository'

type Input = {
  page: string
  token: string
  search: string
}

export class FindAllMoviesBySearchUseCase {
  constructor(private readonly searchRepository: SearchRepository) {}

  async execute({ page, search, token }: Input) {
    const moviesFound = await this.searchRepository.findMovies({
      page,
      search,
      token,
    })

    return moviesFound
  }
}
