import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAlignVerticalCenters = ({
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
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M14.667 8H1.333'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M5.333 12.667V3.333C5.333 2.597 5.93 2 6.667 2h2.666c.737 0 1.334.597 1.334 1.333v9.334c0 .736-.597 1.333-1.334 1.333H6.667a1.333 1.333 0 0 1-1.334-1.333Z'
		/>
	</svg>
);
export default SvgAlignVerticalCenters;
