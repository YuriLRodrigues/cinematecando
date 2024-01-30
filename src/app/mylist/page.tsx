import { MyListMovies } from './components/my-list-movies'
import { Container } from '@/components/interface/container'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function MyList() {
  return (
    <Container mt={24} className="px-3 lg:px-16">
      <Tabs defaultValue="movies" className="w-full flex-wrap">
        <TabsList className="bg-transparent">
          <TabsTrigger value="movies">Filmes</TabsTrigger>
          <TabsTrigger value="series">Séries</TabsTrigger>
        </TabsList>
        <TabsContent value="movies">
          <MyListMovies />
        </TabsContent>
        <TabsContent value="series">Change your password here.</TabsContent>
      </Tabs>
    </Container>
  )
}
