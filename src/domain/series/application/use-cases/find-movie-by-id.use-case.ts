import { MovieNotFoundError } from '../errors/movie-not-found-error'
import { MoviesRepository } from '../repository/movies.repository'

type Input = {
  id: number
  token: string
}

export class FindMovieByIdUseCase {
  constructor(private readonly moviesRepository: MoviesRepository) {}

  async execute({ id, token }: Input) {
    const movie = await this.moviesRepository.findById({ id, token })

    if (!movie) {
      throw new MovieNotFoundError(id)
    }

    return movie
  }
}
