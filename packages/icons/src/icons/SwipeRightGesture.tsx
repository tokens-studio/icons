import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSwipeRightGesture = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M9.33325 8C9.33325 10.2091 7.54238 12 5.33325 12C3.12411 12 1.33325 10.2091 1.33325 8C1.33325 5.79086 3.12411 4 5.33325 4C7.54238 4 9.33325 5.79086 9.33325 8ZM9.33325 8H14.6666M14.6666 8L12.6666 6M14.6666 8L12.6666 10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSwipeRightGesture;
