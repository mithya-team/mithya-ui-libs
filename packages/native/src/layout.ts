import type { ViewStyle } from "react-native"

export type LayoutProps = {
  margin?: ViewStyle["margin"]
  width?: ViewStyle["width"]
  maxWidth?: ViewStyle["maxWidth"]
}

export function layoutToStyle(layout?: LayoutProps): ViewStyle | undefined {
  if (!layout) return undefined
  const style: ViewStyle = {}
  if (layout.margin !== undefined) style.margin = layout.margin
  if (layout.width !== undefined) style.width = layout.width
  if (layout.maxWidth !== undefined) style.maxWidth = layout.maxWidth
  return Object.keys(style).length > 0 ? style : undefined
}
