## Tokens Studio: Icon library

This package contains our internal icon library used in our projects.

Icons are pulled from a [Figma document](https://www.figma.com/design/EHyPMlTBppaN7zUNV3S5mD/Icon-Library?node-id=3-33) and converted to React components using [svgr](https://react-svgr.com/).

Right now we manually export the icons to the `assets` folder.

If you need to build icons, run `npm run regenerate`.

## Notes

We're using iconoir as our base icons, and are extending them with custom icons.
