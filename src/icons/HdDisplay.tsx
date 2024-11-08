import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHdDisplay = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
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
			d='M5 5.667V8m0 0v2.333M5 8h3m0 0V5.667M8 8v2.333M10.333 8V5.667c1.667 0 3.334 0 3.334 2.333S12 10.333 10.333 10.333z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M1.667 10V6a4 4 0 0 1 4-4h6.666a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H5.667a4 4 0 0 1-4-4Z'
		/>
	</svg>
);
export default SvgHdDisplay;
