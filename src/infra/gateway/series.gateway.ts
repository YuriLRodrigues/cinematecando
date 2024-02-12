import {
  FindAllByGenreIdProps,
  FindAllSeriesProps,
  FindCreditsBySerieIdProps,
  FindRecommendationsBySerieIdProps,
  FindSerieByIdProps,
  SeriesRepository,
} from '@/domain/series/application/repository/series.repository'
import { SerieCreditsEntity } from '@/domain/series/enterprise/serie-credits.entity'
import { SerieDetailsEntity } from '@/domain/series/enterprise/serie-details.entity'
import { SeriesListEntity } from '@/domain/series/enterprise/series.entity'

import { HttpRepository } from '../http/http.repository'

export class SeriesGateway implements SeriesRepository {
  constructor(private readonly httpRepository: HttpRepository) {}

  async findAllSeries({
    page,
    token,
    list,
  }: FindAllSeriesProps): Promise<SeriesListEntity> {
    const movies = await this.httpRepository.get<SeriesListEntity>({
      token,
      url: `${process.env.API_URL}tv/${list}?api_key=${process.env.API_KEY}&language=pt-BR&page=${page}`,
    })

    return movies
  }

  async findAllByGenreId({
    id,
    token,
    page,
  }: FindAllByGenreIdProps): Promise<SeriesListEntity> {
    const series = await this.httpRepository.get<SeriesListEntity>({
      token,
      url: `${process.env.API_URL}discover/tv?api_key=${process.env.API_KEY}&with_genres=${id}&language=pt-BR&page=${page}`,
    })

    return series
  }

  async findById({
    id,
    token,
  }: FindSerieByIdProps): Promise<SerieDetailsEntity> {
    const movie = await this.httpRepository.get<SerieDetailsEntity>({
      token,
      url: `${process.env.API_URL}tv/${id}?api_key=${process.env.API_KEY}&language=pt-BR`,
    })

    return movie
  }

  async findCreditsBySerieId({
    id,
    token,
  }: FindCreditsBySerieIdProps): Promise<SerieCreditsEntity> {
    const credits = await this.httpRepository.get<SerieCreditsEntity>({
      token,
      url: `${process.env.API_URL}tv/${id}/credits?api_key=${process.env.API_KEY}&language=pt-BR`,
    })

    return credits
  }

  async findRecommendationsBySerieId({
    token,
    id,
  }: FindRecommendationsBySerieIdProps): Promise<SeriesListEntity> {
    const recommendations = await this.httpRepository.get<SeriesListEntity>({
      token,
      url: `${process.env.API_URL}tv/${id}/recommendations?api_key=${process.env.API_KEY}&language=pt-BR&page=1`,
    })

    return recommendations
  }
}
