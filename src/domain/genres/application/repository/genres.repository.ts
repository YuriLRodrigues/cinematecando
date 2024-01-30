import { GenresEntity } from '../../enterprise/genres.entity'

export type FindAllGenresProps = {
  token: string
}

export interface GenresRepository {
  findAllGenres({ token }: FindAllGenresProps): Promise<GenresEntity>
}
