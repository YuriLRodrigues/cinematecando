import { SearchMoviesListEntity } from '../../enterprise/search-movies-list.entity'
import { SearchSeriesListEntity } from '../../enterprise/search-series-list.entity'

export type FindMoviesProps = {
  page: string
  search: string
  token: string
}

export type FindSeriesProps = {
  page: string
  search: string
  token: string
}

export interface SearchRepository {
  findMovies({
    page,
    search,
    token,
  }: FindMoviesProps): Promise<SearchMoviesListEntity>

  findSeries({
    page,
    search,
    token,
  }: FindSeriesProps): Promise<SearchSeriesListEntity>
}
