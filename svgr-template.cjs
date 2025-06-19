module.exports = (variables, { tpl }) => {
	// commented some examples of pushing modifications to the AST for templating, uses @typescript-eslint/parser
	// variables.imports.push({
	//   type: "ImportDeclaration",
	//   specifiers: [
	//     {
	//       type: "ImportSpecifier",
	//       local: {
	//         type: "Identifier",
	//         name: "IconsEnum",
	//       },
	//       imported: {
	//         type: "Identifier",
	//         name: "IconsEnum",
	//       },
	//     },
	//   ],
	//   source: {
	//     type: "StringLiteral",
	//     value: "../icons-enum.js",
	//   },
	// });

	// variables.interfaces[0].body.body.push({
	//   type: "TSPropertySignature",
	//   key: {
	//     type: "Identifier",
	//     name: "iconId",
	//   },
	//   typeAnnotation: {
	//     type: "TSTypeAnnotation",
	//     typeAnnotation: {
	//       type: "TSTypeQuery",
	//       exprName: {
	//         type: "Identifier",
	//         name: "IconsEnum",
	//       },
	//     },
	//   },
	//   optional: true,
	// });

	// const props = variables.props[0].properties;
	// const restProp = props.splice(props.length - 1)[0];
	// props.push({
	//   type: "ObjectProperty",
	//   key: {
	//     type: "Identifier",
	//     name: "iconId",
	//   },
	//   value: {
	//     type: "Identifier",
	//     name: "iconId",
	//   },
	//   computed: false,
	//   shorthand: true,
	//   decorators: null,
	// });
	// props.push(restProp);
	// TODO: consider adding a check for titleId when title is passed
	// since just passing title might not be accessible without labelledby id
	return tpl`
${variables.imports};

${variables.interfaces};

const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);

${variables.exports};
`;
};
