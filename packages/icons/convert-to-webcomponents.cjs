// convert-to-webcomponents.cjs
// Post-process SVGR-generated React components to convert them to web components
const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

async function convertToWebComponents() {
	const iconsDir = path.join(__dirname, 'src/icons');
	// Look for both .tsx (from SVGR) and .ts files, but exclude index.ts
	const iconFiles = [
		...(await glob('*.tsx', { cwd: iconsDir })),
		...(await glob('*.ts', { cwd: iconsDir })),
	]
		.filter((file, index, arr) => arr.indexOf(file) === index) // Remove duplicates
		.filter((file) => file !== 'index.ts'); // Skip index file

	for (const file of iconFiles) {
		const filePath = path.join(iconsDir, file);
		const content = fs.readFileSync(filePath, 'utf8');

		// Determine target filename (.ts)
		const newFileName = file.replace('.tsx', '.ts');
		const newFilePath = path.join(iconsDir, newFileName);

		// Check if already converted (has HTMLElement)
		if (content.includes('extends HTMLElement')) {
			// Already a web component, just ensure it's .ts
			if (file !== newFileName) {
				fs.writeFileSync(newFilePath, content, 'utf8');
				fs.unlinkSync(filePath);
			}
			continue;
		}

		// Extract component name (e.g., "SvgUser" from "const SvgUser =")
		const componentNameMatch = content.match(/const Svg(\w+) =/);
		if (!componentNameMatch) {
			console.warn(`Could not extract component name from ${file}`);
			continue;
		}

		const componentName = componentNameMatch[1];

		// Extract SVG JSX content
		const svgMatch = content.match(/<svg[^>]*>[\s\S]*?<\/svg>/);
		if (!svgMatch) {
			console.warn(`Could not extract SVG from ${file}`);
			continue;
		}

		let svgHtml = svgMatch[0]
			// Replace JSX expressions with static values
			.replace(
				/\{props\.strokeWidth \|\| 2 \* \(16 \/ \(Number\(props\.width\) \|\| 16\)\)\}/g,
				'2',
			)
			.replace(/\{!title\}/g, 'true')
			.replace(/\{titleId\}/g, '')
			.replace(/\{title\}/g, '')
			.replace(/\{\.\.\.props\}/g, '')
			// Remove conditional title rendering
			.replace(/\{title \? <title[^>]*>.*?<\/title> : null\}/gs, '')
			.replace(/<title[^>]*>\{title\}<\/title>/g, '')
			// Convert JSX camelCase attributes to HTML kebab-case
			.replace(/strokeWidth=\{(\d+)\}/g, 'stroke-width="$1"')
			.replace(/strokeWidth=/g, 'stroke-width="2"')
			.replace(/strokeLinecap=/g, 'stroke-linecap=')
			.replace(/strokeLinejoin=/g, 'stroke-linejoin=')
			.replace(/preserveAspectRatio=/g, 'preserveAspectRatio=')
			// Remove aria-labelledby
			.replace(/\s+aria-labelledby="[^"]*"/g, '')
			.replace(/\s+aria-labelledby=\{titleId\}/g, '')
			// Set aria-hidden
			.replace(/aria-hidden=\{!title\}/g, 'aria-hidden="true"')
			// Clean up any remaining JSX expressions (but preserve numeric values)
			.replace(/\{(\d+)\}/g, '$1')
			.replace(/\{[^}]*\}/g, '')
			// Remove width and height attributes to allow flexible sizing via CSS
			.replace(/\s+width=["']?\d+["']?/g, '')
			.replace(/\s+height=["']?\d+["']?/g, '')
			// Normalize whitespace
			.replace(/>\s+</g, '><')
			.trim();

		// Escape for JavaScript template literal
		const escaped = svgHtml
			.replace(/\\/g, '\\\\')
			.replace(/`/g, '\\`')
			.replace(/\$\{/g, '\\${')
			.replace(/\n/g, '\\n')
			.replace(/\r/g, '\\r');

		// Generate web component
		const webComponent = `class ${componentName} extends HTMLElement {
	connectedCallback() {
		this.innerHTML = \`${escaped}\`;
	}
}

customElements.define('icon-${componentName.toLowerCase()}', ${componentName});
export default ${componentName};`;

		// Write to .ts file and delete .tsx file
		fs.writeFileSync(newFilePath, webComponent, 'utf8');
		if (file !== newFileName) {
			fs.unlinkSync(filePath);
		}
	}

	console.log(`✓ Converted ${iconFiles.length} icons to web components (.ts)`);
}

convertToWebComponents().catch(console.error);
