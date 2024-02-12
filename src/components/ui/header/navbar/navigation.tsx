import React from 'react'

import { genresFactory } from '@/infra/factory/genres.factory'

import { NavMenu } from './nav-menu'
import { NavMock } from './nav-mock'

export const Navigation = async () => {
  const { genres } = await genresFactory().findAll({
    token: process.env.API_TOKEN!,
  })

  return (
    <div className="flex w-full flex-col justify-between space-y-3 bg-transparent lg:flex-row lg:items-center lg:justify-center lg:space-x-8 lg:space-y-0 lg:pl-0 lg:pl-16">
      <NavMenu genres={genres} links={NavMock} />
    </div>
  )
}
