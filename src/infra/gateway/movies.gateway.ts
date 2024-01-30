import {
  FindAllMoviesProps,
  FindMovieByIdProps,
  MoviesRepository,
} from '@/domain/movies/application/repository/movies.repository'
import { MovieDetailsEntity } from '@/domain/movies/enterprise/movie-details.entity'
import { MoviesListEntity } from '@/domain/movies/enterprise/movies.entity'

import { HttpRepository } from '../http/http.repository'

export class MoviesGateway implements MoviesRepository {
  constructor(private readonly httpRepository: HttpRepository) {}

  async findAllMovies({
    page,
    token,
    list,
  }: FindAllMoviesProps): Promise<MoviesListEntity> {
    const movies = await this.httpRepository.get<MoviesListEntity>({
      token,
      url: `${process.env.API_URL}movie/${list}?api_key=${process.env.API_KEY}&language=pt-BR&page=${page}`,
    })

    return movies
  }

  async findById({
    id,
    token,
  }: FindMovieByIdProps): Promise<MovieDetailsEntity> {
    const movie = await this.httpRepository.get<MovieDetailsEntity>({
      token,
      url: `${process.env.API_URL}movie/${id}?api_key=${process.env.API_KEY}&language=pt-BR`,
    })

    return movie
  }
}
