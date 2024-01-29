import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import './globals.css'
import { Footer } from '@/components/ui/footer'
import { Header } from '@/components/ui/header/index'

import { cn } from '@/lib/utils'
import { Providers } from '@/providers/providers'

const poppins = Poppins({ subsets: ['latin'], weight: '600' })

export const metadata: Metadata = {
  title: 'cinematecando',
  themeColor: '#000',
  description:
    'O cinematecando é um aplicativo dedicado a entusiastas de filmes e séries, oferecendo uma experiência completa e personalizada para explorar, descobrir e gerenciar seu universo cinematográfico. Com uma interface intuitiva e recursos abrangentes, o cinematecando permite que os usuários mergulhem no mundo do entretenimento audiovisual de uma maneira única.',
  icons: {
    icon: ['/logo.png'],
  },
  applicationName: 'Eduardo Amaro | Desenvolvedor Full-Stack',
  keywords:
    'Cinema, Filmes, Code, Series, Web Development, Front-End Developer, Developer, Full-Stack Developer, Brazil, Brasil',
  openGraph: {
    type: 'website',
    title: 'cinematecando',
    description:
      'O cinematecando é um aplicativo dedicado a entusiastas de filmes e séries, oferecendo uma experiência completa e personalizada para explorar, descobrir e gerenciar seu universo cinematográfico. Com uma interface intuitiva e recursos abrangentes, o cinematecando permite que os usuários mergulhem no mundo do entretenimento audiovisual de uma maneira única.',
    // images: '',
  },
  twitter: {
    card: 'summary_large_image',
    site: '', // Adicionar
    creator: '@YuriLRodrigues',
    title: 'cinematecando',
    // images: '',
    description:
      'O cinematecando é um aplicativo dedicado a entusiastas de filmes e séries, oferecendo uma experiência completa e personalizada para explorar, descobrir e gerenciar seu universo cinematográfico. Com uma interface intuitiva e recursos abrangentes, o cinematecando permite que os usuários mergulhem no mundo do entretenimento audiovisual de uma maneira única.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        id="app"
        className={cn(
          `${poppins.className}`,
          `overflow-x-hidden duration-300 dark:bg-dark-blue-main`,
        )}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
