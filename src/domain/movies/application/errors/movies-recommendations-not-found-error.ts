export class MoviesRecommendationsNotFoundError extends Error {
  constructor() {
    super(`Movies recommendations not found`)
    this.name = 'MoviesRecommendationsNotFoundError'
  }
}
