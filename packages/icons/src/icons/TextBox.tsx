import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTextBox = ({
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
			d='M8.00004 5.33325V10.6666M8.00004 5.33325H5.33337M8.00004 5.33325H10.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 9V12.6667C14 13.4031 13.4031 14 12.6667 14H3.33333C2.59695 14 2 13.4031 2 12.6667V9M14 7V3.33333C14 2.59695 13.4031 2 12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V7'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
		<path d='M13 9V7H15V9H13Z' stroke='currentColor' strokeLinejoin='round' />
		<path d='M1 9V7H3V9H1Z' stroke='currentColor' strokeLinejoin='round' />
	</svg>
);
export default SvgTextBox;
