import { MoviesNotFoundError } from '../errors/movies-not-found-error'
import { MoviesRepository } from '../repository/movies.repository'

type Input = {
  page: string
  token: string
  list: string
}

export class FindAllMoviesByListTypeUseCase {
  constructor(private readonly moviesRepository: MoviesRepository) {}

  async execute({ page, token, list }: Input) {
    const movies = await this.moviesRepository.findAllMovies({
      page,
      token,
      list,
    })

    if (!movies) {
      throw new MoviesNotFoundError()
    }

    return movies
  }
}
