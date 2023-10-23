import Checkbox from "expo-checkbox"
import { View, Text } from "react-native"

import { Button } from "./Button"

export interface TaskProps {
  id: string
  label: string
  checked: boolean
}

interface TaskComponentProps {
  task: TaskProps
  onToggleCheckedTask: (value: boolean) => void
  onRemoveTask: () => void
}

export function Task({
  task,
  onRemoveTask,
  onToggleCheckedTask,
}: TaskComponentProps) {
  const { checked, label } = task

  return (
    <View className="flex-row bg-gray-500 border border-gray-400 rounded-lg p-3 items-center mb-4">
      <Checkbox
        value={checked}
        color={checked ? "#5E60CE" : "#4EA8DE"}
        onValueChange={onToggleCheckedTask}
      />

      <Text
        className={`flex-1 font-inter-regular  mx-2 ${
          checked ? "text-gray-300 line-through" : "text-gray-100"
        }`}
      >
        {label}
      </Text>

      <Button variant="trash" onPress={onRemoveTask} />
    </View>
  )
}
