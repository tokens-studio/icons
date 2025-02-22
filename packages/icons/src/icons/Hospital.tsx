import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHospital = ({
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
			d='M4.26675 5.33333C4.48766 5.33333 4.66675 5.15425 4.66675 4.93333V2.4C4.66675 2.17909 4.84583 2 5.06675 2H10.9334C11.1543 2 11.3334 2.17909 11.3334 2.4V4.93333C11.3334 5.15425 11.5125 5.33333 11.7334 5.33333H12.9334C13.1543 5.33333 13.3334 5.51242 13.3334 5.73333V13.6C13.3334 13.8209 13.1543 14 12.9334 14H3.06675C2.84583 14 2.66675 13.8209 2.66675 13.6V5.73333C2.66675 5.51242 2.84583 5.33333 3.06675 5.33333H4.26675Z'
			stroke='currentColor'
		/>
		<path
			d='M6.66138 5.33333H7.99472M7.99472 5.33333H9.32805M7.99472 5.33333V4M7.99472 5.33333V6.66667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 11.34L10.6734 11.3326'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 8.67329L10.6734 8.66589'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 8.67329L8.00667 8.66589'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33325 8.67329L5.33992 8.66589'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33325 11.34L5.33992 11.3326'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 11.34L8.00667 11.3326'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgHospital;
