import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgChatBubbleTranslate = ({
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
			d='M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00001C14.6666 4.31811 11.6818 1.33334 7.99992 1.33334C4.31802 1.33334 1.33325 4.31811 1.33325 8.00001C1.33325 9.21428 1.6579 10.3527 2.22513 11.3333L1.66659 14.3333L4.66659 13.7748C5.64717 14.342 6.78565 14.6667 7.99992 14.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66675 5.67815H8.00008M8.00008 5.67815H10.1429M8.00008 5.67815V4.66666M11.3334 5.67815H10.1429M10.1429 5.67815C9.75221 7.06146 8.93401 8.36906 8.00008 9.51819M8.00008 9.51819C7.22675 10.4698 6.37408 11.3127 5.61913 12M8.00008 9.51819C7.52388 8.96552 6.85721 8.07126 6.66675 7.66666M8.00008 9.51819L9.42868 10.9885'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgChatBubbleTranslate;
