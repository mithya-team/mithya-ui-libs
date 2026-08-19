import * as React from "react"
import { Pressable, Text, type GestureResponderEvent } from "react-native"
import type { UnistylesVariants } from "react-native-unistyles"
import { buttonStyles, useButtonVariants } from "@/theme/variants/button"
import { layoutToStyle, type LayoutProps } from "./layout"

export type ButtonProps = {
  children?: React.ReactNode
  layout?: LayoutProps
  onPress?: (event: GestureResponderEvent) => void
} & UnistylesVariants<typeof buttonStyles>

export function Button({
  children,
  variant,
  size,
  disabled,
  layout,
  onPress,
}: ButtonProps) {
  useButtonVariants({
    variant,
    size,
    disabled,
  })

  return (
    <Pressable
      accessibilityRole="button"
      disabled={Boolean(disabled)}
      onPress={onPress}
      style={[buttonStyles.root, layoutToStyle(layout)]}
    >
      <Text style={buttonStyles.label}>{children}</Text>
    </Pressable>
  )
}
