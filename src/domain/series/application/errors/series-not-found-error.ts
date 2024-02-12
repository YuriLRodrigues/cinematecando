export class SeriesNotFoundError extends Error {
  constructor() {
    super(`Series not found`)
    this.name = 'SeriesNotFoundError'
  }
}
