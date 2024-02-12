import { ComponentProps } from 'react'

import { FlexContainer } from '@/components/interface/flex-container'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

import { movieFactory } from '@/infra/factory/movies.factory'
import { cn } from '@/lib/utils'
import { convertNumberInHoursAndMinutes } from '@/utils/convert-number'
import { Dot } from 'lucide-react'

import { Poster } from '.'
import { AddToMyList } from '../add-to-my-list'

type PosterWrapperProps = {
  params: number
}

export const PosterWrapper = async ({ params }: PosterWrapperProps) => {
  const movieDetails = await movieFactory().findById({
    id: params,
    token: process.env.API_BEARER_TOKEN!,
  })

  const movieImages = await movieFactory().findImagesByMovieId({
    id: movieDetails.id,
    token: process.env.API_BEARER_TOKEN!,
  })

  return (
    <Poster.Root>
      <Poster.Card>
        <Poster.Image src={movieDetails.poster_path} alt="movie-poster" />
      </Poster.Card>

      <Poster.Details>
        <Heading HeadingType="h1" size="xg">
          {movieDetails.title}
        </Heading>
        <FlexContainer width="fit" gap="4" className="flex-wrap md:flex-nowrap">
          <Poster.Rating stars={movieDetails.vote_average} />

          <FlexContainer className="flex-wrap">
            <Text className="flex items-center justify-center gap-1">
              {new Date(movieDetails.release_date).getFullYear()}
              <Dot size={13} />
            </Text>

            <Text size="sm" className="flex items-center justify-center gap-1">
              {movieDetails.genres.map((genre, i) => {
                if (i === movieDetails.genres.length - 1) {
                  return `${genre.name}`
                }
                return `${genre.name}, `
              })}
              <Dot size={13} />
            </Text>

            <Text>{convertNumberInHoursAndMinutes(movieDetails.runtime)}</Text>
          </FlexContainer>
        </FlexContainer>

        <Text
          size="sm"
          align="justify"
          variant="subtitle"
          className="max-w-[650px]"
        >
          {movieDetails.overview}
        </Text>

        <AddToMyList movie={movieDetails} />

        {movieImages.backdrops.length > 0 && (
          <Poster.Images images={movieImages} />
        )}
      </Poster.Details>
    </Poster.Root>
  )
}
