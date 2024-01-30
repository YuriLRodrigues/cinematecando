import { FindAllMoviesByListTypeUseCase } from '@/domain/movies/application/use-cases/find-all-movies-by-list-type.use-case'
import { FindMovieByIdUseCase } from '@/domain/movies/application/use-cases/find-movie-by-id.use-case'

import { MoviesController } from '../controller/movies.controller'
import { MoviesGateway } from '../gateway/movies.gateway'
import { HttpService } from '../http/http.service'

export const movieFactory = () => {
  const http = new HttpService()

  const gateway = new MoviesGateway(http)

  const findByIdUseCase = new FindMovieByIdUseCase(gateway)

  const findAllUseCase = new FindAllMoviesByListTypeUseCase(gateway)

  const controller = new MoviesController(findAllUseCase, findByIdUseCase)

  return controller
}
