import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgArrowDownCircle = ({
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
			d='M7.99996 5.33333V10.6667M7.99996 10.6667L10.3333 8.33333M7.99996 10.6667L5.66663 8.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00004 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 7.99999C14.6667 4.31809 11.6819 1.33333 8.00004 1.33333C4.31814 1.33333 1.33337 4.31809 1.33337 7.99999C1.33337 11.6819 4.31814 14.6667 8.00004 14.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgArrowDownCircle;
