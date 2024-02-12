import { MovieCastEntity } from '../../enterprise/movie-cast.entity'
import { MovieDetailsEntity } from '../../enterprise/movie-details.entity'
import { MovieImagesEntity } from '../../enterprise/movie-images.entity'
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

export type FindImagesByMovieIdProps = {
  id: number
  token: string
}

export type FindCreditsByMovieId = {
  id: number
  token: string
}

export type FindRecommendationsByMovieId = {
  id: number
  token: string
}

export type FindAllByGenreIdProps = {
  id: number
  token: string
  page: string
}

export interface MoviesRepository {
  findAllMovies({
    page,
    token,
    list,
  }: FindAllMoviesProps): Promise<MoviesListEntity>

  findById({ id, token }: FindMovieByIdProps): Promise<MovieDetailsEntity>

  findImagesByMovieId({
    id,
    token,
  }: FindImagesByMovieIdProps): Promise<MovieImagesEntity>

  findCreditsByMovieId({
    id,
    token,
  }: FindCreditsByMovieId): Promise<MovieCastEntity>

  findRecommendationsByMovieId({
    id,
    token,
  }: FindRecommendationsByMovieId): Promise<MoviesListEntity>

  findAllByGenreId({
    id,
    token,
    page,
  }: FindAllByGenreIdProps): Promise<MoviesListEntity>
}
