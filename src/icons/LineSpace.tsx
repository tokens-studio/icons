import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLineSpace = ({
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
			d='M7.333 4H14M7.333 8H14M7.333 12H14M3.333 12.667V3.333m0 9.334L2 11m1.333 1.667L4.667 11M3.333 3.333 2 4.667m1.333-1.334 1.334 1.334'
		/>
	</svg>
);
export default SvgLineSpace;
