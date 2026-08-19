# mithya-ui-libs

Generic Mithya UI libs (web + React Native) and local shadcn registry JSON.

Contract: `docs/working-model.md`. Designer workflow:
`docs/designer-component-workflow.md`. Agent process:
`.cursor/skills/ui-lib-component/SKILL.md`.

## Serve registry

```bash
pnpm install
pnpm build:registry
pnpm serve
```

- Web: `http://127.0.0.1:3333/web/v0.1.0/{name}.json`
- Native: `http://127.0.0.1:3333/native/v0.1.0/{name}.json`

Items: `button`, `input`. Token names (primitive, semantic, component) are in `token-contract.json`. Values live in the client app.

## Packages

- `packages/web` — React + Tailwind (playground included)
- `packages/native` — React Native + Unistyles

Do not put client theme values in locked component source.

A designer brief, playground review, registry rebuild, and immutable tag are
required before a reusable primitive is handed to a client repo.
