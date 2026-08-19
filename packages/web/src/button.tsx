import * as React from "react"
import { buttonVariants, type ButtonVariantProps } from "@/theme/variants/button"
import { layoutToStyle, type LayoutProps } from "./layout"

export type ButtonProps = {
  children?: React.ReactNode
  layout?: LayoutProps
  type?: "button" | "submit" | "reset"
  onClick?: React.MouseEventHandler<HTMLButtonElement>
} & ButtonVariantProps

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      children,
      variant,
      size,
      disabled,
      layout,
      type = "button",
      onClick,
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        disabled={Boolean(disabled)}
        onClick={onClick}
        className={buttonVariants({ variant, size, disabled })}
        style={layoutToStyle(layout)}
      >
        {children}
      </button>
    )
  },
)
