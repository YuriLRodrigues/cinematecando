import { FaStar } from 'react-icons/fa'

import { FlexContainer } from '@/components/interface/flex-container'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

import { Calendar, Dot } from 'lucide-react'

import { AddToMyListButton } from './add-to-my-list-button'
import { ReadMoreButton } from './read-more-button'

type MovieDetailsProps = {
  movie: {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }
  releaseDate: Date
}

export const MovieDetails = ({ movie, releaseDate }: MovieDetailsProps) => {
  return (
    <div className="absolute left-0 top-0 z-[30] flex h-full w-full flex-col justify-center space-y-2 p-3 md:space-y-4 lg:px-16">
      <Heading HeadingType="h3" size="sm" className="text-white">
        {movie.title}
      </Heading>
      <FlexContainer variant="centered-all">
        <span className="flex items-center justify-center gap-3 text-white">
          <FaStar className="text-yellow-500" />
          {movie.vote_average.toFixed(1)}/10
        </span>
        <Dot className="text-white" />
        <FlexContainer>
          <Text
            size="sm"
            className="flex items-center justify-center gap-2 text-white"
          >
            {releaseDate.toLocaleString().split(',')[0]}
            <Calendar className="h-4 w-4" />
          </Text>
        </FlexContainer>
      </FlexContainer>
      <Text
        className="line-clamp-4 max-w-[220px] text-white md:line-clamp-6 md:max-w-lg"
        size="sm"
        align="justify"
      >
        {movie.overview}
      </Text>
      <FlexContainer gap="4">
        <ReadMoreButton link={`movie/${movie.id}`} />
        <AddToMyListButton movieId={movie.id} />
      </FlexContainer>
    </div>
  )
}
