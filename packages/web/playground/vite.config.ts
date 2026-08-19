import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig } from "vite"

const playground = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  root: playground,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": playground,
    },
  },
})
