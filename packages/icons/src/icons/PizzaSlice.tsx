import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPizzaSlice = ({
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
			d='M9.33325 6.00667L9.33992 5.99927'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33325 5.34005L5.33992 5.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33325 9.34004L5.33992 9.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.99989 12.6666L1.49073 2.00269C1.42047 1.70408 1.69866 1.44077 1.99296 1.52733L12.6666 4.66663'
			stroke='currentColor'
		/>
		<path
			d='M14.7988 5.6164C14.955 4.99131 14.575 4.35789 13.9499 4.20161C13.3248 4.04534 12.6914 4.42539 12.5351 5.05049C12.2738 6.09541 11.2678 7.74935 9.71698 9.30015C8.18298 10.8342 6.28487 12.0961 4.40459 12.53C3.77676 12.6749 3.38525 13.3013 3.53014 13.9291C3.67502 14.557 4.30143 14.9484 4.92926 14.8036C7.38238 14.2375 9.65091 12.666 11.3669 10.9501C13.066 9.25089 14.3933 7.23815 14.7988 5.6164Z'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgPizzaSlice;
