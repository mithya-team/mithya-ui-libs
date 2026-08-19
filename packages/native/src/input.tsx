import * as React from "react"
import { TextInput } from "react-native"
import type { UnistylesVariants } from "react-native-unistyles"
import { inputStyles, useInputVariants } from "@/theme/variants/input"
import { layoutToStyle, type LayoutProps } from "./layout"

export type InputProps = {
  value?: string
  defaultValue?: string
  placeholder?: string
  layout?: LayoutProps
  onChangeText?: (text: string) => void
} & UnistylesVariants<typeof inputStyles>

export function Input({
  value,
  defaultValue,
  placeholder,
  disabled,
  layout,
  onChangeText,
}: InputProps) {
  useInputVariants({
    disabled,
  })

  return (
    <TextInput
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      editable={!disabled}
      onChangeText={onChangeText}
      style={[inputStyles.root, layoutToStyle(layout)]}
    />
  )
}
