import { Suspense } from 'react'

import { FlexContainer } from '@/components/interface/flex-container'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { WrapperClient } from '@/components/ui/wrapper-client'

import { serieFactory } from '@/infra/factory/series.factory'
import { Dot } from 'lucide-react'

import { Poster } from '.'
import { AddToMyList } from '../add-to-my-list'

type PosterWrapperProps = {
  params: number
}

export const PosterWrapper = async ({ params }: PosterWrapperProps) => {
  const serieDetails = await serieFactory().findById({
    id: params,
    token: process.env.API_BEARER_TOKEN!,
  })

  const serieSeasons = serieDetails.seasons

  return (
    <Poster.Root>
      <Poster.Card>
        <Poster.Image src={serieDetails.poster_path} alt="movie-poster" />
      </Poster.Card>

      <Poster.Details>
        <Heading HeadingType="h1" size="xg">
          {serieDetails.name}
        </Heading>
        <FlexContainer width="fit" gap="4" className="flex-wrap md:flex-nowrap">
          <Poster.Rating stars={serieDetails.vote_average} />

          <FlexContainer className="flex-wrap">
            <Text className="flex items-center justify-center gap-1">
              {new Date(serieDetails.first_air_date).getFullYear()}
              <Dot size={13} />
            </Text>

            <Text size="sm" className="flex items-center justify-center gap-1">
              {serieDetails.genres.map((genre, i) => {
                if (i === serieDetails.genres.length - 1) {
                  return `${genre.name}`
                }
                return `${genre.name}, `
              })}
              <Dot size={13} />
            </Text>

            <Text>{serieDetails.number_of_seasons} Temporadas</Text>
          </FlexContainer>
        </FlexContainer>

        <Text
          size="sm"
          align="justify"
          variant="subtitle"
          className="max-w-[650px]"
        >
          {serieDetails.overview ?? 'Descrição não informada'}
        </Text>

        <WrapperClient>
          <AddToMyList serie={serieDetails} />
        </WrapperClient>

        {serieSeasons.length > 0 && <Poster.Trailers trailers={serieSeasons} />}
      </Poster.Details>
    </Poster.Root>
  )
}
