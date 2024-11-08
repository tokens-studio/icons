import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEaseCurveControlPoints = ({
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
			d='M11.333 13.333a1.333 1.333 0 1 0 2.667 0 1.333 1.333 0 0 0-2.667 0m0 0H10M4.667 2.667a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0m0 0H6M9.333 2.667H8M8 13.333H6.667M2 13.333c5.333 0 6.667-10.666 12-10.666'
		/>
	</svg>
);
export default SvgEaseCurveControlPoints;
