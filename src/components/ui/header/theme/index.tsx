'use client'

import { useTheme } from 'next-themes'
import { ComponentProps, useEffect, useState } from 'react'
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs'

import { cn } from '../../../../lib/utils'

type ThemeProps = ComponentProps<'button'>

export const Theme = ({ className, ...props }: ThemeProps) => {
  const { theme, setTheme, systemTheme } = useTheme()

  const currentTheme = theme === 'system' ? systemTheme : theme

  const [mount, setMount] = useState<boolean>(false)

  useEffect(() => {
    setMount(true)
  }, [])

  return (
    <button
      aria-label="theme-button"
      className={cn(
        `relative flex cursor-pointer justify-between gap-5 rounded-full bg-zinc-800 p-3 text-white duration-300 dark:bg-white`,
        className,
      )}
      onClick={() =>
        setTheme(mount && currentTheme === 'dark' ? 'light' : 'dark')
      }
      {...props}
    >
      <div
        className={`absolute top-0 h-[80%] w-[40%] rounded-full bg-blue-500 duration-300 ${currentTheme === 'light' ? 'top-1 -translate-x-[20%]' : 'top-1 translate-x-[100%]'}`}
      />
      <BsSunFill
        className={`z-10 h-5 w-5 text-white duration-300 dark:text-black`}
      />
      <BsFillMoonStarsFill
        className={`z-10 h-5 w-5 text-white duration-300 dark:text-white `}
      />
    </button>
  )
}
