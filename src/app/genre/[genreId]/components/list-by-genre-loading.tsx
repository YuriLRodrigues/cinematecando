export const ListByGenreLoading = async () => {
  return (
    <>
      <div className="my-6 mr-3 h-7 max-w-52 animate-pulse rounded-md bg-slate-300 dark:bg-slate-600 md:min-w-[450px]" />
      <div className="mx-auto my-6 grid w-full grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="min-h-72 min-w-full max-w-full animate-pulse rounded-md bg-slate-300 dark:bg-slate-600"
          />
        ))}
      </div>
    </>
  )
}
