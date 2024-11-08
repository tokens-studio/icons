import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSwipeTwoFingersRightGesture = ({
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
			d='M8 11.667a2.333 2.333 0 1 1-4.667 0 2.333 2.333 0 0 1 4.667 0m0 0h4.667m0 0L11.067 10m1.6 1.667-1.6 1.666M8 4.333a2.333 2.333 0 1 1-4.667 0 2.333 2.333 0 0 1 4.667 0m0 0h4.667m0 0-1.6-1.666m1.6 1.666L11.067 6'
		/>
	</svg>
);
export default SvgSwipeTwoFingersRightGesture;
