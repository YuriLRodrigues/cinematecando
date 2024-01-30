import {
  FindAllGenresProps,
  GenresRepository,
} from '@/domain/genres/application/repository/genres.repository'
import { GenresEntity } from '@/domain/genres/enterprise/genres.entity'

import { HttpRepository } from '../http/http.repository'

export class GenresGateway implements GenresRepository {
  constructor(private readonly httpRepository: HttpRepository) {}

  async findAllGenres({ token }: FindAllGenresProps): Promise<GenresEntity> {
    const genres = await this.httpRepository.get<GenresEntity>({
      token,
      url: `${process.env.API_URL}genre/movie/list?api_key=${process.env.API_KEY}&language=pt-BR`,
    })

    return genres
  }
}
