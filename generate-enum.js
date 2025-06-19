import fs from 'node:fs/promises';
import path from 'node:path';
import { pascalCase } from 'change-case';

const dirContents = await fs.readdir(path.join(import.meta.dirname, 'assets'));

fs.writeFile(
	path.join(import.meta.dirname, 'src', 'icons-enum.ts'),
	`export enum IconsEnum {
${dirContents
	.map((file) => {
		const name = pascalCase(path.basename(file, '.svg'));
		return `\t${name} = '${name}',`;
	})
	.join('\n')}
};\n`,
);
