import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMovie = ({
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
			d='m4.667 5.34.006-.007M11.333 5.34l.007-.007M4.667 8.007l.006-.008M11.333 8.007l.007-.008M4.667 10.673l.006-.007M11.333 10.673l.007-.007M4.667 1.333H2.4a.4.4 0 0 0-.4.4v12.534c0 .22.18.4.4.4h2.267m0-13.334v1.334m0-1.334h6.666M4.667 14.667h6.666m-6.666 0v-1.334m6.666-12H13.6c.22 0 .4.18.4.4v12.534a.4.4 0 0 1-.4.4h-2.267m0-13.334v1.334m0 12v-1.334'
		/>
	</svg>
);
export default SvgMovie;
