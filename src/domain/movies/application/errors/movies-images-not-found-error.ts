export class MoviesImagesNotFoundError extends Error {
  constructor() {
    super(`No image of this movie found`)
    this.name = 'MoviesImagesNotFoundError'
  }
}
