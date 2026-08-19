# Native playground

No Vite/RN app in this package. Unistyles needs `react-native`.

Demo variant recipes: `theme/variants/button.ts` and `theme/variants/input.ts`.
Client apps replace these via `@/theme/variants/<name>`.

Configure once in the host app, before Button/Input imports:

```ts
import { StyleSheet } from "react-native-unistyles"
import { defaultDemoTheme } from "../src/native-theme"

StyleSheet.configure({
  themes: { demo: defaultDemoTheme },
})
```

Do not call `StyleSheet.configure` in component files.
