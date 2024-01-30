'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ComponentProps, useCallback, useEffect, useRef } from 'react'

import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'

export const SearchBar = ({ className, ...props }: ComponentProps<'input'>) => {
  const searchRef = useRef<HTMLInputElement>(null)

  const router = useRouter()
  const pathname = usePathname()

  const searchParams = useSearchParams()
  const defaultValue = searchParams.get('query')

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams as unknown as string)
      params.set(name, value)
      params.delete('page')

      return params.toString()
    },
    [searchParams],
  )

  const removeQueryString = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams as unknown as string)
      params.delete(name)

      return params.toString()
    },
    [searchParams],
  )

  // Teclas de atalho ESC para limpar o campo de busca
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        router.push(pathname + '?' + removeQueryString('query'))
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [router, pathname, removeQueryString])

  const handleSearchMovies = () => {
    const value = searchRef.current?.value.toLowerCase()

    if (value) {
      router.push(pathname + 'search?' + createQueryString('query', value))
    } else {
      router.push('/')
    }
  }

  return (
    <div className="relative w-fit max-w-full">
      <input
        ref={searchRef}
        type="text"
        placeholder="Buscar filmes ou séries..."
        defaultValue={defaultValue || undefined}
        // onKeyUp={handleSearchMovies}
        className={cn(
          'w-fit max-w-72 rounded-xl bg-zinc-100 p-2 pr-8 outline-none duration-300 dark:border-dark-blue-main dark:bg-dark-blue',
          className,
        )}
        {...props}
      />
      <button
        onClick={handleSearchMovies}
        className="absolute right-2 top-[15%] md:top-[18%]"
        aria-label="Buscar por um filme ou série"
      >
        <Search className="w-10/12 text-blue-main-highlight" />
      </button>
    </div>
  )
}
