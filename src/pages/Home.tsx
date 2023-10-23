import { useState } from "react"
import uuid from "react-native-uuid"
import { View, Image, FlatList, Alert } from "react-native"

import { Label } from "../components/Label"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { Task, TaskProps } from "../components/Task"
import { ListEmptyTask } from "../components/ListEmptyTask"

import logoTodo from "../assets/logo.png"

export function Home() {
  const [listTodo, setListTodo] = useState<TaskProps[]>([])
  const [newTodo, setNewTodo] = useState("")

  function handleAddNewTodoInList() {
    if (!newTodo) {
      return Alert.alert(
        "Ops",
        "Preencha o campo para adicionar uma nova tarefa"
      )
    }

    const todoExists = listTodo.find((todo) => todo.label === newTodo)

    if (todoExists) {
      return Alert.alert("Ops", "Esta tarefa já foi adicionada na lista")
    }

    setListTodo((prevState) => [
      ...prevState,
      {
        id: String(uuid.v4()),
        checked: false,
        label: newTodo,
      },
    ])
    setNewTodo("")
  }

  function handleRemoveTaskByList(id: string) {
    const newListTodo = listTodo.filter((todo) => todo.id !== id)

    setListTodo(newListTodo)
  }

  function handleToggleTask(id: string) {
    const newListTodo = listTodo.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          checked: !todo.checked,
        }
      }

      return todo
    })

    setListTodo(newListTodo)
  }

  const totalTaskCompleted = listTodo.filter((todo) => todo.checked).length

  return (
    <View className="flex-1 bg-gray-600">
      <View className="w-full h-44 bg-gray-700 items-center justify-center">
        <Image source={logoTodo} className="w-28 h-8" />
      </View>

      <View className="flex-row px-6 mb-8 -mt-8">
        <Input value={newTodo} onChangeText={setNewTodo} />
        <Button onPress={handleAddNewTodoInList} />
      </View>

      <View className="flex-row justify-between px-6">
        <Label amount={listTodo.length} />
        <Label variant="completed" amount={totalTaskCompleted} />
      </View>

      <FlatList
        data={listTodo}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Task
            task={item}
            onToggleCheckedTask={() => handleToggleTask(item.id)}
            onRemoveTask={() => handleRemoveTaskByList(item.id)}
          />
        )}
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
