import { Movie } from '@/types/movie'
import { create } from 'zustand'

type ActionsProps = {
  addMovie: (movie: Movie) => void
  removeMovie: (movieId: number) => void
  // addSerie: (serie: any) => void
  // removeSerie: (serieId: number) => void
}

type MovieStoreProps = {
  movies: Movie[]
  // series: MovieDetailsEntity[]
  actions: ActionsProps
}

export const useMovieStore = create<MovieStoreProps>((set) => ({
  movies: [],
  series: [],

  actions: {
    addMovie: (movie: any) => {
      set((state) => ({
        movies: [...state.movies, movie],
      }))
    },

    removeMovie: (movieId: number) =>
      set((state) => ({
        movies: state.movies.filter((movie) => movie.id !== movieId),
      })),

    // addSerie: (serie: any) => {
    //   set((state) => ({
    //     series: [...state.series, serie],
    //   }))
    // },

    // removeSerie: (serieId: number) =>
    //   set((state) => ({
    //     movies: state.movies.filter((movie) => movie.id !== serieId),
    //   })),
  },
}))
