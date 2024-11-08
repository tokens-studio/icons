import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCornerBottomRight = ({
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
			d='m13.34 5.333-.007.008M13.34 2.667l-.007.007M10.673 2.667l-.006.007M8.007 2.667 8 2.674M5.34 2.667l-.007.007M2.673 2.667l-.006.007M2.673 5.333l-.006.008M2.673 8l-.006.007M2.673 10.667l-.006.007M2.673 13.333l-.006.008M5.34 13.333l-.007.008M13.34 8.007v5.333H8.007V8.007z'
		/>
	</svg>
);
export default SvgCornerBottomRight;
