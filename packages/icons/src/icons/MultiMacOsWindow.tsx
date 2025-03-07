import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMultiMacOsWindow = ({
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
			d='M4.66675 12.6667V7.33333C4.66675 6.59695 5.2637 6 6.00008 6H13.3334C14.0698 6 14.6667 6.59695 14.6667 7.33333V12.6667C14.6667 13.4031 14.0698 14 13.3334 14H6.00008C5.2637 14 4.66675 13.4031 4.66675 12.6667Z'
			stroke='currentColor'
		/>
		<path
			d='M6.66675 8.00667L6.67341 7.99927'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 8.00667L8.00667 7.99927'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33325 8.00667L9.33992 7.99927'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.33325 10.6666H2.66659C1.93021 10.6666 1.33325 10.0697 1.33325 9.33329V3.99996C1.33325 3.26358 1.93021 2.66663 2.66659 2.66663H9.99992C10.7363 2.66663 11.3333 3.26358 11.3333 3.99996V5.99996'
			stroke='currentColor'
		/>
		<path
			d='M3.33325 4.6733L3.33992 4.66589'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66675 4.6733L4.67341 4.66589'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6 4.6733L6.00667 4.66589'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMultiMacOsWindow;
