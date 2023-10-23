import { Feather } from "@expo/vector-icons"
import { TouchableOpacity, TouchableOpacityProps } from "react-native"

interface ButtonProps extends TouchableOpacityProps {
  variant?: "trash" | "plus"
}

export function Button({ variant = "plus", ...rest }: ButtonProps) {
  const isButtonPlus = variant === "plus"

  return (
    <TouchableOpacity
      className={
        isButtonPlus
          ? "p-5 bg-blue-dark justify-center items-center rounded-md"
          : ""
      }
      activeOpacity={0.7}
      {...rest}
    >
      <Feather
        name={isButtonPlus ? "plus-circle" : "trash"}
        size={20}
        color={isButtonPlus ? "#F2F2F2" : "#808080"}
      />
    </TouchableOpacity>
  )
}
