import {
  FindAllByGenreIdProps,
  FindAllMoviesProps,
  FindCreditsByMovieId,
  FindImagesByMovieIdProps,
  FindMovieByIdProps,
  FindRecommendationsByMovieId,
  MoviesRepository,
} from '@/domain/movies/application/repository/movies.repository'
import { MovieCastEntity } from '@/domain/movies/enterprise/movie-cast.entity'
import { MovieDetailsEntity } from '@/domain/movies/enterprise/movie-details.entity'
import { MovieImagesEntity } from '@/domain/movies/enterprise/movie-images.entity'
import { MoviesListEntity } from '@/domain/movies/enterprise/movies.entity'

import { HttpRepository } from '../http/http.repository'

export class MoviesGateway implements MoviesRepository {
  constructor(private readonly httpRepository: HttpRepository) {}

  async findAllByGenreId({
    id,
    token,
    page,
  }: FindAllByGenreIdProps): Promise<MoviesListEntity> {
    const movies = await this.httpRepository.get<MoviesListEntity>({
      token,
      url: `${process.env.API_URL}discover/movie?api_key=${process.env.API_KEY}&with_genres=${id}&language=pt-BR&page=${page}`,
    })

    return movies
  }

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

  async findImagesByMovieId({
    id,
    token,
  }: FindImagesByMovieIdProps): Promise<MovieImagesEntity> {
    const movieImages = await this.httpRepository.get<MovieImagesEntity>({
      token,
      url: `${process.env.API_URL}movie/${id}/images?api_key=${process.env.API_KEY}`,
    })

    return movieImages
  }

  async findCreditsByMovieId({
    id,
    token,
  }: FindCreditsByMovieId): Promise<MovieCastEntity> {
    const movieCasters = await this.httpRepository.get<MovieCastEntity>({
      token,
      url: `${process.env.API_URL}movie/${id}/credits?api_key=${process.env.API_KEY}&language=pt-BR`,
    })

    return movieCasters
  }

  async findRecommendationsByMovieId({
    id,
    token,
  }: FindRecommendationsByMovieId): Promise<MoviesListEntity> {
    const moviesRecommendations =
      await this.httpRepository.get<MoviesListEntity>({
        token,
        url: `${process.env.API_URL}movie/${id}/recommendations?api_key=${process.env.API_KEY}&language=pt-BR`,
      })

    return moviesRecommendations
  }
}
