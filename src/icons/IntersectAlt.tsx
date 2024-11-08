import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgIntersectAlt = ({
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
			d='M10.007 2 10 2.007M7.34 2l-.007.007M4.673 2l-.006.007M2.007 2 2 2.007M2.007 4.667 2 4.674M2.007 7.333 2 7.341M2.007 10 2 10.007M6 14.007l.007-.008M8.667 14.007l.006-.008M11.333 14.007l.007-.008M14 14.007l.007-.008M14 11.34l.007-.007M14 8.673l.007-.007M14 6.007l.007-.008M6 11.333V6.667C6 6.298 6.298 6 6.667 6h4.666'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10 4.667v4.666a.667.667 0 0 1-.667.667H4.667'
		/>
	</svg>
);
export default SvgIntersectAlt;
