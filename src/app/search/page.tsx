import { Suspense } from 'react'

import { MoviesSearchList } from './components/movies-search-list'
import { SearchLoading } from './components/search-loading'
import { SeriesSearchList } from './components/series-search-list'
import { Container } from '@/components/interface/container'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type SearchPageProps = {
  searchParams: { query: string; page: string }
}

const SearchPage = ({ searchParams: { page, query } }: SearchPageProps) => {
  return (
    <Container mt={24} className="px-3 lg:px-16">
      <Tabs defaultValue="movies" className="w-full flex-wrap">
        <TabsList className="bg-transparent">
          <TabsTrigger value="movies">Filmes</TabsTrigger>
          <TabsTrigger value="series">Séries</TabsTrigger>
        </TabsList>
        <TabsContent value="movies">
          <Suspense fallback={<SearchLoading />}>
            <MoviesSearchList search={query} page={page} />
          </Suspense>
        </TabsContent>
        <TabsContent value="series">
          <Suspense fallback={<SearchLoading />}>
            <SeriesSearchList search={query} page={page} />
          </Suspense>
        </TabsContent>
      </Tabs>
    </Container>
  )
}

export default SearchPage
