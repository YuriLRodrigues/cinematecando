export class MovieCastersNotFoundError extends Error {
  constructor() {
    super(`No caster of this movie found`)
    this.name = 'MovieCastersNotFoundError'
  }
}
