import { Suspense } from 'react'

import { FlexContainer } from '@/components/interface/flex-container'

import { Logo } from './logo'
import { MenuHamburger } from './menu-hamburger'
import { Navbar } from './navbar/navbar'
import { Navigation } from './navbar/navigation'
import { SearchBar } from './search'
import { Theme } from './theme'

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 flex w-full max-w-[1920px] items-center justify-between gap-3 bg-white px-3 py-2 dark:bg-dark-blue-main lg:px-16">
      <Logo src={'/logo.png'} alt="cinematecando-logo" />
      <Navbar>
        <Theme className="mb-4 mr-auto flex lg:hidden" />
        <Suspense>
          <SearchBar className="mb-4 mr-auto flex lg:hidden" />
        </Suspense>
        <Navigation />
      </Navbar>
      <FlexContainer
        width="fit"
        gap="6"
        variant="centered-all"
        className="m-0 ml-auto sm:ml-0"
      >
        <Suspense>
          <SearchBar className="hidden lg:flex" />
        </Suspense>
        <Theme className="hidden lg:flex" />
        <MenuHamburger />
      </FlexContainer>
    </header>
  )
}
