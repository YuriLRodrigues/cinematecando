'use client'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/free-mode'

import { Button } from '@nextui-org/react'
import Link from 'next/link'

import { FlexContainer } from '@/components/interface/flex-container'
import { Heading } from '@/components/ui/heading'
import { ImageBlurLoading } from '@/components/ui/image-blur-loading'
import { Text } from '@/components/ui/text'

import { MovieCastEntity } from '@/domain/movies/enterprise/movie-cast.entity'
import { FreeMode, Parallax } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type CastSliderProps = {
  cast: MovieCastEntity
  movieId: number
}

export const CastSlider = ({ cast, movieId }: CastSliderProps) => {
  return (
    <>
      <Swiper
        rewind={true}
        modules={[FreeMode, Parallax]}
        parallax={true}
        className="mySwiper relative !mb-10 !mt-10 max-w-full !px-2 !pt-14 md:!mt-20 lg:!ml-16 lg:!px-0"
        slidesPerView={'auto'}
        breakpoints={{
          10: {
            spaceBetween: 15,
          },
          768: {
            spaceBetween: 20,
          },
          1024: {
            spaceBetween: 30,
          },
          1440: {
            spaceBetween: 40,
          },
        }}
      >
        <Heading
          HeadingType="h2"
          size="sm"
          className="absolute left-0 top-0 z-[30] pl-3 md:pl-0"
        >
          Elenco
        </Heading>

        <Button
          className="absolute right-0 top-0 z-[30] mr-2 rounded-md bg-blue-main-highlight px-2 py-1"
          size="sm"
        >
          <Link href={`/movie/${movieId}/cast`}>Ver todos</Link>
        </Button>

        {cast.cast.map((cast) => (
          <SwiperSlide
            key={cast.id}
            className="min-h-96 min-w-52 max-w-56 cursor-pointer rounded-md"
          >
            <FlexContainer
              variant="centered-col"
              className="absolute bottom-0 z-[20] flex h-full w-full flex-col justify-end bg-gradient-to-t from-dark-blue-main/70 to-transparent px-2"
            >
              <Heading
                HeadingType="h3"
                size="xs"
                position="centered"
                className="line-clamp-1 text-white"
              >
                {cast.name}
              </Heading>
              <Text
                variant="subtitle"
                position="centered"
                className="line-clamp-1"
              >
                {cast.character.split('(')[0]}
              </Text>
            </FlexContainer>
            <ImageBlurLoading
              src={`${cast.profile_path ? `https://image.tmdb.org/t/p/original${cast.profile_path}` : '/default-img.png'}`}
              width={500}
              height={500}
              className="aspect-square h-96 w-full rounded-md object-cover object-center duration-300 hover:scale-95"
              alt={cast.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
