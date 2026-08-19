import * as React from "react"
import { Pressable, Text, type GestureResponderEvent } from "react-native"
import { StyleSheet } from "react-native-unistyles"
import { layoutToStyle, type LayoutProps } from "./layout"
import type { NativeTheme } from "./native-theme"

export type ButtonVariant = "solid" | "ghost"
export type ButtonSize = "md"

export type ButtonProps = {
  children?: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  layout?: LayoutProps
  onPress?: (event: GestureResponderEvent) => void
}

const styles = StyleSheet.create((theme: NativeTheme) => ({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: theme.space.control.px,
    paddingVertical: theme.space.control.py,
    gap: theme.space.control.gap,
    borderRadius: theme.radius.control,
    borderWidth: 1,
    borderColor: theme.colors.border.default,
  },
  solid: {
    backgroundColor: theme.colors.bg.accent,
  },
  ghost: {
    backgroundColor: "transparent",
  },
  disabled: {
    opacity: theme.opacity.disabled,
  },
  solidLabel: {
    color: theme.colors.fg.onAccent,
    fontSize: theme.typography.label.fontSize,
  },
  ghostLabel: {
    color: theme.colors.fg.default,
    fontSize: theme.typography.label.fontSize,
  },
}))

export function Button({
  children,
  variant = "solid",
  size: _size = "md",
  disabled,
  layout,
  onPress,
}: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.root,
        variant === "solid" ? styles.solid : styles.ghost,
        disabled ? styles.disabled : undefined,
        layoutToStyle(layout),
      ]}
    >
      <Text style={variant === "solid" ? styles.solidLabel : styles.ghostLabel}>
        {children}
      </Text>
    </Pressable>
  )
}
