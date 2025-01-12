import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSvgFormat = ({
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
			d='M3 10H4.33333C4.88562 10 5.33333 9.55227 5.33333 9C5.33333 8.44773 4.88562 8 4.33333 8H4C3.44771 8 3 7.55227 3 7C3 6.44771 3.44771 6 4 6H5'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7 6L8 10L9 6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13 6H11V10H13V8.4'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
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
	</svg>
);
export default SvgSvgFormat;
