import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTransitionLeft = ({
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
			d='M14.6667 12V4C14.6667 2.89543 13.7713 2 12.6667 2H11.3333C10.2287 2 9.33334 2.89543 9.33334 4V12C9.33334 13.1046 10.2287 14 11.3333 14H12.6667C13.7713 14 14.6667 13.1046 14.6667 12Z'
			stroke='currentColor'
		/>
		<path
			d='M5.33334 2H4.00001C2.52725 2 1.33334 3.19391 1.33334 4.66667V11.3333C1.33334 12.8061 2.52725 14 4.00001 14H5.33334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33333 8H4M4 8L6 6M4 8L6 10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTransitionLeft;
