import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTruckLength = ({
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
			d='M4.667 10.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667M11.333 10.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M9.333 9.333V2.4a.4.4 0 0 0-.4-.4h-7.2a.4.4 0 0 0-.4.4v6.533c0 .221.18.4.4.4H3.1M9.333 9.333h-3.3M9.333 4h3.74a.4.4 0 0 1 .366.238l1.193 2.684a.4.4 0 0 1 .035.163v1.848a.4.4 0 0 1-.4.4H13M9.333 9.333H10'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M2 13.333h11.833M2 13.333 3.167 14.5M2 13.333l1.167-1.166m10.666 1.166L12.667 14.5m1.166-1.167-1.166-1.166'
		/>
	</svg>
);
export default SvgTruckLength;
