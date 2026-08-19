import http from "node:http"
import { existsSync, readFileSync } from "node:fs"
import { dirname, join, resolve, sep } from "node:path"
import { fileURLToPath } from "node:url"
import { buildRegistry } from "./build-registry.mjs"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const registryRoot = resolve(join(root, "registry"))
const VERSION = "v0.1.0"
const HOST = "127.0.0.1"
const PORT = 3333

function cors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "*")
}

function mapPath(pathname) {
  const parts = pathname.split("/").filter(Boolean)
  if (parts.length < 2) return null
  const platform = parts[0]
  if (platform !== "web" && platform !== "native") return null

  if (parts.length === 2 && parts[1] === "registry.json") {
    return join(registryRoot, platform, "registry.json")
  }
  if (parts.length === 2 && parts[1].endsWith(".json")) {
    return join(registryRoot, platform, VERSION, parts[1])
  }
  if (parts.length === 3 && parts[1] === VERSION && parts[2].endsWith(".json")) {
    if (parts[2] === "registry.json") {
      return join(registryRoot, platform, "registry.json")
    }
    return join(registryRoot, platform, VERSION, parts[2])
  }
  return null
}

function safeFile(mapped) {
  if (!mapped) return null
  const resolved = resolve(mapped)
  if (resolved !== registryRoot && !resolved.startsWith(`${registryRoot}${sep}`)) {
    return null
  }
  return resolved
}

buildRegistry()

const server = http.createServer((req, res) => {
  cors(res)
  if (req.method === "OPTIONS") {
    res.statusCode = 204
    res.end()
    return
  }
  if (req.method !== "GET") {
    res.statusCode = 405
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ error: "Method not allowed" }))
    return
  }

  const url = new URL(req.url ?? "/", `http://${HOST}:${PORT}`)
  const file = safeFile(mapPath(url.pathname))
  if (!file || !existsSync(file)) {
    res.statusCode = 404
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ error: "Not found" }))
    return
  }

  res.statusCode = 200
  res.setHeader("Content-Type", "application/json; charset=utf-8")
  res.end(readFileSync(file))
})

server.listen(PORT, HOST, () => {
  console.log(`mithya registry http://${HOST}:${PORT}`)
})
