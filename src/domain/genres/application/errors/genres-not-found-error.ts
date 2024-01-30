export class GenresNotFoundError extends Error {
  constructor() {
    super(`Genres not found`)
    this.name = 'GenresNotFoundError'
  }
}
