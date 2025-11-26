# Publishing Guide

## Quick Publish

From the `packages/icons` directory:

```bash
npm publish
```

The `prepublishOnly` script will automatically run `npm run build` before publishing, so you don't need to build manually.

## Full Workflow

If you've made changes to SVG files or need to regenerate icons:

```bash
# 1. Regenerate icons from SVG files
npm run regenerate

# 2. Build (runs automatically before publish, but you can run manually to verify)
npm run build

# 3. Verify what will be published
npm pack --dry-run

# 4. Publish
npm publish
```

## What Gets Published

Only the `dist/` folder is published (as specified in `package.json` `files` field):

- `dist/icons/*.js` - Compiled JavaScript web components
- `dist/icons/*.d.ts` - TypeScript type definitions
- `dist/index.js` - Main entry point
- `dist/index.d.ts` - Main entry point types

## Publishing a Canary Release

```bash
npm run release:canary
```

This publishes with the `canary` tag, useful for testing before a stable release.

## Version Management

Update the version in `package.json` before publishing:

```bash
npm version patch   # 0.0.1 -> 0.0.2
npm version minor   # 0.0.1 -> 0.1.0
npm version major   # 0.0.1 -> 1.0.0
```

Or edit `package.json` manually, then publish.

## Verification Checklist

Before publishing, verify:

- [ ] Icons are regenerated (if SVG files changed)
- [ ] Build completes successfully (`npm run build`)
- [ ] `dist/` folder contains all expected files
- [ ] Version number is correct in `package.json`
- [ ] Package name is correct (`@tokens-studio/icons-webcomponents`)

