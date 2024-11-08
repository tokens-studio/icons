import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCornerBottomLeft = ({
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
			d='m2.667 5.333.007.008M2.667 2.667l.007.007M5.334 2.667l.006.007M8 2.667l.007.007M10.667 2.667l.007.007M13.334 2.667l.006.007M13.334 5.333l.006.008M13.334 8l.006.007M13.334 10.667l.006.007M13.334 13.333l.006.008M10.667 13.333l.007.008M2.667 8.007v5.333H8V8.007z'
		/>
	</svg>
);
export default SvgCornerBottomLeft;
