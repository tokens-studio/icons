import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCandlestickChart = ({
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
			d='M3.33337 10.6667V9.33334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 14V12.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6666 8.66668V7.33334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33337 5.33333V4'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 8.66668V7.33334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6666 3.33333V2'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66667 5.73334V8.93334C4.66667 9.15428 4.48758 9.33334 4.26667 9.33334H2.4C2.17909 9.33334 2 9.15428 2 8.93334V5.73334C2 5.51243 2.17909 5.33334 2.4 5.33334H4.26667C4.48758 5.33334 4.66667 5.51243 4.66667 5.73334Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33329 9.06666V12.2667C9.33329 12.4876 9.15423 12.6667 8.93329 12.6667H7.06663C6.84569 12.6667 6.66663 12.4876 6.66663 12.2667V9.06666C6.66663 8.84572 6.84569 8.66666 7.06663 8.66666H8.93329C9.15423 8.66666 9.33329 8.84572 9.33329 9.06666Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 3.73334V6.93334C14 7.15428 13.821 7.33334 13.6 7.33334H11.7334C11.5124 7.33334 11.3334 7.15428 11.3334 6.93334V3.73334C11.3334 3.51243 11.5124 3.33334 11.7334 3.33334H13.6C13.821 3.33334 14 3.51243 14 3.73334Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCandlestickChart;
