'use client'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import React, { ReactNode, useEffect } from 'react'

import { useMovieStore } from '@/store/use-movie-store'
import { Movie } from '@/types/movie'
import { Serie } from '@/types/serie'
import { useLocalStorage } from '@uidotdev/usehooks'

export const Providers = ({ children }: { children: ReactNode }) => {
  const [movies, setMovies] = useLocalStorage<Movie[]>('movies', [])
  const [series, setSeries] = useLocalStorage<Serie[]>('series', [])

  useEffect(() => {
    useMovieStore.setState({ movies: movies })
    useMovieStore.setState({ series: series })
  }, [movies, series])

  return (
    <NextUIProvider>
      <NextThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        {children}
      </NextThemeProvider>
    </NextUIProvider>
  )
}
