// svgr-template.js
function defaultTemplate({ imports, componentName, props, jsx }, { tpl }) {
	return tpl`
	${imports};
	import { SVGRProps } from '../types';
	
	function ${componentName}(${props}) {
		return ${jsx};
	}
	export default ${componentName};
	`;
}

module.exports = defaultTemplate;
