import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgChatBubble = ({
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
			d='M11.3333 8.33332C11.5174 8.33332 11.6667 8.18406 11.6667 7.99999C11.6667 7.81592 11.5174 7.66666 11.3333 7.66666C11.1493 7.66666 11 7.81592 11 7.99999C11 8.18406 11.1493 8.33332 11.3333 8.33332Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00008 8.33332C8.18415 8.33332 8.33341 8.18406 8.33341 7.99999C8.33341 7.81592 8.18415 7.66666 8.00008 7.66666C7.81601 7.66666 7.66675 7.81592 7.66675 7.99999C7.66675 8.18406 7.81601 8.33332 8.00008 8.33332Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66659 8.33332C4.85068 8.33332 4.99992 8.18406 4.99992 7.99999C4.99992 7.81592 4.85068 7.66666 4.66659 7.66666C4.48249 7.66666 4.33325 7.81592 4.33325 7.99999C4.33325 8.18406 4.48249 8.33332 4.66659 8.33332Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00001C14.6666 4.31811 11.6818 1.33334 7.99992 1.33334C4.31802 1.33334 1.33325 4.31811 1.33325 8.00001C1.33325 9.21428 1.6579 10.3527 2.22513 11.3333L1.66659 14.3333L4.66659 13.7748C5.64717 14.342 6.78565 14.6667 7.99992 14.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgChatBubble;
