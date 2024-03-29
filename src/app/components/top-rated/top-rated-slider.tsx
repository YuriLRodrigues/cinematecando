'use client'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'

import Link from 'next/link'

import { Heading } from '@/components/ui/heading'
import { ImageBlurLoading } from '@/components/ui/image-blur-loading'

import { MoviesListEntity } from '@/domain/movies/enterprise/movies.entity'
import { FreeMode, Parallax } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type TopRatedSliderProps = {
  movies: MoviesListEntity
}

export const TopRatedSlider = ({ movies }: TopRatedSliderProps) => {
  return (
    <>
      <Swiper
        modules={[FreeMode, Parallax]}
        parallax={true}
        rewind={true}
        className="mySwiper relative mb-10 w-full !px-2 !pt-14 lg:!ml-32"
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
          size="xs"
          className="absolute left-0 top-0 z-[30] p-3 "
        >
          Top filmes mais avaliados
        </Heading>
        {movies.results.map((movie) => {
          return (
            <SwiperSlide
              key={movie.id}
              className="min-h-96 min-w-52 max-w-56 cursor-pointer rounded-md"
            >
              <Link href={`movie/${movie.id}`}>
                <ImageBlurLoading
                  src={`${movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : '/default-movie-card.png'}`}
                  width={500}
                  height={500}
                  className="aspect-square h-96 w-full rounded-md object-cover object-center duration-300 hover:scale-95"
                  alt={movie.title}
                />
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
