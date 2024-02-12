import { FindAllByGenreIdUseCase } from '@/domain/movies/application/use-cases/find-all-by-genre-id.use-case'
import { FindAllMoviesByListTypeUseCase } from '@/domain/movies/application/use-cases/find-all-movies-by-list-type.use-case'
import { FindCastByMovieIdUseCase } from '@/domain/movies/application/use-cases/find-casters-by-movie-id.use-case'
import { FindImagesByMovieIdUseCase } from '@/domain/movies/application/use-cases/find-images-by-movie-id.use-case'
import { FindMovieByIdUseCase } from '@/domain/movies/application/use-cases/find-movie-by-id.use-case'
import { FindMoviesRecommendationsByMovieIdUseCase } from '@/domain/movies/application/use-cases/find-movies-recommendations-by-movie-id.use-case'

import { MoviesController } from '../controller/movies.controller'
import { MoviesGateway } from '../gateway/movies.gateway'
import { HttpService } from '../http/http.service'

export const movieFactory = () => {
  const http = new HttpService()

  const gateway = new MoviesGateway(http)

  const findByIdUseCase = new FindMovieByIdUseCase(gateway)

  const findAllUseCase = new FindAllMoviesByListTypeUseCase(gateway)

  const findImagesByMovieId = new FindImagesByMovieIdUseCase(gateway)

  const findCastersByMovieId = new FindCastByMovieIdUseCase(gateway)

  const findRecommendationsByMovieId =
    new FindMoviesRecommendationsByMovieIdUseCase(gateway)

  const findAllByGenreIdUseCase = new FindAllByGenreIdUseCase(gateway)

  const controller = new MoviesController(
    findAllUseCase,
    findByIdUseCase,
    findImagesByMovieId,
    findCastersByMovieId,
    findRecommendationsByMovieId,
    findAllByGenreIdUseCase,
  )

  return controller
}
