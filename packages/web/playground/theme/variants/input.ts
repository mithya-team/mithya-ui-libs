import { cva, type VariantProps } from "class-variance-authority";

/** Lib playground demo only. Client apps own `@/theme/variants/input`. */
export const inputVariants = cva(
  "bg-input text-input-fg text-label px-control py-control rounded-control border border-input placeholder:text-fg-muted focus-visible:border-focus focus-visible:outline-none",
  {
    variants: {
      disabled: {
        true: "opacity-disabled",
        false: "",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

export type InputVariantProps = VariantProps<typeof inputVariants>;
