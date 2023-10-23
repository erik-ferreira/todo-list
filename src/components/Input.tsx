import { View, Text, TextInput, TouchableOpacity } from "react-native"

interface InputProps {}

export function Input({ ...rest }: InputProps) {
  return (
    <TextInput
      className="flex-1 border border-gray-700 bg-gray-500 rounded-md p-4 text-base text-gray-100"
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor="#808080"
    />
  )
}