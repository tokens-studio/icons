import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAccessibility = ({
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
			d='M7.99999 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 7.99999C14.6667 4.31809 11.6819 1.33333 7.99999 1.33333C4.31809 1.33333 1.33333 4.31809 1.33333 7.99999C1.33333 11.6819 4.31809 14.6667 7.99999 14.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66667 6L8 6.66667M8 6.66667L11.3333 6M8 6.66667V8.66667M8 8.66667L6.66667 12M8 8.66667L9.33334 12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00001 4.66667C7.81594 4.66667 7.66667 4.51743 7.66667 4.33333C7.66667 4.14924 7.81594 4 8.00001 4C8.18407 4 8.33334 4.14924 8.33334 4.33333C8.33334 4.51743 8.18407 4.66667 8.00001 4.66667Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgAccessibility;
