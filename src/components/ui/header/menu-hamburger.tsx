'use client'
import { BiMenu, BiMenuAltRight } from 'react-icons/bi'

import { atom, useAtomValue, useSetAtom } from 'jotai'

export const navMenuIsOpen = atom(false)

export const MenuHamburger = () => {
  const setValueMenuIsOpen = useSetAtom(navMenuIsOpen)
  const menuOpen = useAtomValue(navMenuIsOpen)

  return (
    <button
      onClick={() => setValueMenuIsOpen((prev) => !prev)}
      className="flex items-center justify-center bg-transparent text-xl text-black duration-300 dark:text-white lg:hidden"
    >
      {menuOpen ? (
        <BiMenuAltRight className="h-9 w-9" />
      ) : (
        <BiMenu className="h-9 w-9" />
      )}
    </button>
  )
}
