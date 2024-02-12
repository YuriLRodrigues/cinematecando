export class SerieNotFoundError extends Error {
  constructor(serieId: number) {
    super(`Serie with id ${serieId} not found`)
    this.name = 'SerieNotFoundError'
  }
}
