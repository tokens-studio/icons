import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRunning = ({
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
			d='M10.0001 4.66667C10.7365 4.66667 11.3334 4.06971 11.3334 3.33333C11.3334 2.59695 10.7365 2 10.0001 2C9.26368 2 8.66675 2.59695 8.66675 3.33333C8.66675 4.06971 9.26368 4.66667 10.0001 4.66667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.40887 5.51123L6.20337 8.26802L8.9602 11.0249L7.5818 14.0574'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.27368 6.33827L6.5316 4.13281L8.40888 5.51122L10.3387 7.71674H12.8199'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.92776 10.4735L5.10072 11.0249H2.89526'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgRunning;
