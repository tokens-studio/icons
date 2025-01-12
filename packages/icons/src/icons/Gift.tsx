import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGift = ({
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
			d='M13.3333 8V14.2667C13.3333 14.4876 13.1543 14.6667 12.9333 14.6667H3.06666C2.84574 14.6667 2.66666 14.4876 2.66666 14.2667V8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.2667 4.66663H1.73334C1.51243 4.66663 1.33334 4.84571 1.33334 5.06663V7.59996C1.33334 7.82089 1.51243 7.99996 1.73334 7.99996H14.2667C14.4876 7.99996 14.6667 7.82089 14.6667 7.59996V5.06663C14.6667 4.84571 14.4876 4.66663 14.2667 4.66663Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 14.6666V4.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00001 4.66671H5.00001C4.55798 4.66671 4.13406 4.49111 3.8215 4.17855C3.50894 3.86599 3.33334 3.44207 3.33334 3.00004C3.33334 2.55801 3.50894 2.13409 3.8215 1.82153C4.13406 1.50897 4.55798 1.33337 5.00001 1.33337C7.33334 1.33337 8.00001 4.66671 8.00001 4.66671Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 4.66671H11C11.442 4.66671 11.8659 4.49111 12.1785 4.17855C12.4911 3.86599 12.6667 3.44207 12.6667 3.00004C12.6667 2.55801 12.4911 2.13409 12.1785 1.82153C11.8659 1.50897 11.442 1.33337 11 1.33337C8.66667 1.33337 8 4.66671 8 4.66671Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgGift;
