import Checkbox from "expo-checkbox"
import { View, Text } from "react-native"

import { Button } from "./Button"

interface TaskProps {}

export function Task({ ...rest }: TaskProps) {
  const checked = true

  return (
    <View className="flex-row bg-gray-500 border border-gray-400 rounded-lg p-3 items-center mb-4">
      <Checkbox value={checked} color={checked ? "#5E60CE" : "#4EA8DE"} />

      <Text
        className={`flex-1 font-inter-regular line-through mx-2 ${
          checked ? "text-gray-300" : "text-gray-100"
        }`}
      >
        1Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>

      <Button variant="trash" />
    </View>
  )
}
