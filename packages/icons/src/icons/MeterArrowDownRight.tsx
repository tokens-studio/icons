import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMeterArrowDownRight = ({
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
			d='M1.66669 2.33337L4.66669 5.33315M4.66669 5.33315L4.66669 2.66671M4.66669 5.33315L2.00009 5.33322'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10 10.6667L7.66669 8.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.66669 6C6.90529 6 4.66669 8.1888 4.66669 10.8889C4.66669 11.6445 4.84201 12.3601 5.15504 12.9989C5.25874 13.2105 5.48014 13.3333 5.71579 13.3333H13.6176C13.8532 13.3333 14.0746 13.2105 14.1784 12.9989C14.4914 12.3601 14.6667 11.6445 14.6667 10.8889C14.6667 8.1888 12.4281 6 9.66669 6Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgMeterArrowDownRight;
