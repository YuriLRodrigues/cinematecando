import { MoviesRepository } from '../repository/movies.repository'

type Input = {
  id: number
  token: string
  page: string
}

export class FindAllByGenreIdUseCase {
  constructor(private readonly moviesRepository: MoviesRepository) {}

  async execute({ id, token, page }: Input) {
    const movies = await this.moviesRepository.findAllByGenreId({
      id,
      token,
      page,
    })

    return movies
  }
}
