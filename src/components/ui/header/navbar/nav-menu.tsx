'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { cn } from '@/lib/utils'

type NavMenuGenresProps = {
  genres: Array<{
    name: string
    id: number
  }>
  links: Array<{
    label: string
    url: string
  }>
}

export const NavMenu = ({ genres, links }: NavMenuGenresProps) => {
  const pathName = usePathname()
  const [mount, setMount] = useState<boolean>(false)

  useEffect(() => {
    setMount(true)
  }, [])

  return (
    mount && (
      <NavigationMenu>
        <NavigationMenuList className="flex-col items-start duration-0 lg:flex-row lg:items-center">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-black dark:text-white">
              Gêneros
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid max-h-[300px] gap-3 overflow-y-auto p-4 lg:max-h-none lg:w-[400px] lg:grid-cols-3">
                <li className="col-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Gênero
                      </div>
                      <p className="text-justify text-sm leading-tight text-muted-foreground">
                        Escolha um genero e aproveite para conhecer um pouco
                        mais sobre as series e filmes que mais estão em alta no
                        momento.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                {genres.map((genre) => (
                  <ListItem
                    href={`/genre/${genre.id}`}
                    title={genre.name}
                    key={genre.id}
                    className={`${pathName.includes('genre/' + String(genre.id)) && 'text-blue-main-highlight'}`}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {links.map((link) => (
            <NavigationMenuItem key={link.label}>
              <Link href={link.url}>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'bg-transparent text-black duration-300 dark:text-white',
                    `${pathName === link.url && 'text-blue-main-highlight dark:text-blue-main-highlight'} `,
                  )}
                >
                  {link.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    )
  )
}

export const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
