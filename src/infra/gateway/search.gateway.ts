import {
  FindMoviesProps,
  FindSeriesProps,
  SearchRepository,
} from '@/domain/search/application/repository/search.repository'
import { SearchMoviesListEntity } from '@/domain/search/enterprise/search-movies-list.entity'
import { SearchSeriesListEntity } from '@/domain/search/enterprise/search-series-list.entity'

import { HttpRepository } from '../http/http.repository'

export class SearchGateway implements SearchRepository {
  constructor(private readonly httpRepository: HttpRepository) {}

  async findMovies({
    page,
    search,
    token,
  }: FindMoviesProps): Promise<SearchMoviesListEntity> {
    const moviesFound = await this.httpRepository.get<SearchMoviesListEntity>({
      token,
      url: `${process.env.API_URL}search/movie?query=${search}&api_key=${process.env.API_KEY}&language=pt-BR&page=${page}`,
    })

    return moviesFound
  }
  async findSeries({
    page,
    search,
    token,
  }: FindSeriesProps): Promise<SearchSeriesListEntity> {
    const seriesFound = await this.httpRepository.get<SearchSeriesListEntity>({
      token,
      url: `${process.env.API_URL}search/tv?query=${search}&api_key=${process.env.API_KEY}&language=pt-BR&page=${page}`,
    })

    return seriesFound
  }
}
