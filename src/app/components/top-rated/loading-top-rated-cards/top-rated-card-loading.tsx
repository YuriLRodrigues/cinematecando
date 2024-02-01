import { ImageBlurLoading } from '@/components/ui/image-blur-loading'

export const TopRatedCardLoading = () => {
  return (
    <div className="min-h-96 min-w-56 animate-pulse cursor-pointer rounded-md bg-slate-300 p-2 dark:bg-slate-600 md:max-w-52">
      <ImageBlurLoading
        src={'/default-movie-card.png'}
        width={500}
        height={500}
        className="aspect-square h-96 w-full rounded-md object-cover object-center duration-300 hover:scale-95"
        alt={'loading-movie-card'}
      />
    </div>
  )
}
