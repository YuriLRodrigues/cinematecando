export const PosterLoading = () => {
  return (
    <div className="mx-auto my-6 grid w-full grid-cols-1 gap-10 px-2 md:grid-cols-4 md:px-0 lg:pl-16">
      <div className="mx-auto min-h-96 min-w-72 animate-pulse overflow-hidden rounded-xl bg-slate-300 dark:bg-slate-600 md:mx-0 md:w-full" />
      <div className="md:col-span-3">
        <div className="md:min-h-80" />
        <div className="flex w-full gap-3 overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="h-36 min-w-52 animate-pulse overflow-hidden rounded-md bg-slate-300 p-2 dark:bg-slate-600"
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
