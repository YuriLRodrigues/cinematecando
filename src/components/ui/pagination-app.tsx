import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

type PaginationAppProps = {
  total_pages: number
  actual_page: string
}

export const PaginationApp = ({
  actual_page,
  total_pages,
}: PaginationAppProps) => {
  return (
    <Pagination className="my-8">
      <PaginationContent>
        {+actual_page > 1 && (
          <PaginationItem>
            <PaginationPrevious href={`/movies?page=${+actual_page - 1}`} />
          </PaginationItem>
        )}

        {+actual_page > 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {+actual_page - 1 < total_pages && +actual_page - 1 > 0 && (
          <PaginationItem>
            <PaginationLink href={`/movies?page=${+actual_page - 1}`}>
              {+actual_page - 1}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationLink href={`/movies?page=${+actual_page}`} isActive>
            {actual_page}
          </PaginationLink>
        </PaginationItem>

        {+actual_page + 1 < total_pages && (
          <PaginationItem>
            <PaginationLink href={`/movies?page=${+actual_page + 1}`}>
              {+actual_page + 1}
            </PaginationLink>
          </PaginationItem>
        )}

        {+actual_page < total_pages && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {+actual_page < total_pages && (
          <PaginationItem>
            <PaginationNext href={`/movies?page=${+actual_page + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}
