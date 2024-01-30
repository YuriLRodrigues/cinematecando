export class MovieNotFoundError extends Error {
  constructor(movieId: number) {
    super(`Movie with id ${movieId} not found`)
    this.name = 'MovieNotFoundError'
  }
}
