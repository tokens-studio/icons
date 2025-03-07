import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBubbleStar = ({
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
			d='M11.5371 2.74218L12.1431 1.45708C12.2209 1.2921 12.4457 1.2921 12.5235 1.45708L13.1296 2.74218L14.485 2.94953C14.6589 2.97613 14.7282 3.19986 14.6023 3.3282L13.6217 4.32781L13.8531 5.74C13.8829 5.92136 13.701 6.05965 13.5454 5.974L12.3333 5.30688L11.1213 5.974C10.9657 6.05965 10.7838 5.92136 10.8135 5.74L11.0449 4.32781L10.0643 3.3282C9.93846 3.19986 10.0077 2.97613 10.1817 2.94953L11.5371 2.74218Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66668 1.36626C8.44741 1.34449 8.22501 1.33334 8.00001 1.33334C4.31811 1.33334 1.33334 4.31811 1.33334 8.00001C1.33334 9.21428 1.65799 10.3527 2.22522 11.3333L1.66668 14.3333L4.66668 13.7748C5.64726 14.342 6.78574 14.6667 8.00001 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00001C14.6667 7.77501 14.6555 7.55261 14.6337 7.33334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBubbleStar;
