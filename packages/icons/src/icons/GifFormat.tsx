import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGifFormat = ({
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
			d='M2.66667 4V2.4C2.66667 2.17909 2.84576 2 3.06667 2H12.9333C13.1543 2 13.3333 2.17909 13.3333 2.4V4'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M2.66667 12V13.6C2.66667 13.8209 2.84576 14 3.06667 14H12.9333C13.1543 14 13.3333 13.8209 13.3333 13.6V12'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M10.3333 10V6H12.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.3333 8H11.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 10V6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.66667 6H3.66667V10H5.66667V8.4'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgGifFormat;
