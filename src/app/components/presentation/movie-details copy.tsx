import { FaStar } from 'react-icons/fa'

import { FlexContainer } from '@/components/interface/flex-container'
import { AddToMyListButton } from '@/components/ui/add-to-my-list-button'
import { Heading } from '@/components/ui/heading'
import { ReadMoreButton } from '@/components/ui/read-more-button'
import { Text } from '@/components/ui/text'

import { movieFactory } from '@/infra/factory/movies.factory'
import { Calendar, Dot } from 'lucide-react'

type MovieDetailsDetailsProps = {
  movieId: number
}

export const MovieDetails = async ({ movieId }: MovieDetailsDetailsProps) => {
  const MovieDetailsData = await movieFactory().findById({
    id: movieId,
    token: process.env.API_BEARER_TOKEN!,
  })

  const releaseData = new Date(MovieDetailsData.release_date)
    .toLocaleString()
    .split(',')[0]

  return (
    <div>Teste</div>
    // <div className="absolute left-0 top-0 z-[30] flex h-full w-full flex-col justify-center space-y-2 p-3 md:space-y-4 lg:px-16">
    //   <Heading HeadingType="h3" size="sm" className="text-white">
    //     {MovieDetailsData.title}
    //   </Heading>
    //   <FlexContainer variant="centered-all">
    //     <span className="flex items-center justify-center gap-3 text-white">
    //       <FaStar className="text-yellow-500" />
    //       {MovieDetailsData.vote_average.toFixed(1)}/10
    //     </span>
    //     <Dot className="text-white" />
    //     <FlexContainer>
    //       <Text
    //         size="sm"
    //         className="flex items-center justify-center gap-2  text-white"
    //       >
    //         {releaseData}
    //         <Calendar className="h-4 w-4" />
    //       </Text>
    //     </FlexContainer>
    //   </FlexContainer>
    //   <Text
    //     className="line-clamp-5 max-w-[250px] text-white md:line-clamp-6 md:max-w-lg"
    //     size="sm"
    //     align="justify"
    //   >
    //     {MovieDetailsData.overview}
    //   </Text>
    //   <FlexContainer gap="4">
    //     <ReadMoreButton link={`MovieDetails/${MovieDetailsData.id}`} />
    //     <AddToMyListButton movieId={MovieDetailsData.id} />
    //   </FlexContainer>
    // </div>
  )
}
