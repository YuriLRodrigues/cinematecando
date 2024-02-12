'use client'
import { Movie } from '@/types/movie'
import { Serie } from '@/types/serie'
import { create } from 'zustand'

type ActionsProps = {
  addAllMovies: (movies: Movie[]) => void
  addAllSeries: (series: Serie[]) => void
  addMovie: (movie: any) => void
  removeMovie: (movieId: number) => void
  movieAlreadyExists: (movieId: number) => boolean
  addSerie: (serie: any) => void
  removeSerie: (serieId: number) => void
  serieAlreadyExists: (serieId: number) => boolean
}

type MovieStoreProps = {
  movies: Movie[]
  series: Serie[]
  actions: ActionsProps
}

export const useMovieStore = create<MovieStoreProps>((set, get) => ({
  movies: [],
  series: [],

  actions: {
    addAllMovies: (movies: Movie[]) => {
      return movies
    },

    addMovie: (movie: any) => {
      set((state) => {
        return {
          movies: [...state.movies, movie],
        }
      })
    },

    movieAlreadyExists(movieId) {
      return get().movies.some((movie) => movie.id === movieId)
    },

    removeMovie: (movieId: number) =>
      set((state) => ({
        movies: state.movies.filter((movie) => movie.id !== movieId),
      })),

    addAllSeries: (series: Serie[]) => {
      return series
    },

    addSerie: (serie: any) => {
      set((state) => ({
        series: [...state.series, serie],
      }))
    },

    removeSerie: (serieId: number) =>
      set((state) => ({
        series: state.series.filter((serie) => serie.id !== serieId),
      })),

    serieAlreadyExists(serieId) {
      return get().series.some((serie) => serie.id === serieId)
    },
  },
}))
