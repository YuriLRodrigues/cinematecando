'use client'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/free-mode'

import Link from 'next/link'

import { Heading } from '@/components/ui/heading'
import { ImageBlurLoading } from '@/components/ui/image-blur-loading'

import { SeriesListEntity } from '@/domain/series/enterprise/series.entity'
import { FreeMode, Parallax } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type RecommendationsSliderProps = {
  series: SeriesListEntity
}

export const RecommendationsSlider = ({
  series,
}: RecommendationsSliderProps) => {
  return (
    series.results.length > 0 && (
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
            Recomendações
          </Heading>
          {series.results.map((serie) => (
            <SwiperSlide
              key={serie.id}
              className="min-h-96 min-w-52 max-w-56 cursor-pointer overflow-hidden rounded-md duration-300 hover:scale-95"
            >
              <Link href={`/serie/${serie.id}`}>
                <ImageBlurLoading
                  src={`${serie.poster_path ? `https://image.tmdb.org/t/p/original${serie.poster_path}` : '/default-movie-card.png'}`}
                  width={500}
                  height={500}
                  className="w-full object-cover object-center"
                  alt={serie.name}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    )
  )
}
