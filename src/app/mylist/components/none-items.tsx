import { Text } from '@/components/ui/text'

import { X } from 'lucide-react'

export const NoneItems = () => {
  return (
    <div className="flex min-h-[calc(100vh-110px)] w-full items-center justify-center gap-3 lg:min-h-[calc(100vh-210px)]">
      <Text size="xl" className="text-center">
        Nenhum filme ou série na sua lista ainda...
      </Text>
    </div>
  )
}
