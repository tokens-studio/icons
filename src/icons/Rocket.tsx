import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRocket = ({
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
			d='m10.708 6.936-1.375 4.397H6.667L5.292 6.936a4 4 0 0 1 .666-3.656l1.727-2.21a.4.4 0 0 1 .63 0l1.727 2.21a4 4 0 0 1 .666 3.656M6.667 13.333c0 1.334 1.333 2 1.333 2s1.333-.666 1.333-2M5.667 8.333c-2.334 1.667-1 4.334-1 4.334l2-1.334M10.62 8.333c2.334 1.667 1 4.334 1 4.334l-2-1.334'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 7.333a1.333 1.333 0 1 1 0-2.666 1.333 1.333 0 0 1 0 2.666'
		/>
	</svg>
);
export default SvgRocket;
