import { Suspense } from 'react'

import { MyListLoading } from './components/my-list-loading'
import { MyListMovies } from './components/my-list-movies'
import { Container } from '@/components/interface/container'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function MyList() {
  return (
    <Container
      mt={24}
      className="min-h-[calc(100vh-110px)] px-3 lg:min-h-[calc(100vh-210px)] lg:px-16"
    >
      <Tabs defaultValue="movies" className="w-full flex-wrap">
        <TabsList className="bg-transparent">
          <TabsTrigger value="movies">Filmes</TabsTrigger>
          <TabsTrigger value="series">Séries</TabsTrigger>
        </TabsList>
        <Suspense fallback={<MyListLoading />}>
          <TabsContent value="movies">
            <MyListMovies />
          </TabsContent>
        </Suspense>
        <TabsContent value="series">Change your password here.</TabsContent>
      </Tabs>
    </Container>
  )
}
