'use client'
import { ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { useAtomValue } from 'jotai'

import { navMenuIsOpen } from '../menu-hamburger'

export const Navbar = ({ children }: { children: ReactNode }) => {
  const menuOpen = useAtomValue(navMenuIsOpen)

  return (
    <nav
      className={cn(
        'absolute right-0 top-12 -z-40 mt-0.5 flex w-full max-w-[1920px] flex-1 flex-col justify-center bg-transparent p-4 duration-300 lg:static lg:items-center',
        menuOpen && 'bg-white dark:bg-dark-blue-main lg:translate-y-0',
        !menuOpen && 'translate-y-[-200%] lg:translate-y-0',
      )}
    >
      {children}
    </nav>
  )
}
