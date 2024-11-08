import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBorderBottom = ({
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
			d='m13.333 2.673.007-.007M10.667 2.673l.006-.007M8 2.673l.007-.007M5.333 2.673l.007-.007M2.667 2.673l.006-.007M2.667 5.34l.006-.007M2.667 8.007l.006-.008M8 8.007l.007-.008M2.667 10.673l.006-.007M13.333 5.34l.007-.007M13.333 8.007l.007-.008M13.333 10.673l.007-.007M2.667 13.333h10.666'
		/>
	</svg>
);
export default SvgBorderBottom;
