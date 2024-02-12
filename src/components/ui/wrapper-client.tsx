'use client'
import { ReactNode, Suspense, useEffect, useState } from 'react'

type WrapperClientProps = {
  children: ReactNode
}

export const WrapperClient = ({ children }: WrapperClientProps) => {
  const [mount, setMount] = useState<boolean>(false)

  useEffect(() => {
    setMount(true)
  }, [])

  if (!mount) return null

  return <Suspense>{children}</Suspense>
}
