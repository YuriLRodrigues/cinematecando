import { movieFactory } from '@/infra/factory/movies.factory'

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

export default async function MovieDetails({
  params,
}: {
  params: { slug: string }
}) {
  return (
    <div>
      <p>Movie: {params.slug}</p>
    </div>
  )
}
