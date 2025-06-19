## Tokens Studio: Icon library

[View demo preview page](https://ts-icons.vercel.app/).

This package contains our internal icon library used in our projects.

Icons are pulled from a [Figma document](https://www.figma.com/design/EHyPMlTBppaN7zUNV3S5mD/Icon-Library?node-id=3-33) and converted to React components using [svgr](https://react-svgr.com/).

Right now we manually export the icons to the `assets` folder.

If you need to build icons, run `npm run regenerate`.

## Notes

We're using iconoir as our base icons, and are extending them with custom icons.

## How to update icons

If there's new icons you'd like to add, add them to the Figma document first (page: Custom).

Then, download that icon (or the changed icon) into the `assets` folder

After that you should be good and can just commit those changes to a new branch, don't forget to add a changeset. Once the PR is merged in, the changeset-bot should automatically create a release PR, which upon merge releases a new version.

## Using icons

```js
import { ArrowDown } from '@tokens-studio/icons/ArrowDown.js';

export default () => (
	<ArrowDown title={'Go down'} titleId={'go-down-arrow-title'} />
);
```

Ensure you pass a `title`/`titleId` if the icon needs to be described
otherwise, aria-hidden will be applied and the icon will be ignored by screen-readers
which is appropriate if the icon is purely decorative and not important to be read out.

## Using Icon Wrapper

```tsx
import { Icon, IconsEnum } from '@tokens-studio/icons';

export const a = () => <Icon iconId={'ArrowDown'} />;

// type-safe equivalent of above
export const b = () => <Icon iconId={IconsEnum.ArrowDown} />;

// external icon
export const c = () => <Icon iconUrl={'https://assets.foobar.com/qux.svg'} />;
```

There's 2 reasons to use the generic Icon wrapper:

- Using a string id (`iconId`) -> maps to the name of the icon, e.g. `'ArrowDown'`. Strings might be a lot easier to pass around than SVG JSX Elements, e.g. when storing references to icons in a database.
- Using an SVG from an external URL (`iconUrl`) -> renders `img`. Useful if your icon/images are coming from a third-party but still want to render them similar to our icons.
