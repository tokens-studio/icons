import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAugmentedReality = ({
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
			d='M3.66669 10.3333L4.07581 9.18779M4.07581 9.18779L5.33335 5.66666L6.59089 9.18779M4.07581 9.18779H6.59089M7.00002 10.3333L6.59089 9.18779'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66669 10.3333V8.46666M8.66669 8.46666V5.66666H10.5714C11.0476 5.66666 12 5.66666 12 7.06666C12 8.46666 11.0476 8.46666 10.5714 8.46666M8.66669 8.46666C8.98415 8.46666 9.80955 8.46666 10.5714 8.46666M10.5714 8.46666L12 10.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33331 12.2667V3.73334C1.33331 3.51243 1.5124 3.33334 1.73331 3.33334H14.2666C14.4876 3.33334 14.6666 3.51243 14.6666 3.73334V12.2667C14.6666 12.4876 14.4876 12.6667 14.2666 12.6667H1.73331C1.5124 12.6667 1.33331 12.4876 1.33331 12.2667Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgAugmentedReality;
