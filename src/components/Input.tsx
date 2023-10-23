import { TextInput, TextInputProps } from "react-native"

interface InputProps extends TextInputProps {}

export function Input({ ...rest }: InputProps) {
  return (
    <TextInput
      className="flex-1 border border-gray-700 bg-gray-500 rounded-md p-4 text-base text-gray-100 mr-2"
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor="#808080"
      {...rest}
    />
  )
}
