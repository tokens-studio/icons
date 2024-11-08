import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgChurch = ({
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
			d='M8 4 2.855 7.216a.4.4 0 0 0-.188.339v6.712c0 .22.179.4.4.4H8M8 4l5.145 3.216a.4.4 0 0 1 .188.339v6.712a.4.4 0 0 1-.4.4H8M8 4V2.667m0 12v-3.334m0-8.666V1.333m0 1.334H6.667m1.333 0h1.333M10.667 11.34l.006-.007M10.667 8.673l.006-.007M8 8.673l.007-.007M5.333 8.673l.007-.007M5.333 11.34l.007-.007'
		/>
	</svg>
);
export default SvgChurch;
