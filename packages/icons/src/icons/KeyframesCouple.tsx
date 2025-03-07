import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgKeyframesCouple = ({
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
			d='M10.5459 8.88579L6.99654 12.8789C6.46616 13.4756 5.53384 13.4756 5.00346 12.8789L1.45406 8.88579C1.00502 8.38065 1.00502 7.61932 1.45406 7.11419L5.00346 3.1211C5.53384 2.52441 6.46616 2.52441 6.99654 3.1211L10.5459 7.11419C10.995 7.61932 10.995 8.38065 10.5459 8.88579Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 4.24999L9.00347 3.1211C9.53387 2.52441 10.4661 2.52441 10.9965 3.1211L14.5459 7.11419C14.995 7.61932 14.995 8.38065 14.5459 8.88579L10.9965 12.8789C10.4661 13.4756 9.53387 13.4756 9.00347 12.8789L8 11.75'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgKeyframesCouple;
