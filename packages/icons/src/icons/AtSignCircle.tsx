import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAtSignCircle = ({
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
			d='M10.8519 11.6941C10.0632 12.3039 9.07401 12.6667 8.00001 12.6667C5.42268 12.6667 3.33334 10.5773 3.33334 8.00001C3.33334 5.42268 5.42268 3.33334 8.00001 3.33334C10.5773 3.33334 12.6667 5.42268 12.6667 8.00001C12.6667 10.8519 9.33334 10.4815 9.33334 8.66668C9.33334 7.62961 9.33334 5.66668 9.33334 5.66668'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33333 8V7.66667C9.33333 6.7462 8.58713 6 7.66667 6C6.7462 6 6 6.7462 6 7.66667V8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33333 8V8.33333C9.33333 9.2538 8.58713 10 7.66667 10C6.7462 10 6 9.2538 6 8.33333V8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00001 14.6667C4.31811 14.6667 1.33334 11.6819 1.33334 8.00001C1.33334 4.31811 4.31811 1.33334 8.00001 1.33334C11.6819 1.33334 14.6667 4.31811 14.6667 8.00001C14.6667 11.6819 11.6819 14.6667 8.00001 14.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgAtSignCircle;
