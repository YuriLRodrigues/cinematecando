import { Suspense } from 'react'

import { ListByGenreLoading } from './components/list-by-genre-loading'
import { ListMoviesByGenre } from './components/movies/list-movies-by-genre'
import { ListSeriesByGenre } from './components/series/list-series-by-genre'
import { Container } from '@/components/interface/container'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { genresFactory } from '@/infra/factory/genres.factory'

export async function generateStaticParams() {
  const genres = await genresFactory().findAll({
    token: process.env.API_BEARER_TOKEN!,
  })

  return genres.genres.map((genre) => ({
    genreId: String(genre.id),
  }))
}

type GenreProps = {
  params: { genreId: number }
  searchParams: { page: string }
}

const Genre = async ({
  params: { genreId },
  searchParams: { page },
}: GenreProps) => {
  return (
    <Container mt={24} className="w-full flex-wrap px-3 lg:px-16">
      <Tabs defaultValue="movies">
        <TabsList className="bg-transparent">
          <TabsTrigger value="movies">Filmes</TabsTrigger>
          <TabsTrigger value="series">Séries</TabsTrigger>
        </TabsList>
        <TabsContent value="movies">
          <Suspense fallback={<ListByGenreLoading />}>
            <ListMoviesByGenre genreId={genreId} page={page ?? '1'} />
          </Suspense>
        </TabsContent>
        <TabsContent value="series">
          <Suspense fallback={<ListByGenreLoading />}>
            <ListSeriesByGenre genreId={genreId} page={page ?? '1'} />
          </Suspense>
        </TabsContent>
      </Tabs>
    </Container>
  )
}

export default Genre
