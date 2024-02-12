'use client'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/free-mode'

import { useRef } from 'react'

import { ImageBlurLoading } from '@/components/ui/image-blur-loading'
import { PrevNextSlideButtons } from '@/components/ui/prev-next-slide-buttons'

import { FreeMode, Parallax } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type PosterTrailersSliderProps = {
  trailers: Array<{
    air_date: string
    episode_count: number
    id: number
    name: string
    overview: string
    poster_path: string
    season_number: number
    vote_average: number
  }>
}

export const PosterTrailersSlider = ({
  trailers,
}: PosterTrailersSliderProps) => {
  const swiperRef = useRef<any>()

  const nextSlide = () => {
    swiperRef.current?.slideNext()
  }
  const prevSlide = () => {
    swiperRef.current?.slidePrev()
  }

  return (
    <>
      <Swiper
        onSwiper={(e) => (swiperRef.current = e)}
        rewind={true}
        modules={[FreeMode, Parallax]}
        parallax={true}
        className="mySwiper relative w-full !pt-16 md:!mt-auto"
        slidesPerView={'auto'}
        spaceBetween={10}
      >
        <PrevNextSlideButtons
          next={nextSlide}
          prev={prevSlide}
          className="top-[-65%]"
        />

        {trailers.map((trailer, i) => (
          <SwiperSlide key={i} className="h-36 w-52 overflow-hidden rounded-md">
            <ImageBlurLoading
              src={`${trailer.poster_path ? `https://image.tmdb.org/t/p/original${trailer.poster_path}` : '/default-movie-card.png'}`}
              width={500}
              height={500}
              className="aspect-square w-full object-cover object-center"
              alt={trailer.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
