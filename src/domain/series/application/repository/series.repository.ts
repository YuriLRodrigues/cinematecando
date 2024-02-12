import { SerieCreditsEntity } from '../../enterprise/serie-credits.entity'
import { SerieDetailsEntity } from '../../enterprise/serie-details.entity'
import { SeriesListEntity } from '../../enterprise/series.entity'

export type FindSerieByIdProps = {
  token: string
  id: number
}

export type FindAllSeriesProps = {
  token: string
  list: string
  page: string
}

export type FindCreditsBySerieIdProps = {
  id: number
  token: string
}

export type FindRecommendationsBySerieIdProps = {
  id: number
  token: string
}

export type FindAllByGenreIdProps = {
  id: number
  token: string
  page: string
}

export interface SeriesRepository {
  findAllSeries({
    page,
    token,
    list,
  }: FindAllSeriesProps): Promise<SeriesListEntity>
  findById({ id, token }: FindSerieByIdProps): Promise<SerieDetailsEntity>

  findCreditsBySerieId({
    id,
    token,
  }: FindCreditsBySerieIdProps): Promise<SerieCreditsEntity>

  findRecommendationsBySerieId({
    id,
    token,
  }: FindRecommendationsBySerieIdProps): Promise<SeriesListEntity>

  findAllByGenreId({
    id,
    token,
    page,
  }: FindAllByGenreIdProps): Promise<SeriesListEntity>
}
