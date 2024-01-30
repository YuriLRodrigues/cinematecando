export type GetProps = {
  url: string
  token: string
}

export interface HttpRepository {
  get<T>({ token, url }: GetProps): Promise<T>
}
