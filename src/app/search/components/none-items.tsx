import { Text } from '@/components/ui/text'

type NoneItemsProps = {
  title: string
}

export const NoneItems = ({ title }: NoneItemsProps) => {
  return (
    <div className="flex min-h-[calc(100vh-110px)] w-full items-center justify-center gap-3 lg:min-h-[calc(100vh-210px)]">
      <Text size="xl" className="text-center">
        {title}
      </Text>
    </div>
  )
}
