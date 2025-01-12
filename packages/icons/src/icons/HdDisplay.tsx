import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHdDisplay = ({
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
			d='M5 5.66663V7.99996M5 7.99996V10.3333M5 7.99996H8M8 7.99996V5.66663M8 7.99996V10.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.3333 7.99996V5.66663C12 5.66663 13.6666 5.66663 13.6666 7.99996C13.6666 10.3333 12 10.3333 10.3333 10.3333V7.99996Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.66669 10V6C1.66669 3.79086 3.45755 2 5.66669 2H12.3334C14.5425 2 16.3334 3.79086 16.3334 6V10C16.3334 12.2091 14.5425 14 12.3334 14H5.66669C3.45755 14 1.66669 12.2091 1.66669 10Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgHdDisplay;
