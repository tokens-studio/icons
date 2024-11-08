import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBorderInner = ({
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
			d='m2.667 13.34.006-.007M2.667 10.673l.006-.007M2.667 5.34l.006-.007M2.667 2.673l.006-.007M5.333 2.673l.007-.007M10.667 2.673l.006-.007M13.333 2.673l.007-.007M13.333 5.34l.007-.007M5.333 13.34l.007-.007M10.667 13.34l.006-.007M13.333 13.34l.007-.007M13.333 10.673l.007-.007M2.667 8H8m0 0h5.333M8 8V2.667M8 8v5.333'
		/>
	</svg>
);
export default SvgBorderInner;
