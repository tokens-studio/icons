import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSnowFlake = ({
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
			d='M2 4.667 4.333 6m0 0L8 8M4.333 6 2 6.667M4.333 6 4 3.667m10 7.666L11.667 10m0 0L8 8m3.667 2L12 12.333M11.667 10 14 9.333M8 8l-3.667 2M8 8V3.333M8 8v4.333M8 8l3.667-2m-7.334 4L2 11.333M4.333 10 2 9.333M4.333 10 4 12.333m4-9v-2m0 2-1.667-.666M8 3.333l1.667-.666M8 12.333v2.334m0-2.334 1.667 1m-1.667-1-1.667 1M11.667 6 14 4.667M11.667 6 14 6.667M11.667 6 12 3.667'
		/>
	</svg>
);
export default SvgSnowFlake;
