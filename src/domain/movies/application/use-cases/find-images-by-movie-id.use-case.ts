import { MoviesImagesNotFoundError } from '../errors/movies-images-not-found-error'
import { MoviesRepository } from '../repository/movies.repository'

type Input = {
  id: number
  token: string
}

export class FindImagesByMovieIdUseCase {
  constructor(private readonly moviesRepository: MoviesRepository) {}

  async execute({ id, token }: Input) {
    const images = await this.moviesRepository.findImagesByMovieId({
      id,
      token,
    })

    // if (images.backdrops.length === 0) {
    //   throw new MoviesImagesNotFoundError()
    // }

    return images
  }
}
