import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCompAlignBottom = ({
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
			d='M14.6667 14H1.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33333 10V3.33333C5.33333 2.59695 5.93028 2 6.66666 2H9.33333C10.0697 2 10.6667 2.59695 10.6667 3.33333V10C10.6667 10.7364 10.0697 11.3333 9.33333 11.3333H6.66666C5.93028 11.3333 5.33333 10.7364 5.33333 10Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgCompAlignBottom;
