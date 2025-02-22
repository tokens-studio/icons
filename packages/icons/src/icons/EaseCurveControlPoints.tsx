import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEaseCurveControlPoints = ({
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
			d='M11.3333 13.3333C11.3333 14.0697 11.9303 14.6667 12.6667 14.6667C13.4031 14.6667 14 14.0697 14 13.3333C14 12.5969 13.4031 12 12.6667 12C11.9303 12 11.3333 12.5969 11.3333 13.3333ZM11.3333 13.3333H10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66667 2.66665C4.66667 3.40303 4.06971 3.99998 3.33333 3.99998C2.59695 3.99998 2 3.40303 2 2.66665C2 1.93027 2.59695 1.33331 3.33333 1.33331C4.06971 1.33331 4.66667 1.93027 4.66667 2.66665ZM4.66667 2.66665H6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33333 2.66669H8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00008 13.3333H6.66675'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 13.3334C7.33333 13.3334 8.66667 2.66669 14 2.66669'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgEaseCurveControlPoints;
