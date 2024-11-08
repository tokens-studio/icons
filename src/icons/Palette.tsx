import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPalette = ({
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
			d='M13.673 6.36a1.27 1.27 0 0 1-.667.727 4.67 4.67 0 0 0-2.666 5.18 1.44 1.44 0 0 1-.207 1.1 1.2 1.2 0 0 1-.807.533q-.535.1-1.08.1a6 6 0 0 1-6-6.187A6.033 6.033 0 0 1 7.9 2h.34a6 6 0 0 1 5.373 3.333c.153.317.175.681.06 1.014z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m5.333 10.673.007-.007M4 8.007l.007-.008M5.333 5.34l.007-.007M8 4.007l.007-.008M10.667 5.34l.006-.007'
		/>
	</svg>
);
export default SvgPalette;
