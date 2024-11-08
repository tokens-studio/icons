import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBedReady = ({
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
			d='M14 10.667v-8c0-.737-.597-1.334-1.333-1.334H3.333C2.597 1.333 2 1.93 2 2.667v10.666c0 .737.597 1.334 1.333 1.334h6'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M2 5.333h5.333V4M14 5.333H8.667V4M10.667 13.333 12 14.667 14.667 12'
		/>
	</svg>
);
export default SvgBedReady;
