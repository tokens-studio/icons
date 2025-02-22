import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRawFormat = ({
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
			d='M2.66675 4V2.4C2.66675 2.17909 2.84583 2 3.06675 2H12.9334C13.1543 2 13.3334 2.17909 13.3334 2.4V4'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M2.66675 12V13.6C2.66675 13.8209 2.84583 14 3.06675 14H12.9334C13.1543 14 13.3334 13.8209 13.3334 13.6V12'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M11 6V10L12 8L13 10V6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7 10V8M7 8V7C7 6.44771 7.44773 6 8 6C8.55227 6 9 6.44771 9 7V8M7 8H9M9 8V10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3 10V8V6H4.6C4.82091 6 5 6.17909 5 6.4V7C5 7.55227 4.55229 8 4 8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3 8H4C4.55229 8 5 8.44773 5 9V10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgRawFormat;
