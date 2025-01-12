import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBorderStyle = ({
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
			d='M13.3333 13.34L13.34 13.3326'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 13.34L10.6733 13.3326'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 13.34L8.00667 13.3326'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33334 13.34L5.34001 13.3326'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.66666 13.34L2.67332 13.3326'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.66666 2.66667H13.3333'
			stroke='currentColor'
			strokeLinecap='square'
			strokeLinejoin='round'
		/>
		<path
			d='M11.8333 8.0074L13.3333 8'
			stroke='currentColor'
			strokeLinecap='square'
			strokeLinejoin='round'
		/>
		<path
			d='M7.25 8.0074L8.75 8'
			stroke='currentColor'
			strokeLinecap='square'
			strokeLinejoin='round'
		/>
		<path
			d='M2.66669 8.0074L4.16669 8'
			stroke='currentColor'
			strokeLinecap='square'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBorderStyle;
