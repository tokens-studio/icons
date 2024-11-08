import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCurveArray = ({
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
			d='M3.443 11.333q.29-1.05.754-2m3.47-4.137a11 11 0 0 1 1.666-.999M3 14.667a1.667 1.667 0 1 1 0-3.334 1.667 1.667 0 0 1 0 3.334'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6.333 8a1.667 1.667 0 1 1 0-3.333 1.667 1.667 0 0 1 0 3.333M13 4.667a1.667 1.667 0 1 1 0-3.334 1.667 1.667 0 0 1 0 3.334'
		/>
	</svg>
);
export default SvgCurveArray;
