export class MoviesNotFoundError extends Error {
  constructor() {
    super(`Movies not found`)
    this.name = 'MoviesNotFoundError'
  }
}
