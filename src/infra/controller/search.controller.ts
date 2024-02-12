import { FindAllMoviesBySearchUseCase } from '@/domain/search/application/use-cases/find-all-movies-by-search.use-case'
import { FindAllSeriesBySearchUseCase } from '@/domain/search/application/use-cases/find-all-series-by-search.use-case'

import { FindAllMoviesBySearchDTO } from './dto/search/find-all-movies-by-search.dto'
import { FindAllSeriesBySearchDTO } from './dto/search/find-all-series-by-search.dto'

export class SearchController {
  constructor(
    private readonly findAllMoviesBySearchUseCase: FindAllMoviesBySearchUseCase,
    private readonly findAllSeriesBySearchUseCase: FindAllSeriesBySearchUseCase,
  ) {}

  async findAllMovies({ page, search, token }: FindAllMoviesBySearchDTO) {
    return await this.findAllMoviesBySearchUseCase.execute({
      page,
      search,
      token,
    })
  }

  async findAllSeries({ page, search, token }: FindAllSeriesBySearchDTO) {
    return await this.findAllSeriesBySearchUseCase.execute({
      page,
      search,
      token,
    })
  }
}
