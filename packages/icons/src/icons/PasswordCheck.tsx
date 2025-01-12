import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPasswordCheck = ({
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
			d='M14 8.66667V5.33333C14 4.59695 13.4031 4 12.6667 4H3.33333C2.59695 4 2 4.59695 2 5.33333V9.33333C2 10.0697 2.59695 10.6667 3.33333 10.6667H8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.66675 12.3333L11.0001 13.6667L13.6667 11'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 7.34004L8.00667 7.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 7.34004L10.6734 7.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33325 7.34004L5.33992 7.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPasswordCheck;
