const template = require('./svgr-template.cjs');

// Custom index template to handle file endings as required
function indexTemplate(filePaths) {
	const exportEntries = filePaths
		.map(({ path: filePath }) => {
			const fileName = filePath.split('/').pop().replace('.tsx', '.js');
			const componentName = fileName.replace('.js', '');
			return `export { default as ${componentName} } from './${fileName}';`;
		})
		.join('\n');

	return exportEntries;
}

module.exports = {
	template,
	titleProp: true,
	typescript: true,
	prettier: false,
	outDir: 'src/icons',
	jsxRuntime: 'automatic',
	replaceAttrValues: {
		'#000': 'currentColor',
		'#000000': 'currentColor',
	},
	svgProps: {
		'aria-hidden': '{!title}',
		width: '{props.width || 16}',
		height: '{props.height || 16}',
		strokeWidth: '{props.strokeWidth || 1.5}',
		preserveAspectRatio: 'xMidYMid meet',
		viewBox: '0 0 16 16',
	},
	indexTemplate,
};
