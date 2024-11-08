import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTvWarning = ({
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
			d='M8 7.333v2M8 12.007l.007-.008'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M1.333 13.333V6c0-.736.597-1.333 1.334-1.333h10.666c.737 0 1.334.597 1.334 1.333v7.333c0 .737-.597 1.334-1.334 1.334H2.667a1.333 1.333 0 0 1-1.334-1.334Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M5.667 1.667 8 4l2.333-2.333'
		/>
	</svg>
);
export default SvgTvWarning;
