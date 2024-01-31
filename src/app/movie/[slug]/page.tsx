import { Suspense } from 'react'

import { PosterLoading } from './components/poster/poster-loading'
import { PosterWrapper } from './components/poster/poster-wrapper'
import { Container } from '@/components/interface/container'

// export async function generateStaticParams({
//   params,
// }: {
//   params: { slug: string }
// }) {
//   const movie = await movieFactory().findById({
//     id: +params.slug,
//     token: process.env.API_BEARER_TOKEN!,
//   })

//   return movie
// }

type MovieDetailsProps = {
  params: { slug: number }
}

export default async function MovieDetails({ params }: MovieDetailsProps) {
  return (
    <Container mt={24}>
      <Suspense fallback={<PosterLoading />}>
        <PosterWrapper params={params.slug} />
      </Suspense>
    </Container>
  )
}
