import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBusGreen = ({
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
			strokeWidth={1.5}
			d='m4.667 10.673.006-.007M14 8H2v4.667c0 .368.298.666.667.666h6M11.333 15.333s.6-2.078 2-3.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m13.202 14.283-.09.008a2.063 2.063 0 0 1-2.244-1.849 2.04 2.04 0 0 1 1.841-2.233l1.99-.187a.234.234 0 0 1 .254.21l.17 1.72a2.13 2.13 0 0 1-1.921 2.331M14 5.333V4a2.667 2.667 0 0 0-2.667-2.667H4.667A2.667 2.667 0 0 0 2 4v1.333M4.667 5.333h6.666'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M3 13.333V14.6c0 .22.18.4.4.4h1.867a.4.4 0 0 0 .4-.4v-1.267'
		/>
	</svg>
);
export default SvgBusGreen;
