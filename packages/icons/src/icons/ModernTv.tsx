import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgModernTv = ({
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
			d='M4.66663 14H11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33337 10.9333V2.4C1.33337 2.17909 1.51246 2 1.73337 2H14.2667C14.4876 2 14.6667 2.17909 14.6667 2.4V10.9333C14.6667 11.1543 14.4876 11.3333 14.2667 11.3333H1.73337C1.51246 11.3333 1.33337 11.1543 1.33337 10.9333Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgModernTv;
