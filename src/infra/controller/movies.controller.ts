import { FindAllByGenreIdUseCase } from '@/domain/movies/application/use-cases/find-all-by-genre-id.use-case'
import { FindAllMoviesByListTypeUseCase } from '@/domain/movies/application/use-cases/find-all-movies-by-list-type.use-case'
import { FindCastByMovieIdUseCase } from '@/domain/movies/application/use-cases/find-casters-by-movie-id.use-case'
import { FindImagesByMovieIdUseCase } from '@/domain/movies/application/use-cases/find-images-by-movie-id.use-case'
import { FindMovieByIdUseCase } from '@/domain/movies/application/use-cases/find-movie-by-id.use-case'
import { FindMoviesRecommendationsByMovieIdUseCase } from '@/domain/movies/application/use-cases/find-movies-recommendations-by-movie-id.use-case'

import { FindAllByGenreIdDTO } from './dto/movies/find-all-movies-by-genre-id.dto'
import { FindAllMoviesByListTypeDTO } from './dto/movies/find-all-movies-by-list-type.dto'
import { FindCastersByMovieIdDTO } from './dto/movies/find-casters-by-movie-id.dto'
import { FindImagesByMovieIdDTO } from './dto/movies/find-images-by-movie-id.dto'
import { FindMovieByIdDTO } from './dto/movies/find-movie-by-id.dto'
import { FindRecommendationsByMovieIdDTO } from './dto/movies/find-recommendations-by-movie-id.dto'

export class MoviesController {
  constructor(
    private readonly findAllUseCase: FindAllMoviesByListTypeUseCase,
    private readonly findByIdUseCase: FindMovieByIdUseCase,
    private readonly findImagesByMovieIdUseCase: FindImagesByMovieIdUseCase,
    private readonly findCastByMoviesIdUseCase: FindCastByMovieIdUseCase,
    private readonly findRecommendationsByMovieIdUseCase: FindMoviesRecommendationsByMovieIdUseCase,
    private readonly findAllByGenreIdUseCase: FindAllByGenreIdUseCase,
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

  async findImagesByMovieId({ id, token }: FindImagesByMovieIdDTO) {
    return await this.findImagesByMovieIdUseCase.execute({
      id,
      token,
    })
  }

  async findCastersByMovieId({ id, token }: FindCastersByMovieIdDTO) {
    return await this.findCastByMoviesIdUseCase.execute({
      id,
      token,
    })
  }

  async findRecommendationsByMovieId({
    id,
    token,
  }: FindRecommendationsByMovieIdDTO) {
    return await this.findRecommendationsByMovieIdUseCase.execute({ id, token })
  }

  async findAllByGenreId({ id, page, token }: FindAllByGenreIdDTO) {
    return await this.findAllByGenreIdUseCase.execute({ id, token, page })
  }
}
