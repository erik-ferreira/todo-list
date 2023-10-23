import { View, Text, Image } from "react-native"

import { Label } from "../components/Label"
import { Input } from "../components/Input"
import { Button } from "../components/Button"

import logoTodo from "../assets/logo.png"

interface HomeProps {}

export function Home({ ...rest }: HomeProps) {
  return (
    <View className="flex-1 bg-gray-600">
      <View className="w-full h-44 bg-gray-700 items-center justify-center">
        <Image source={logoTodo} className="w-28 h-8" />
      </View>

      <View className="flex-row gap-2 items-center justify-center">
        <Input />
        <Button />
      </View>

      <View className="flex-row justify-between">
        <Label />
        <Label variant="completed" />
      </View>
    </View>
  )
}
