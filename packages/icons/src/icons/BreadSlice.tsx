import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBreadSlice = ({
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
			d='M4.66673 13.3333V5.99999C4.66673 5.99999 2.00003 2.66666 6.33339 2.66666H11.3334C16.0001 2.66666 13.3334 5.99999 13.3334 5.99999V12C13.3334 12.7364 12.7365 13.3333 12.0001 13.3333H4.66673Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66673 13.3333H4.00006C3.26368 13.3333 2.66673 12.7364 2.66673 12V5.99999C2.66673 5.99999 2.61708e-05 2.66666 4.33339 2.66666H6.66673'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBreadSlice;
