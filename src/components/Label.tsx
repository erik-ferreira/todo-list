import { View, Text, ViewProps } from "react-native"

const variantsLabel = {
  created: {
    label: "Criadas",
    bg: "text-blue-normal",
  },
  completed: {
    label: "Concluídas",
    bg: "text-purple-normal",
  },
} as const

interface LabelProps extends ViewProps {
  variant?: keyof typeof variantsLabel
  amount?: number
}

export function Label({
  variant = "created",
  amount = 0,
  ...rest
}: LabelProps) {
  const label = variantsLabel[variant]

  return (
    <View className="flex-row gap-2" {...rest}>
      <Text className={`text-sm font-inter-bold ${label.bg}`}>
        {label.label}
      </Text>
      <Text className="py-0.5 px-2 bg-gray-400 rounded-full text-gray-200">
        {amount}
      </Text>
    </View>
  )
}
