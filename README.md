# Personal Portfolio 2.0

A portfolio with a focus on mobile-first development.

## Development

```
npm install
npm run dev
```

## Checks

```
npm run lint
npm run lintFix
npm run format
npm run build
```

`npm run build` type-checks before bundling.

A Husky `pre-commit` hook runs `lint-staged` (ESLint + Prettier on staged files).
The hook is installed by the `prepare` script on `npm install`.
