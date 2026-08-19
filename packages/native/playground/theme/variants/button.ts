import { StyleSheet, type UnistylesVariants } from "react-native-unistyles";
import type { NativeTheme } from "../../../src/native-theme";

/** Lib playground demo only. Client apps own `@/theme/variants/button`. */
export const buttonStyles = StyleSheet.create((theme: NativeTheme) => ({
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
    variants: {
      variant: {
        solid: {
          backgroundColor: theme.colors.bg.accent,
        },
        ghost: {
          backgroundColor: "transparent",
        },
        default: {
          backgroundColor: theme.colors.bg.accent,
        },
      },
      size: {
        md: {},
        default: {},
      },
      disabled: {
        true: {
          opacity: theme.opacity.disabled,
        },
      },
    },
  },
  label: {
    fontSize: theme.typography.label.fontSize,
    variants: {
      variant: {
        solid: {
          color: theme.colors.fg.onAccent,
        },
        ghost: {
          color: theme.colors.fg.default,
        },
        default: {
          color: theme.colors.fg.onAccent,
        },
      },
      size: {
        md: {},
        default: {},
      },
      disabled: {
        true: {},
      },
    },
  },
}));

export function useButtonVariants(
  variants: UnistylesVariants<typeof buttonStyles>,
) {
  buttonStyles.useVariants(variants);
}
