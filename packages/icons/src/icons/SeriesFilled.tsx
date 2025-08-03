import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSeriesFilled = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 2 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M20 13C21.6569 13 23 14.3431 23 16V20C23 21.6569 21.6569 23 20 23H16C14.3431 23 13 21.6569 13 20V16C13 14.3431 14.3431 13 16 13H20Z'
			fill='currentColor'
		/>
		<path
			d='M14 7C15.6569 7 17 8.34315 17 10V11H16C13.2386 11 11 13.2386 11 16V17H10C8.34315 17 7 15.6569 7 14V10C7 8.34315 8.34315 7 10 7H14Z'
			fill='currentColor'
		/>
		<path
			d='M8 1C9.65685 1 11 2.34315 11 4V5H10C7.23858 5 5 7.23858 5 10V11H4C2.34315 11 1 9.65685 1 8V4C1 2.34315 2.34315 1 4 1H8Z'
			fill='currentColor'
		/>
	</svg>
);
export default SvgSeriesFilled;
