import { CardLoading } from '@/components/ui/card/card-loading'

export const MyListLoading = () => {
  return (
    <div className="mx-auto my-6 grid w-full grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {Array.from({ length: 12 }).map((_, i) => (
        <CardLoading key={i} />
      ))}
    </div>
  )
}
