import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const VERSION = "v0.1.0"

/**
 * @typedef {{ src: string, path: string }} RegistryFile
 * @typedef {{
 *   platform: "web" | "native"
 *   name: string
 *   title: string
 *   files: RegistryFile[]
 *   dependencies?: string[]
 * }} RegistryItemSpec
 */

/** @type {RegistryItemSpec[]} */
const items = [
  {
    platform: "web",
    name: "button",
    title: "Button",
    files: [
      { src: "packages/web/src/button.tsx", path: "button.tsx" },
      { src: "packages/web/src/layout.ts", path: "layout.ts" },
    ],
    dependencies: ["class-variance-authority"],
  },
  {
    platform: "web",
    name: "input",
    title: "Input",
    files: [
      { src: "packages/web/src/input.tsx", path: "input.tsx" },
      { src: "packages/web/src/layout.ts", path: "layout.ts" },
    ],
    dependencies: ["class-variance-authority"],
  },
  {
    platform: "native",
    name: "button",
    title: "Button",
    dependencies: ["react-native-unistyles"],
    files: [
      { src: "packages/native/src/button.tsx", path: "button.tsx" },
      { src: "packages/native/src/layout.ts", path: "layout.ts" },
      { src: "packages/native/src/native-theme.ts", path: "native-theme.ts" },
    ],
  },
  {
    platform: "native",
    name: "input",
    title: "Input",
    dependencies: ["react-native-unistyles"],
    files: [
      { src: "packages/native/src/input.tsx", path: "input.tsx" },
      { src: "packages/native/src/layout.ts", path: "layout.ts" },
      { src: "packages/native/src/native-theme.ts", path: "native-theme.ts" },
    ],
  },
]

function toClientSource(content) {
  // shadcn rewrites `@/theme/variants/button` → `@/components/ui/button`.
  return content.replaceAll("@/theme/variants/", "../../theme/variants/")
}

function toItemJson(spec) {
  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: spec.name,
    type: "registry:ui",
    title: spec.title,
    ...(spec.dependencies ? { dependencies: spec.dependencies } : {}),
    files: spec.files.map((file) => ({
      path: file.path,
      type: "registry:ui",
      target: `src/components/ui/${file.path}`,
      content: toClientSource(readFileSync(join(root, file.src), "utf8")),
    })),
  }
}

function toCatalogJson(platform, platformItems) {
  return {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: platform === "web" ? "mithya-web" : "mithya-native",
    homepage: `http://127.0.0.1:3333/${platform}`,
    items: platformItems.map((spec) => {
      const item = toItemJson(spec)
      return {
        ...item,
        files: item.files.map(({ content: _content, ...file }) => file),
      }
    }),
  }
}

export function buildRegistry() {
  /** @type {Record<"web" | "native", RegistryItemSpec[]>} */
  const byPlatform = { web: [], native: [] }
  for (const spec of items) {
    byPlatform[spec.platform].push(spec)
    const dir = join(root, "registry", spec.platform, VERSION)
    mkdirSync(dir, { recursive: true })
    writeFileSync(
      join(dir, `${spec.name}.json`),
      `${JSON.stringify(toItemJson(spec), null, 2)}\n`,
    )
  }
  for (const platform of /** @type {const} */ (["web", "native"])) {
    const dir = join(root, "registry", platform)
    mkdirSync(dir, { recursive: true })
    writeFileSync(
      join(dir, "registry.json"),
      `${JSON.stringify(toCatalogJson(platform, byPlatform[platform]), null, 2)}\n`,
    )
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  buildRegistry()
}
