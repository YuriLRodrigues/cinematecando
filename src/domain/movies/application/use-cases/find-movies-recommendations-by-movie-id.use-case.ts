import { MoviesRecommendationsNotFoundError } from '../errors/movies-recommendations-not-found-error'
import { MoviesRepository } from '../repository/movies.repository'

type Input = {
  id: number
  token: string
}

export class FindMoviesRecommendationsByMovieIdUseCase {
  constructor(private readonly moviesRepository: MoviesRepository) {}

  async execute({ id, token }: Input) {
    const moviesRecommendations =
      await this.moviesRepository.findRecommendationsByMovieId({ id, token })

    // if (moviesRecommendations.results.length === 0) {
    //   throw new MoviesRecommendationsNotFoundError()
    // }

    return moviesRecommendations
  }
}
