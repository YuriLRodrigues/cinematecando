import { MovieDetailsEntity } from '../../enterprise/movie-details.entity'
import { MoviesListEntity } from '../../enterprise/movies.entity'

export type FindSerieByIdProps = {
  token: string
  id: number
}
export type FindAllSeriesProps = {
  token: string
  list: string
  page: string
}

export interface SeriesRepository {
  findAllSeries({
    page,
    token,
    list,
  }: FindAllSeriesProps): Promise<SeriesListEntity>
  findById({ id, token }: FindSerieByIdProps): Promise<MovieDetailsEntity>
}
