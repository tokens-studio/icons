import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTwitter = ({
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
			d='M16.3333 2.00671C16.3333 2.00671 14.988 2.80145 14.24 3.02671C13.8384 2.56505 13.3048 2.23783 12.7113 2.08932C12.1178 1.94081 11.493 1.97817 10.9214 2.19634C10.3498 2.41451 9.85889 2.80297 9.51529 3.30918C9.17163 3.81539 8.99176 4.41493 8.99996 5.02671V5.69337C7.82836 5.72375 6.66747 5.46391 5.62063 4.937C4.57379 4.41009 3.67351 3.63246 2.99996 2.67337C2.99996 2.67337 0.333293 8.6734 6.33329 11.3401C4.96031 12.272 3.32473 12.7393 1.66663 12.6734C7.66663 16.0067 15 12.6734 15 5.00671C14.9994 4.82101 14.9815 4.63577 14.9466 4.45337C15.627 3.78237 16.3333 2.00671 16.3333 2.00671Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTwitter;
