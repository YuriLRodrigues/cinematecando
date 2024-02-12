import { CastSliderByCrew } from './components/cast-slide-by-crew'
import { Container } from '@/components/interface/container'

import { movieFactory } from '@/infra/factory/movies.factory'

type CastProps = {
  params: { slug: number }
}

export default async function Cast({ params }: CastProps) {
  const cast = await movieFactory().findCastersByMovieId({
    id: params.slug,
    token: process.env.API_BEARER_TOKEN!,
  })

  const findByCastDepartament = (departament: string) => {
    return cast.crew.filter((cast) => cast.department === departament)
  }

  return (
    <Container mt={24} className="px-3 lg:px-16">
      <CastSliderByCrew
        crew={findByCastDepartament('Directing')}
        title="Diretor(a)"
      />
      <CastSliderByCrew
        crew={findByCastDepartament('Writing')}
        title="Escritor(a)"
      />
      <CastSliderByCrew
        crew={findByCastDepartament('Production')}
        title="Produtor(a)"
      />
      <CastSliderByCrew crew={findByCastDepartament('Art')} title="Arte" />
      <CastSliderByCrew crew={findByCastDepartament('Sound')} title="Som" />
      <CastSliderByCrew
        crew={findByCastDepartament('Editing')}
        title="Editor"
      />
      <CastSliderByCrew crew={findByCastDepartament('Camera')} title="Câmera" />
    </Container>
  )
}
