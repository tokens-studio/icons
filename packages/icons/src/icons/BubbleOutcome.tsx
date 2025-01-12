import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBubbleOutcome = ({
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
			d='M10.6667 3.33334H14.6667M14.6667 3.33334L12.6667 5.33334M14.6667 3.33334L12.6667 1.33334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66666 1.36626C8.44739 1.34449 8.22499 1.33334 7.99999 1.33334C4.31809 1.33334 1.33333 4.31811 1.33333 8.00001C1.33333 9.21428 1.65797 10.3527 2.22521 11.3333L1.66666 14.3333L4.66666 13.7748C5.64724 14.342 6.78573 14.6667 7.99999 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00001C14.6667 7.77501 14.6555 7.55261 14.6337 7.33334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBubbleOutcome;
