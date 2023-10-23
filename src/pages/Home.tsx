import { View, Text, Image, FlatList } from "react-native"

import { Task } from "../components/Task"
import { Label } from "../components/Label"
import { Input } from "../components/Input"
import { Button } from "../components/Button"

import logoTodo from "../assets/logo.png"

interface HomeProps {}

const data = [
  "1Integer urna interdum massa libero auctor neque turpis turpis semper.",
  "2Integer urna interdum massa libero auctor neque turpis turpis semper.",
  "3Integer urna interdum massa libero auctor neque turpis turpis semper.",
]

export function Home({ ...rest }: HomeProps) {
  return (
    <View className="flex-1 bg-gray-600">
      <View className="w-full h-44 bg-gray-700 items-center justify-center">
        <Image source={logoTodo} className="w-28 h-8" />
      </View>

      <View className="flex-row px-6 mb-8">
        <Input />
        <Button />
      </View>

      <View className="flex-row justify-between px-6">
        <Label />
        <Label variant="completed" />
      </View>

      {/*<FlatList
        data={data}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Task />}
        contentContainerStyle={{
          gap: 8,
          paddingHorizontal: 24,
          borderWidth: 1,
          borderColor: "white",
        }}
      /> */}
    </View>
  )
}
