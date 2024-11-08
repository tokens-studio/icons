import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgIceCream = ({
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
			d='M9.333 12v1.333a1.333 1.333 0 1 1-2.666 0V12M3.333 8h9.334'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M4.667 12a1.334 1.334 0 0 1-1.334-1.334V6a4.667 4.667 0 1 1 9.334 0v4.666c0 .737-.597 1.334-1.334 1.334z'
		/>
	</svg>
);
export default SvgIceCream;
