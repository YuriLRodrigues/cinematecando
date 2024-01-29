import { MovieCardLoading } from './movie-card-loading'
import { ThumbsCardLoading } from './thumbs-card-loading'

export const MoviesPresentationLoading = () => {
  return (
    <div className="flex h-[calc(100vh-100px)] w-full flex-col items-center justify-center overflow-hidden">
      <MovieCardLoading />
      <div className="mt-4 flex gap-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <ThumbsCardLoading key={i} />
        ))}
      </div>
    </div>
  )
}
