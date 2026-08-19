---
name: ui-lib-component
description: Create or update generic UI components in mithya-ui-libs (packages/web and packages/native), rebuild registry JSON, and tag. Use when adding or changing Button/Input or any reusable primitive in the lib repo.
---

# Lib component create / update

Work only in `mithya-ui-libs`. Do not edit `mithya-pilot-client/apps/*/src/components/ui`.

## Decide platform

- Web: `packages/web/src/<name>.tsx`
- Native: `packages/native/src/<name>.tsx`
- Both = two implementations. No shared component source.

## Rules

- Semantic token **names** only. No hex/rgb/hsl. No arbitrary visual Tailwind.
- No public root `className` or `style`.
- Restricted `layout` / `textLayout` only.
- Typed slots only (`iconLeft`, …).
- Optional `testID` (native) and `data-testid` (web) are allowed test hooks.
- Phosphor for generic icons.

## Create

1. Add source next to existing `button.tsx` / `input.tsx`.
2. Demo every variant and state in `packages/web/playground/App.tsx` (web) or `packages/native/playground` (native).
3. Register files in `scripts/build-registry.mjs` (`items` array, `files[].src`).
4. Run `pnpm build:registry`.
5. `pnpm serve` and open playground. Designer reviews playground before tag.
6. Tag immutable version (`v0.1.1`). Do not rewrite an old tag.

## Update

1. Change lib source, not a client copy.
2. Playground review.
3. `pnpm build:registry`.
4. New tag if the public API or visuals change. Client must `pnpm ui:sync` after pin bump.

## Stop

If the need is product-only, stop. File nothing in this repo. Client designer puts it in `apps/*/src/components/product`.
