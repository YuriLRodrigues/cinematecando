'use client'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <NextThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </NextThemeProvider>
  )
}
