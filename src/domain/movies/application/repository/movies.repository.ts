import { MovieDetailsEntity } from '../../enterprise/movie-details.entity'
import { MoviesListEntity } from '../../enterprise/movies.entity'

export type FindMovieByIdProps = {
  token: string
  id: number
}
export type FindAllMoviesProps = {
  token: string
  list: string
  page: string
}

export interface MoviesRepository {
  findAllMovies({
    page,
    token,
    list,
  }: FindAllMoviesProps): Promise<MoviesListEntity>
  findById({ id, token }: FindMovieByIdProps): Promise<MovieDetailsEntity>
}
