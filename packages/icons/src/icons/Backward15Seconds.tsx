import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBackward15Seconds = ({
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
			d='M2 8.66666C2 11.9804 4.68629 14.6667 8 14.6667C11.3137 14.6667 14 11.9804 14 8.66666C14 5.35295 11.3137 2.66666 8 2.66666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6 6V10.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10 6H8.66667C8.29847 6 8 6.29848 8 6.66667V7.66667C8 8.03487 8.29847 8.33333 8.66667 8.33333H9.33333C9.70153 8.33333 10 8.6318 10 9V10C10 10.3682 9.70153 10.6667 9.33333 10.6667H8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 2.66668H3M3 2.66668L4.33333 1.33334M3 2.66668L4.33333 4.00001'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBackward15Seconds;
