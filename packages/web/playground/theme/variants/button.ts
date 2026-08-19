import { cva, type VariantProps } from "class-variance-authority";

/** Lib playground demo only. Client apps own `@/theme/variants/button`. */
export const buttonVariants = cva(
  "inline-flex items-center justify-center text-label px-control py-control rounded-control gap-control border border-default cursor-pointer focus-visible:border-focus focus-visible:outline-none",
  {
    variants: {
      variant: {
        solid: "bg-button-solid text-button-solid-fg",
        ghost: "bg-button-ghost text-button-ghost-fg",
      },
      size: {
        md: "",
      },
      disabled: {
        true: "opacity-disabled pointer-events-none",
        false: "",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
      disabled: false,
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
