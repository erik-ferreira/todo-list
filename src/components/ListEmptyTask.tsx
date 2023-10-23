import { View, Text } from "react-native"
import { Feather } from "@expo/vector-icons"

interface ListEmptyTaskProps {}

export function ListEmptyTask({ ...rest }: ListEmptyTaskProps) {
  return (
    <View className="w-full items-center px-5 py-12 border-t border-t-gray-300">
      <Feather name="clipboard" size={64} color="#3D3D3D" />

      <View className="mt-4">
        <Text className="text-gray-300 font-inter-bold text-sm text-center ">
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text className="text-gray-300 font-inter-regular text-sm text-center">
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  )
}
