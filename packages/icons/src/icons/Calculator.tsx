import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCalculator = ({
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
			d='M1.66669 15V2.99999C1.66669 2.26361 2.26364 1.66666 3.00002 1.66666H15C15.7364 1.66666 16.3334 2.26361 16.3334 2.99999V15C16.3334 15.7364 15.7364 16.3333 15 16.3333H3.00002C2.26364 16.3333 1.66669 15.7364 1.66669 15Z'
			stroke='currentColor'
		/>
		<path
			d='M11 5.66666H12.3333H13.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11 11.3333H12.3333H13.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11 13.3333H12.3333H13.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.33331 5.66668H5.66665M5.66665 5.66668H6.99998M5.66665 5.66668V4.33334M5.66665 5.66668V7.00001'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.72406 13.2761L5.66687 12.3333M5.66687 12.3333L6.60968 11.3905M5.66687 12.3333L4.72406 11.3905M5.66687 12.3333L6.60968 13.2761'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCalculator;
