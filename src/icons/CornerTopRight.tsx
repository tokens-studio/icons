import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCornerTopRight = ({
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
			d='m13.34 10.673-.007-.007M13.34 13.34l-.007-.007M10.673 13.34l-.006-.007M8.007 13.34 8 13.333M5.34 13.34l-.007-.007M2.673 13.34l-.006-.007M2.673 10.673l-.006-.007M2.673 8.007l-.006-.008M2.673 5.34l-.006-.007M2.673 2.673l-.006-.007M5.34 2.673l-.007-.007M13.34 8V2.667H8.007V8z'
		/>
	</svg>
);
export default SvgCornerTopRight;
