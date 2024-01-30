import { Logo } from '../header/logo'
import { Text } from '../text'

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center space-y-3 bg-gray-100 py-6 dark:bg-dark-blue">
      <Logo src={'/logo.png'} alt="footer-logo" className="mx-auto" />

      <Text className="text-center">
        © Todos os direitos reservados a Cinematecando.
      </Text>
    </footer>
  )
}
