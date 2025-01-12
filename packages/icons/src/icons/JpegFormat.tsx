import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgJpegFormat = ({
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
			d='M4.66663 10V8M4.66663 8V6H6.66663V8H4.66663Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6666 6H8.66663V10H10.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.6666 6H12.6666V10H14.6666V8.4'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.66671 6C2.66671 6 2.66671 7.6 2.66671 8.8C2.66671 10 1.33337 10 1.33337 10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66663 8H9.99996'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.66663 4V2.4C2.66663 2.17909 2.84571 2 3.06663 2H12.9333C13.1542 2 13.3333 2.17909 13.3333 2.4V4'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M2.66663 12V13.6C2.66663 13.8209 2.84571 14 3.06663 14H12.9333C13.1542 14 13.3333 13.8209 13.3333 13.6V12'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgJpegFormat;
