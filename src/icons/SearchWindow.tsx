import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSearchWindow = ({
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
			strokeWidth={1.5}
			d='M8.667 14h-6a1.333 1.333 0 0 1-1.334-1.333V3.333C1.333 2.597 1.93 2 2.667 2h10.666c.737 0 1.334.597 1.334 1.333v6'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M1.333 4.667h13.334M3.333 3.34l.007-.007M5.333 3.34l.007-.007M7.333 3.34l.007-.007M13.416 13.412a2 2 0 1 0-2.832-2.825 2 2 0 0 0 2.832 2.825m0 0 1.25 1.255'
		/>
	</svg>
);
export default SvgSearchWindow;
