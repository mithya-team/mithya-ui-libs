---
name: ui-lib-component
description: Create or update generic UI components in mithya-ui-libs (packages/web and packages/native), rebuild registry JSON, and tag. Use when adding or changing Button/Input or any reusable primitive in the lib repo.
---

# Lib component create / update

Work only in `mithya-ui-libs`. Do not edit `apps/*/src/components/ui` in `mithya-pilot-client` or `mithya-alt-client`.

## Designer baseline

The designer owns the reusable component template in this repo. Start with a
component brief before writing code:

- purpose and why it is reusable
- web, native, or both
- anatomy, content rules, and composition
- which variant groups the template must accept (`variant`, `size`, `disabled`)
- keyboard, touch, focus, accessibility, and test-hook needs
- token names the recipe may use (primitive, semantic, or component)

The template imports `@/theme/variants/<name>` in lib source (playground alias).
Registry JSON rewrites that to `../../theme/variants/<name>` so `shadcn add`
does not remap `@/theme/variants/button` to `@/components/ui/button`.

- Web recipe: CVA (`class-variance-authority`)
- Native recipe: Unistyles `variants` + `useVariants`

The lib playground supplies demo recipes at the same import path. Client apps
replace them. The agent can implement the brief, but the designer accepts the
playground result. Do not put API calls, business rules, product copy, or real
customer data in this repo.

## Decide platform

- Web: `packages/web/src/<name>.tsx`
- Native: `packages/native/src/<name>.tsx`
- Both = two implementations. No shared component source.

## Rules

- No raw hex/rgb/hsl in templates. Visual names may be primitive, semantic, or component tokens.
- No public root `className` or `style`.
- Restricted `layout` / `textLayout` only.
- Typed slots only (`iconLeft`, …).
- Optional `testID` (native) and `data-testid` (web) are allowed test hooks.
- Phosphor for generic icons.
- Variant types come from the client recipe (`VariantProps` or `UnistylesVariants`).

## Create

1. Record the brief in the issue or pull request.
2. Add source next to existing `button.tsx` / `input.tsx`.
3. Import `@/theme/variants/<name>` and apply the recipe. Add a demo recipe in
   `packages/web/playground/theme/variants` or
   `packages/native/playground/theme/variants`.
4. Demo every variant and state in `packages/web/playground/App.tsx` (web) or
   `packages/native/playground` (native).
5. Register files in `scripts/build-registry.mjs` (`items` array, `files[].src`).
   Do not register client variant recipes.
6. Run `pnpm build:registry`.
7. Run `pnpm serve` and open the playground.
8. Designer checks the acceptance matrix before tag: anatomy, states, behavior, accessibility, and test hooks.
9. Tag immutable version (`v0.1.1`). Do not rewrite an old tag.

## Update

1. Change lib source, not a client copy.
2. Update the brief and playground demo recipe if the template API changes.
3. Review all existing states plus the changed state.
4. Run `pnpm build:registry`.
5. Create a new tag if the public template API changes. Client must `pnpm ui:sync` after pin bump.
6. Visual-only variant or theme changes stay in the client. No lib tag.

## Handoff

The lib pull request is the designer-to-developer handoff. Include:

- the accepted brief and supported platforms
- screenshots or playground route
- expected `@/theme/variants/<name>` export (`buttonVariants` or `buttonStyles`)
- state and interaction coverage
- accessibility and test-hook decisions
- registry version and client sync instructions

Developers consume the tagged registry item. They do not add business logic to
the primitive or patch the copied client file.

## Stop

If the need is a new visual variant or theme value, stop. File nothing in this
repo. Client designer updates `apps/*/src/theme`.
