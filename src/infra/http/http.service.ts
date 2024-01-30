import { GetProps, HttpRepository } from './http.repository'

export class HttpService implements HttpRepository {
  async get<T>({ token, url }: GetProps): Promise<T> {
    const response = await fetch(url, {
      headers: {
        Authentication: token,
      },
    }).then((response) => response.json())

    return response
  }
}
