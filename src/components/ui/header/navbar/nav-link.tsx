'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type NavlinkProps = ComponentProps<typeof Link>

export const Navlink = ({ className, ...props }: NavlinkProps) => {
  const pathName = usePathname()
  const current = pathName === props.href

  return (
    <li className="flex cursor-pointer list-none items-center text-center">
      <Link
        className={cn(
          `border-blue-main hover:text-blue-main dark:hover:text-blue-main lgborder-l-0 lgpl-0 lgafter:absolute lgafter:-bottom-[5px] lgafter:left-0 lgafter:h-[1.5px] lgafter:w-0 lgafter:bg-gradient-to-r lgafter:duration-300 lgafter:content-[''] lghover:after:w-[100%] px-3 text-black duration-700 first-letter:uppercase dark:text-white ${
            current &&
            'bg-blue-main lgtext-blue-main dark:lgtext-blue-main lgbg-transparent rounded-md p-1 px-3 text-white'
          }`,
          className,
        )}
        {...props}
      />
    </li>
  )
}
