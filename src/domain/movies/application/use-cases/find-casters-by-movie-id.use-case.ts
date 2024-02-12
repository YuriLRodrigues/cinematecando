import { MovieCastersNotFoundError } from '../errors/movie-casters-not-found-error'
import { MoviesRepository } from '../repository/movies.repository'

type Input = {
  id: number
  token: string
}

export class FindCastByMovieIdUseCase {
  constructor(private readonly moviesRepository: MoviesRepository) {}

  async execute({ id, token }: Input) {
    const casters = await this.moviesRepository.findCreditsByMovieId({
      id,
      token,
    })

    // if (casters.cast.length === 0) {
    //   throw new MovieCastersNotFoundError()
    // }

    return casters
  }
}
