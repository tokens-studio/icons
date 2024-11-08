import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBus = ({
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
			d='m4.667 10.673.006-.007M11.333 10.673l.007-.007M2 8h12v4.667a.667.667 0 0 1-.667.666H2.667A.667.667 0 0 1 2 12.667zM14 5.333V4a2.667 2.667 0 0 0-2.667-2.667H4.667A2.667 2.667 0 0 0 2 4v1.333M4.667 5.333h6.666'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M3 13.333V14.6c0 .22.18.4.4.4h1.867a.4.4 0 0 0 .4-.4v-1.267M10.333 13.333V14.6c0 .22.18.4.4.4H12.6a.4.4 0 0 0 .4-.4v-1.267'
		/>
	</svg>
);
export default SvgBus;
