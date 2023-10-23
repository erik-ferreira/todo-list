import { View, Text, Image, FlatList } from "react-native"

import { Task } from "../components/Task"
import { Label } from "../components/Label"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { ListEmptyTask } from "../components/ListEmptyTask"

import logoTodo from "../assets/logo.png"

interface HomeProps {}

const data = [
  "1Integer urna interdum massa libero auctor neque turpis turpis semper.",
  "2Integer urna interdum massa libero auctor neque turpis turpis semper.",
  "3aInteger urna interdum massa libero auctor neque turpis turpis semper.",
  "3Icanteger urna interdum massa libero auctor neque turpis turpis semper.",
  "3Incteger urna interdum massa libero auctor neque turpis turpis semper.",
  "3Intaeger urna interdum massa libero auctor neque turpis turpis semper.",
  "3Intecger urna interdum massa libero auctor neque turpis turpis semper.",
  "3Integaer urna interdum massa libero auctor neque turpis turpis semper.",
  "3Integeccr urna interdum massa libero auctor neque turpis turpis semper.",
] as string[]

export function Home({ ...rest }: HomeProps) {
  return (
    <View className="flex-1 bg-gray-600">
      <View className="w-full h-44 bg-gray-700 items-center justify-center">
        <Image source={logoTodo} className="w-28 h-8" />
      </View>

      <View className="flex-row px-6 mb-8 -mt-8">
        <Input />
        <Button />
      </View>

      <View className="flex-row justify-between px-6">
        <Label />
        <Label variant="completed" />
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Task />}
        className="mt-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingVertical: 16,
        }}
        ListEmptyComponent={ListEmptyTask}
      />
    </View>
  )
}
