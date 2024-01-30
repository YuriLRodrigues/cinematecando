import { FindAllMoviesByListTypeUseCase } from '@/domain/movies/application/use-cases/find-all-movies-by-list-type.use-case'
import { FindMovieByIdUseCase } from '@/domain/movies/application/use-cases/find-movie-by-id.use-case'

import { FindAllMoviesByListTypeDTO } from './dto/movies-dto/find-all-movies-by-list-type.dto'
import { FindMovieByIdDTO } from './dto/movies-dto/find-movie-by-id.dto'

export class MoviesController {
  constructor(
    private readonly findAllUseCase: FindAllMoviesByListTypeUseCase,
    private readonly findByIdUseCase: FindMovieByIdUseCase,
  ) {}

  async findAllByListType({ page, token, list }: FindAllMoviesByListTypeDTO) {
    const movies = await this.findAllUseCase.execute({
      page,
      token,
      list,
    })

    return movies
  }

  async findById({ id, token }: FindMovieByIdDTO) {
    return await this.findByIdUseCase.execute({
      id,
      token,
    })
  }
}
