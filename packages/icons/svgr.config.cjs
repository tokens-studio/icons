const path = require('path');

// Custom index template
function indexTemplate(filePaths) {
	const exportEntries = filePaths
		.map(({ path: filePath }) => {
			const fileName = filePath.split(path.sep).pop().replace('.ts', '.js');
			const componentName = fileName.replace('.js', '');
			return `export { default as ${componentName} } from './${fileName}';`;
		})
		.join('\n');
	return exportEntries;
}

module.exports = {
	typescript: true,
	prettier: false,
	outDir: 'src/icons',
	// Use .ts extension instead of .tsx since we're generating web components, not React
	ext: 'ts',
	replaceAttrValues: {
		'#000': 'currentColor',
		'#000000': 'currentColor',
		black: 'currentColor',
	},
	svgProps: {
		width: '24',
		height: '24',
		preserveAspectRatio: 'xMidYMid meet',
		viewBox: '0 0 24 24',
	},
	indexTemplate,
};
