# Lib designer component workflow

Designers create reusable components in `mithya-ui-libs`. The source, public
API, playground, registry item, and immutable tag are the design record.

## Baseline principles

1. Build a reusable primitive only when the behavior or visual language belongs
   to more than one product surface.
2. Keep product copy, business rules, API calls, permissions, and real customer
   data out of the lib.
3. Keep web and native implementations separate. Share token names, not component source.
4. Expose a small typed API. The template accepts variant groups. The client owns the recipes.
5. Do not add public root `className` or `style` escape hatches.
6. Recipes may use primitive, semantic, or component token names. Hex lives only in client primitive values.
7. Make accessibility, keyboard/touch behavior, and automation hooks part of
   the component contract.
8. Demonstrate every supported state before release.
9. Treat registry versions and tags as immutable.

## Component brief

Before implementation, the designer records:

- purpose and reuse decision
- target platforms
- anatomy and content rules
- props, variants, sizes, and typed slots
- enabled, disabled, loading, error, empty, selected, and read-only states
- responsive, overflow, localization, RTL, and large-text behavior
- keyboard, pointer, touch, focus, gesture, and accessibility behavior
- `data-testid` or `testID` needs
- token names (primitive, semantic, or component)

The brief can live in the GitHub issue or pull request. The agent follows the
brief and reports unsupported decisions instead of inventing product behavior.

## Designer loop

1. Add the brief to the issue or pull request.
2. Implement in `packages/web/src` and/or `packages/native/src`.
3. Add every variant and state to the package playground.
4. Use demo-only data to show loading, error, empty, and success states.
5. Run `pnpm build:registry`.
6. Run `pnpm serve` and review the playground.
7. Check the acceptance matrix: visual states, behavior, accessibility, tokens,
   and test hooks.
8. Ask for developer review of the public API and registry output.
9. Create a new immutable tag.

The designer accepts the playground result. The agent does not mark a
component complete only because it compiles.

## Developer handoff

The lib pull request must include:

- accepted component brief
- supported platforms
- playground route or screenshots
- state and interaction coverage
- accessibility and test-hook decisions
- registry version
- client sync instructions

The client developer installs the tagged item with `pnpm ui:sync`. The client
developer adds real data and business behavior in a client repo. The
primitive remains data-agnostic.

## Stop conditions

Stop lib work when the request is product-only. Put it in a client repo:

- product component: `apps/*/src/components/product`
- client theme values: `apps/*/src/theme`
- primitive variant recipes: `apps/*/src/theme/variants`
- mock scenarios: `apps/*/src/design-sandbox`

Do not create a generic primitive to solve a one-screen product need.
