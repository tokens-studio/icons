import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEaseOutControlPoint = ({
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
			d='M2 13.333S8.667 2.667 14 2.667M4.667 2.667a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0m0 0H6M9.333 2.667H8'
		/>
	</svg>
);
export default SvgEaseOutControlPoint;
