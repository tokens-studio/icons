import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSpiral = ({
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
			d='M2.33334 4.00265C2.33334 5.2053 4.2381 6 7.66668 6C12.3333 6 13 4.00265 13 4.00265C13 4.00265 12.3333 2 7.66668 2C4.2381 2 2.33334 2.8 2.33334 4.00265Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.33334 8.00267C2.33334 9.20533 4.2381 10 7.66668 10C12.3333 10 13 8.00267 13 8.00267C13 8.00267 12.3333 6 7.66668 6C4.2381 6 2.33334 6.8 2.33334 8.00267Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.33334 12.0027C2.33334 13.2053 4.2381 14 7.66668 14C12.3333 14 13 12.0027 13 12.0027C13 12.0027 12.3333 10 7.66668 10C4.2381 10 2.33334 10.8 2.33334 12.0027Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13 8C13 8 13.6667 7.35 13.6667 6C13.6667 4.65 13 4 13 4'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.6667 2.66675C13.6667 3.56675 13 4.00008 13 4.00008'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13 12C13 12 13.6667 11.35 13.6667 10C13.6667 8.65 13 8 13 8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.6667 13.3333C13.6667 12.4333 13 12 13 12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSpiral;
