import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWebpFormat = ({
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
			d='M2.66666 4V2.4C2.66666 2.17909 2.84574 2 3.06666 2H12.9333C13.1543 2 13.3333 2.17909 13.3333 2.4V4'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M2.66666 12V13.6C2.66666 13.8209 2.84574 14 3.06666 14H12.9333C13.1543 14 13.3333 13.8209 13.3333 13.6V12'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M9 10V8V6H10.6C10.8209 6 11 6.17909 11 6.4V7C11 7.55227 10.5523 8 10 8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9 10H10.6C10.8209 10 11 9.82093 11 9.6V9C11 8.44773 10.5523 8 10 8H9'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13 10V8M13 8V6H15V8H13Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1 6V10L2 8L3 10V6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7 6H5V10H7'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5 8H6.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgWebpFormat;
