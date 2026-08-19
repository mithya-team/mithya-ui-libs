export type NativeTheme = {
  colors: {
    bg: {
      surface: string
      accent: string
      muted: string
    }
    fg: {
      default: string
      muted: string
      onAccent: string
    }
    border: {
      default: string
      focus: string
    }
  }
  space: {
    control: {
      px: number
      py: number
      gap: number
    }
  }
  radius: {
    control: number
  }
  typography: {
    label: {
      fontSize: number
    }
  }
  opacity: {
    disabled: number
  }
}

/** Lib playground demo only. Client apps must supply their own theme values. */
export const defaultDemoTheme = {
  colors: {
    bg: {
      surface: "#ffffff",
      accent: "#18181b",
      muted: "#f4f4f5",
    },
    fg: {
      default: "#18181b",
      muted: "#71717a",
      onAccent: "#fafafa",
    },
    border: {
      default: "#e4e4e7",
      focus: "#2563eb",
    },
  },
  space: {
    control: {
      px: 12,
      py: 8,
      gap: 8,
    },
  },
  radius: {
    control: 8,
  },
  typography: {
    label: {
      fontSize: 14,
    },
  },
  opacity: {
    disabled: 0.5,
  },
} satisfies NativeTheme
