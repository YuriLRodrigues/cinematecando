export type SerieDetailsEntity = {
  adult: boolean
  backdrop_path: string
  created_by: Array<{
    id: number
    credit_id: string
    name: string
    profile_path: string
  }>
  first_air_date: string
  genres: Array<{
    id: number
    name: string
  }>
  homepage: string
  id: number
  in_production: boolean
  languages: Array<string>
  last_air_date: string
  last_episode_to_air: {
    id: number
    name: string
    overview: string
    vote_average: number
    vote_count: number
    air_date: string
    episode_number: string
    episode_type: string
    production_code: string
    runtime: number
    season_number: number
    show_id: number
    still_path: string
  }
  name: string
  next_episode_to_air: string
  networks: Array<string>
  number_of_episodes: number
  number_of_seasons: number
  origin_country: Array<string>
  original_language: string
  original_name: string
  overview: string
  poster_path: string
  production_companies: Array<string>
  production_countries: Array<string>
  seasons: Array<{
    air_date: string
    episode_count: number
    id: number
    name: string
    overview: string
    poster_path: string
    season_number: number
    vote_average: number
  }>
  spoken_languages: Array<string>
  status: string
  tagline: string
  type: string
  vote_average: number
  vote_count: number
}
