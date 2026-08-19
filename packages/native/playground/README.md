# Native playground

No Vite/RN app in this package. Unistyles needs `react-native`.

Demo theme: `defaultDemoTheme` in `../src/native-theme.ts` (lib-demo only).

Configure once in the host app, before Button/Input imports:

```ts
import { StyleSheet } from "react-native-unistyles"
import { defaultDemoTheme } from "../src/native-theme"

StyleSheet.configure({
  themes: { demo: defaultDemoTheme },
})
```

Do not call `StyleSheet.configure` in component files.
