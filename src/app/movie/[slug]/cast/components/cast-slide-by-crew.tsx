'use client'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/free-mode'

import { FlexContainer } from '@/components/interface/flex-container'
import { Heading } from '@/components/ui/heading'
import { ImageBlurLoading } from '@/components/ui/image-blur-loading'
import { Text } from '@/components/ui/text'

import { FreeMode, Parallax } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type CastSliderByCrewProps = {
  crew: Array<{
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string
    credit_id: string
    department: string
    job: string
  }>
  title: string
}

export const CastSliderByCrew = ({ crew, title }: CastSliderByCrewProps) => {
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
          {title}
        </Heading>

        {crew.map((people) => (
          <SwiperSlide
            key={people.id}
            className="min-h-96 min-w-52 max-w-56 cursor-pointer rounded-md"
          >
            <FlexContainer
              variant="centered-col"
              className="absolute bottom-0 z-[20] flex h-full w-full flex-col justify-end bg-gradient-to-t from-dark-blue-main/70 to-transparent px-2"
            >
              <Heading
                HeadingType="h3"
                position="centered"
                size="xs"
                className="line-clamp-1 text-white"
              >
                {people.name}
              </Heading>
              <Text
                variant="subtitle"
                position="centered"
                className="line-clamp-1"
              >
                {people.known_for_department}
              </Text>
            </FlexContainer>
            <ImageBlurLoading
              src={`${people.profile_path ? `https://image.tmdb.org/t/p/original${people.profile_path}` : '/default-img.png'}`}
              width={500}
              height={500}
              className="aspect-square h-96 w-full rounded-md object-cover object-center duration-300 hover:scale-95"
              alt={people.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
