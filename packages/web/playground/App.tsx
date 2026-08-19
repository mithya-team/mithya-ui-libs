import { Button } from "../src/button"
import { Input } from "../src/input"

export function App() {
  return (
    <main className="min-h-screen bg-surface text-fg-default">
      <div className="flex flex-col gap-control" style={{ margin: 32, maxWidth: 480 }}>
        <section className="flex flex-col gap-control">
          <p className="text-label text-fg-muted">Button</p>
          <div className="flex gap-control">
            <Button variant="solid">Solid</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="solid" disabled>
              Solid disabled
            </Button>
            <Button variant="ghost" disabled>
              Ghost disabled
            </Button>
          </div>
        </section>
        <section className="flex flex-col gap-control">
          <p className="text-label text-fg-muted">Input</p>
          <Input placeholder="Enabled" layout={{ width: "100%" }} />
          <Input placeholder="Disabled" disabled layout={{ width: "100%" }} />
        </section>
      </div>
    </main>
  )
}
