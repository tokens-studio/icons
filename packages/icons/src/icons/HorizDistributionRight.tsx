import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHorizDistributionRight = ({
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
			d='M3.33325 11.3333V4.66663M3.33325 11.3333H6.93325C7.15419 11.3333 7.33325 11.1542 7.33325 10.9333V5.06663C7.33325 4.84571 7.15419 4.66663 6.93325 4.66663H3.33325M3.33325 11.3333V13.3333M3.33325 4.66663V2.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10 11.3333V4.66663M10 11.3333H12.2667C12.4876 11.3333 12.6667 11.1542 12.6667 10.9333V5.06663C12.6667 4.84571 12.4876 4.66663 12.2667 4.66663H10M10 11.3333V13.3333M10 4.66663V2.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgHorizDistributionRight;
