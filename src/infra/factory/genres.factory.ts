import { FindAllGenresUseCase } from '@/domain/genres/application/use-cases/find-all-genres.use-case'

import { GenresController } from '../controller/genres.controller'
import { GenresGateway } from '../gateway/genres.gateway'
import { HttpService } from '../http/http.service'

export const genresFactory = () => {
  const http = new HttpService()

  const gateway = new GenresGateway(http)

  const findAllUseCase = new FindAllGenresUseCase(gateway)

  const controller = new GenresController(findAllUseCase)

  return controller
}
