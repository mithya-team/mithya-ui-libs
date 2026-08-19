import { StyleSheet, type UnistylesVariants } from "react-native-unistyles";
import type { NativeTheme } from "../../../src/native-theme";

/** Lib playground demo only. Client apps own `@/theme/variants/input`. */
export const inputStyles = StyleSheet.create((theme: NativeTheme) => ({
  root: {
    backgroundColor: theme.colors.bg.surface,
    color: theme.colors.fg.default,
    fontSize: theme.typography.label.fontSize,
    paddingHorizontal: theme.space.control.px,
    paddingVertical: theme.space.control.py,
    borderRadius: theme.radius.control,
    borderWidth: 1,
    borderColor: theme.colors.border.default,
    variants: {
      disabled: {
        true: {
          opacity: theme.opacity.disabled,
        },
      },
    },
  },
}));

export function useInputVariants(
  variants: UnistylesVariants<typeof inputStyles>,
) {
  inputStyles.useVariants(variants);
}
