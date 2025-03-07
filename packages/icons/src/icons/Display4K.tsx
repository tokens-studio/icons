import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDisplay4K = ({
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
			d='M9 6V8.66667M9 8.66667V10M9 8.66667L9.91373 7.6224M9.91373 7.6224L11.3333 6M9.91373 7.6224L11.3333 10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.33334 6L4.33334 9H6.66668V10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33334 12.2666V3.73331C1.33334 3.5124 1.51243 3.33331 1.73334 3.33331H14.2667C14.4876 3.33331 14.6667 3.5124 14.6667 3.73331V12.2666C14.6667 12.4876 14.4876 12.6666 14.2667 12.6666H1.73334C1.51243 12.6666 1.33334 12.4876 1.33334 12.2666Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgDisplay4K;
