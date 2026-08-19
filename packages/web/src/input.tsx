import * as React from "react"
import { inputVariants, type InputVariantProps } from "@/theme/variants/input"
import { layoutToStyle, type LayoutProps } from "./layout"

export type InputProps = {
  value?: string
  defaultValue?: string
  name?: string
  type?: React.HTMLInputTypeAttribute
  placeholder?: string
  layout?: LayoutProps
  onChange?: React.ChangeEventHandler<HTMLInputElement>
} & InputVariantProps

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
        disabled={Boolean(disabled)}
        onChange={onChange}
        className={inputVariants({ disabled })}
        style={layoutToStyle(layout)}
      />
    )
  },
)
