import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTruckGreen = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={17}
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
			d='M4.667 11.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M9.333 10V3.067a.4.4 0 0 0-.4-.4h-7.2a.4.4 0 0 0-.4.4V9.6c0 .221.18.4.4.4H3.1M9.333 10h-3.3M9.333 4.667h3.74a.4.4 0 0 1 .366.237l.86 1.935a.4.4 0 0 1 .034.163V8'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11.333 15.333s.6-2.078 2-3.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m13.202 14.283-.09.008a2.063 2.063 0 0 1-2.244-1.849 2.04 2.04 0 0 1 1.841-2.233l1.99-.187a.233.233 0 0 1 .254.21l.17 1.72a2.13 2.13 0 0 1-1.921 2.331'
		/>
	</svg>
);
export default SvgTruckGreen;
