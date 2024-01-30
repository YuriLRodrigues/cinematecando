import Image from 'next/image'
import Link from 'next/link'
import { ComponentProps } from 'react'

import { Text } from '../text'

type LogoProps = ComponentProps<typeof Image>

export const Logo = ({ ...props }: LogoProps) => {
  return (
    <div>
      <Link href="/" className="flex items-center justify-center gap-2">
        <Image
          {...props}
          width={80}
          height={80}
          className="h-5 w-5 object-cover object-center md:h-7 md:w-7"
        />
        <Text variant="highlight">Cinematecando</Text>
      </Link>
    </div>
  )
}
