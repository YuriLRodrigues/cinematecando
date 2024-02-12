'use client'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/scrollbar'

import { Suspense, useRef, useState } from 'react'

import { Heading } from '@/components/ui/heading'
import { ImageBlurLoading } from '@/components/ui/image-blur-loading'
import { PrevNextSlideButtons } from '@/components/ui/prev-next-slide-buttons'

import { MoviesListEntity } from '@/domain/movies/enterprise/movies.entity'
import { cn } from '@/lib/utils'
import {
  FreeMode,
  Navigation,
  Thumbs,
  Scrollbar,
  A11y,
  Parallax,
  Autoplay,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { MovieDetails } from './movie-details'

type SliderThumbsProps = {
  movies: MoviesListEntity
}

export const PresentationSliderWithThumbs = ({ movies }: SliderThumbsProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const swiperRef = useRef<any>()

  const nextSlide = () => {
    swiperRef.current?.slideNext()
  }
  const prevSlide = () => {
    swiperRef.current?.slidePrev()
  }

  const handleSlideInfo = (e: any) => {
    setCurrentSlide(e.realIndex)
  }

  return (
    <>
      <Swiper
        onSwiper={(e) => (swiperRef.current = e)}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs, Parallax, Autoplay]}
        autoplay={true}
        onSlideChange={(e) => handleSlideInfo(e)}
        parallax={true}
        className="mySwiper2 w-full"
      >
        {movies.results.map((movie) => {
          const releaseDate = new Date(movie.release_date)
          return (
            <SwiperSlide
              key={movie.id}
              className="relative h-full md:max-h-[750px]"
            >
              <MovieDetails movie={movie} releaseDate={releaseDate} />

              <div className="absolute z-[20] h-full w-full bg-gradient-to-r from-dark-blue-main to-transparent" />
              <ImageBlurLoading
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                width={1850}
                height={600}
                className="h-full w-full object-cover object-center"
                alt={movie.title}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper as any}
        loop={true}
        breakpoints={{
          10: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          420: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          1500: {
            slidesPerView: 8,
            spaceBetween: 10,
          },
          1740: {
            slidesPerView: 9,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        rewind={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, A11y]}
        className="mySwiper max-h-[180px] w-full max-w-full !px-6 !pb-6 !pt-12 md:!mb-10 md:max-h-[200px]"
      >
        <PrevNextSlideButtons next={nextSlide} prev={prevSlide} />
        <Heading
          HeadingType="h2"
          size="xs"
          className="absolute left-0 top-[-5%] z-[30] p-3 lg:px-16"
        >
          Populares
        </Heading>
        {movies.results.map((movie, i) => (
          <SwiperSlide
            key={movie.id}
            className="max-h-fit min-w-[150px] max-w-[200px] p-2 md:max-w-none"
          >
            <ImageBlurLoading
              width={200}
              height={200}
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              className={cn(
                'h-full cursor-pointer rounded-md opacity-65 duration-300 hover:scale-105',
                currentSlide === i &&
                  '!mb-3 scale-125 rounded-xl border-2 border-blue-main-highlight opacity-100 md:!mb-6',
              )}
              alt={movie.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
