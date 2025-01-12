import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAirplaneHelix = ({
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
			d='M8.99974 10.9997C10.1043 10.9997 10.9997 10.1043 10.9997 8.99967C10.9997 7.89514 10.1043 6.99968 8.99974 6.99968C7.8952 6.99968 6.99976 7.89514 6.99976 8.99967C6.99976 10.1043 7.8952 10.9997 8.99974 10.9997Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M8.99996 7C8.99996 7 7.67463 5.68334 7.66663 4.33334C7.66729 3.00467 7.63329 1.66601 8.99996 1.66667C10.2986 1.66734 10.3313 2.98401 10.3333 4.33334C10.3353 5.65667 8.99996 7 8.99996 7Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M11 9.00001C11 9.00001 12.3167 7.67467 13.6667 7.66667C14.9953 7.66734 16.334 7.63334 16.3333 9.00001C16.3327 10.2987 15.016 10.3313 13.6667 10.3333C12.3433 10.3353 11 9.00001 11 9.00001Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M6.99996 8.99999C6.99996 8.99999 5.68329 10.3253 4.33329 10.3333C3.00463 10.3327 1.66596 10.3667 1.66663 8.99999C1.66729 7.70133 2.98396 7.66866 4.33329 7.66666C5.65663 7.66466 6.99996 8.99999 6.99996 8.99999Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M8.99996 11C8.99996 11 10.3253 12.3167 10.3333 13.6667C10.3326 14.9953 10.3666 16.334 8.99996 16.3333C7.70129 16.3327 7.66863 15.016 7.66663 13.6667C7.66463 12.3433 8.99996 11 8.99996 11Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgAirplaneHelix;
