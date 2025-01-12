import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSwipeLeftGesture = ({
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
			d='M6.66658 8C6.66658 10.2091 8.45745 12 10.6666 12C12.8757 12 14.6666 10.2091 14.6666 8C14.6666 5.79086 12.8757 4 10.6666 4C8.45745 4 6.66658 5.79086 6.66658 8ZM6.66658 8H1.33325M1.33325 8L3.33325 6M1.33325 8L3.33325 10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSwipeLeftGesture;
