import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCaseTitle = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 24}
		height={props.height || 24}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (24 / (Number(props.width) || 24))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M4.5 12.9999H10.5M2.5 16.9999L6.77171 7.60219C7.00308 7.09318 7.11876 6.83867 7.27907 6.75971C7.41837 6.6911 7.58163 6.6911 7.72093 6.75971C7.88124 6.83867 7.99692 7.09318 8.22829 7.60219L12.5 16.9999'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M18.5 17C20.1569 17 21.5 15.6569 21.5 14C21.5 12.3431 20.1569 11 18.5 11C16.8431 11 15.5 12.3431 15.5 14C15.5 15.6569 16.8431 17 18.5 17Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M15.5 8L15.5 17'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCaseTitle;
