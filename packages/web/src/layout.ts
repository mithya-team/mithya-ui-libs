import type { CSSProperties } from "react"

export type LayoutProps = {
  margin?: CSSProperties["margin"]
  width?: CSSProperties["width"]
  maxWidth?: CSSProperties["maxWidth"]
}

export function layoutToStyle(layout?: LayoutProps): CSSProperties | undefined {
  if (!layout) return undefined
  const style: CSSProperties = {}
  if (layout.margin !== undefined) style.margin = layout.margin
  if (layout.width !== undefined) style.width = layout.width
  if (layout.maxWidth !== undefined) style.maxWidth = layout.maxWidth
  return Object.keys(style).length > 0 ? style : undefined
}
