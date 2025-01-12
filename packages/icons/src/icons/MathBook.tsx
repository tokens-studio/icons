import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMathBook = ({
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
			d='M2.66675 12.6667V3.33333C2.66675 2.59695 3.2637 2 4.00008 2H12.9334C13.1543 2 13.3334 2.17909 13.3334 2.4V11.1429'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path d='M4 11.3334H13.3333' stroke='currentColor' strokeLinecap='round' />
		<path d='M4 14H13.3333' stroke='currentColor' strokeLinecap='round' />
		<path
			d='M4.00008 14C3.2637 14 2.66675 13.4031 2.66675 12.6667C2.66675 11.9303 3.2637 11.3334 4.00008 11.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66675 6.66663H9.33341'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M8 8.67329L8.00667 8.66589'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 4.6733L8.00667 4.66589'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMathBook;
