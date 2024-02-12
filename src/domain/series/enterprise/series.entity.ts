export type SeriesListEntity = {
  page: 1
  results: Array<{
    adult: boolean
    backdrop_path: string
    genre_ids: Array<number>
    id: number
    origin_country: string
    original_name: string
    original_language: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    first_air_date: string
    name: string
    vote_average: number
    vote_count: number
  }>
  total_pages: number
  total_results: number
}
