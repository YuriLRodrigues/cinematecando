import { GenresNotFoundError } from '../errors/genres-not-found-error'
import { GenresRepository } from '../repository/genres.repository'

type Input = {
  token: string
}

export class FindAllGenresUseCase {
  constructor(private readonly genresRepository: GenresRepository) {}

  async execute({ token }: Input) {
    const genres = await this.genresRepository.findAllGenres({
      token,
    })

    if (!genres) {
      throw new GenresNotFoundError()
    }

    return genres
  }
}
