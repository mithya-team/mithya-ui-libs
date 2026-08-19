import * as React from "react"
import { layoutToStyle, type LayoutProps } from "./layout"

export type ButtonVariant = "solid" | "ghost"
export type ButtonSize = "md"

export type ButtonProps = {
  children?: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  layout?: LayoutProps
  type?: "button" | "submit" | "reset"
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const baseClassName =
  "inline-flex items-center justify-center text-label px-control py-control rounded-control gap-control border border-default cursor-pointer disabled:opacity-disabled disabled:pointer-events-none focus-visible:border-focus focus-visible:outline-none"

const variantClassName: Record<ButtonVariant, string> = {
  solid: "bg-accent text-fg-on-accent",
  ghost: "text-fg-default",
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      children,
      variant = "solid",
      size: _size = "md",
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
        disabled={disabled}
        onClick={onClick}
        className={`${baseClassName} ${variantClassName[variant]}`}
        style={layoutToStyle(layout)}
      >
        {children}
      </button>
    )
  },
)
