import { FindAllGenresUseCase } from '@/domain/genres/application/use-cases/find-all-genres.use-case'

import { FindAllGenresDTO } from './dto/genres/find-all-genres.dto'

export class GenresController {
  constructor(private readonly findAllUseCase: FindAllGenresUseCase) {}

  async findAll({ token }: FindAllGenresDTO) {
    const movies = await this.findAllUseCase.execute({
      token,
    })

    return movies
  }
}
