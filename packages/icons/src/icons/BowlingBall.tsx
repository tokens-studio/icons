import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBowlingBall = ({
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
			d='M8.00004 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00001C14.6667 4.31811 11.6819 1.33334 8.00004 1.33334C4.31814 1.33334 1.33337 4.31811 1.33337 8.00001C1.33337 11.6819 4.31814 14.6667 8.00004 14.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.66671 5.33332C7.85077 5.33332 8.00004 5.18408 8.00004 4.99999C8.00004 4.8159 7.85077 4.66666 7.66671 4.66666C7.48264 4.66666 7.33337 4.8159 7.33337 4.99999C7.33337 5.18408 7.48264 5.33332 7.66671 5.33332Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.99996 7.33332C5.18405 7.33332 5.33329 7.18406 5.33329 6.99999C5.33329 6.81592 5.18405 6.66666 4.99996 6.66666C4.81587 6.66666 4.66663 6.81592 4.66663 6.99999C4.66663 7.18406 4.81587 7.33332 4.99996 7.33332Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.66671 8.66667C7.85077 8.66667 8.00004 8.5174 8.00004 8.33333C8.00004 8.14927 7.85077 8 7.66671 8C7.48264 8 7.33337 8.14927 7.33337 8.33333C7.33337 8.5174 7.48264 8.66667 7.66671 8.66667Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBowlingBall;
