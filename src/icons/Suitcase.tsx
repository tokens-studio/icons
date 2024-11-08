import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSuitcase = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={16}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M5.333 4.667H2.667c-.737 0-1.334.597-1.334 1.333v6.667c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333V6c0-.736-.597-1.333-1.334-1.333h-2.666m-5.334 0V2.4c0-.22.18-.4.4-.4h4.534c.22 0 .4.18.4.4v2.267m-5.334 0h5.334'
		/>
	</svg>
);
export default SvgSuitcase;
