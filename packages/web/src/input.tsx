import * as React from "react"
import { layoutToStyle, type LayoutProps } from "./layout"

export type InputProps = {
  value?: string
  defaultValue?: string
  name?: string
  type?: React.HTMLInputTypeAttribute
  placeholder?: string
  disabled?: boolean
  layout?: LayoutProps
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const inputClassName =
  "bg-surface text-fg-default text-label px-control py-control rounded-control border border-default placeholder:text-fg-muted focus-visible:border-focus focus-visible:outline-none disabled:opacity-disabled"

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(
    {
      value,
      defaultValue,
      name,
      type = "text",
      placeholder,
      disabled,
      layout,
      onChange,
    },
    ref,
  ) {
    return (
      <input
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        className={inputClassName}
        style={layoutToStyle(layout)}
      />
    )
  },
)
