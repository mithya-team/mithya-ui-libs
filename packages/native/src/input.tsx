import * as React from "react"
import { TextInput } from "react-native"
import { StyleSheet } from "react-native-unistyles"
import { layoutToStyle, type LayoutProps } from "./layout"
import type { NativeTheme } from "./native-theme"

export type InputProps = {
  value?: string
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  layout?: LayoutProps
  onChangeText?: (text: string) => void
}

const styles = StyleSheet.create((theme: NativeTheme) => ({
  root: {
    backgroundColor: theme.colors.bg.surface,
    color: theme.colors.fg.default,
    fontSize: theme.typography.label.fontSize,
    paddingHorizontal: theme.space.control.px,
    paddingVertical: theme.space.control.py,
    borderRadius: theme.radius.control,
    borderWidth: 1,
    borderColor: theme.colors.border.default,
  },
  disabled: {
    opacity: theme.opacity.disabled,
  },
}))

export function Input({
  value,
  defaultValue,
  placeholder,
  disabled,
  layout,
  onChangeText,
}: InputProps) {
  return (
    <TextInput
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      editable={!disabled}
      onChangeText={onChangeText}
      style={[
        styles.root,
        disabled ? styles.disabled : undefined,
        layoutToStyle(layout),
      ]}
    />
  )
}
