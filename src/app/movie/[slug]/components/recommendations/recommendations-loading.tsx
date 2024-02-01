import { Heading } from '@/components/ui/heading'

export const RecommendationsLoading = () => {
  return (
    <div className="relative !mb-10 !mt-10 flex max-w-full gap-8 overflow-hidden !px-2 !pt-14 md:!mt-20 lg:!ml-16">
      <Heading
        HeadingType="h2"
        size="sm"
        className="absolute left-0 top-0 z-[30] p-3"
      >
        Recomendações
      </Heading>
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="min-h-96 min-w-56 max-w-56 animate-pulse cursor-pointer rounded-md bg-slate-300 dark:bg-slate-600 lg:px-0"
        ></div>
      ))}
    </div>
  )
}
