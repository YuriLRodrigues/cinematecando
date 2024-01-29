'use client'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/scrollbar'

import Image from 'next/image'
import { Suspense, useRef, useState } from 'react'

import { Heading } from '@/components/ui/heading'
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
  Pagination,
  Autoplay,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { MovieDetails } from './movie-details'

type SliderThumbsProps = {
  movies: MoviesListEntity
}

export const SliderThumbs = ({ movies }: SliderThumbsProps) => {
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
        modules={[FreeMode, Thumbs, Parallax, Pagination, Autoplay]}
        autoplay={true}
        pagination={{
          type: 'progressbar',
        }}
        onSlideChange={(e) => handleSlideInfo(e)}
        parallax={true}
        className="mySwiper2 w-full"
      >
        <PrevNextSlideButtons next={nextSlide} prev={prevSlide} />

        {movies.results.map((movie) => {
          const releaseDate = new Date(movie.release_date)
          return (
            <SwiperSlide
              key={movie.id}
              className="relative h-full md:max-h-[750px]"
            >
              <Suspense fallback={<p>Loading...</p>}>
                <MovieDetails movie={movie} releaseDate={releaseDate} />
              </Suspense>

              <div className="absolute z-[20] h-full w-full bg-gradient-to-r from-dark-blue-main to-transparent" />
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                width={1920}
                height={500}
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
            spaceBetween: 10,
          },
        }}
        freeMode={true}
        rewind={true}
        watchSlidesProgress={true}
        scrollbar={{ draggable: true, dragSize: 'auto' }}
        modules={[FreeMode, Navigation, Thumbs, Scrollbar, A11y]}
        className="mySwiper mb-10 mt-3 max-h-[180px] w-full !pr-12 !pt-12"
      >
        <Heading
          HeadingType="h2"
          size="xs"
          className="absolute left-0 top-[-10%] z-[30] p-3 lg:px-16"
        >
          Populares no momento
        </Heading>
        {movies.results.map((movie, i) => (
          <SwiperSlide
            key={movie.id}
            className="!mb-6 max-h-fit max-w-[200px] p-2 !pb-12 md:max-w-none"
          >
            <Image
              width={200}
              height={200}
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              className={cn(
                'h-full cursor-pointer rounded-md opacity-65 duration-300 hover:scale-105',
                currentSlide === i &&
                  '!mb-6 scale-125 rounded-xl border-2 border-blue-main-highlight opacity-100',
              )}
              alt={movie.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}