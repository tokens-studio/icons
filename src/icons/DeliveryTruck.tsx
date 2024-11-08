import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDeliveryTruck = ({
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
			strokeMiterlimit={1.5}
			strokeWidth={1.5}
			d='M6.333 12.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667M13 12.667A1.333 1.333 0 1 0 13 10a1.333 1.333 0 0 0 0 2.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M7.7 11.333H11V4.4a.4.4 0 0 0-.4-.4H1.667M4.767 11.333H3.4a.4.4 0 0 1-.4-.4V7.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M2.333 6H5'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M11 6h3.74a.4.4 0 0 1 .366.238l1.193 2.684a.4.4 0 0 1 .034.163v1.848a.4.4 0 0 1-.4.4h-1.266M11 11.333h.667'
		/>
	</svg>
);
export default SvgDeliveryTruck;
