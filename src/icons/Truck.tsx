import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTruck = ({
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
			strokeMiterlimit={1.5}
			strokeWidth={1.5}
			d='M4.667 12.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667M11.333 12.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M9.333 11.333V4.4a.4.4 0 0 0-.4-.4h-7.2a.4.4 0 0 0-.4.4v6.533c0 .221.18.4.4.4H3.1M9.333 11.333h-3.3M9.333 6h3.74a.4.4 0 0 1 .366.238l1.193 2.684a.4.4 0 0 1 .035.163v1.848a.4.4 0 0 1-.4.4H13M9.333 11.333H10'
		/>
	</svg>
);
export default SvgTruck;
