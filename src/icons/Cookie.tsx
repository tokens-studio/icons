import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCookie = ({
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
			d='M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M5 7.333a.333.333 0 1 1 0-.666.333.333 0 0 1 0 .666M8.667 12a.667.667 0 1 1 0-1.333.667.667 0 0 1 0 1.333M7.333 4.673l.007-.007M5.333 10.673l.007-.007M10.667 6.007l.006-.008M11.333 9.34l.007-.007M8.667 8.007l.006-.008'
		/>
	</svg>
);
export default SvgCookie;
