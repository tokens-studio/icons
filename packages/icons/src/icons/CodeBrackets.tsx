import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCodeBrackets = ({
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
			d='M6.00001 14H5.33334C4.59696 14 4.00001 13.4038 4.00001 12.6674C4.00001 11.6334 4.00001 10.2295 4 9.33333C4 8.66667 3 8 3 8C3 8 4.00001 7.33333 4.00001 6.66667C4.00001 5.88467 4.00001 4.41471 4.00001 3.33276C4.00001 2.59638 4.59696 2 5.33334 2H6.00001'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10 14H10.6667C11.4031 14 12 13.4038 12 12.6674C12 11.6334 12 10.2295 12 9.33333C12 8.66667 13 8 13 8C13 8 12 7.33333 12 6.66667C12 5.88467 12 4.41471 12 3.33276C12 2.59638 11.4031 2 10.6667 2H10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCodeBrackets;
