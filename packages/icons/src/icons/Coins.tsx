import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCoins = ({
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
			d='M10.6666 8.66665C8.82565 8.66665 7.33325 7.92045 7.33325 6.99998C7.33325 6.07951 8.82565 5.33331 10.6666 5.33331C12.5075 5.33331 13.9999 6.07951 13.9999 6.99998C13.9999 7.92045 12.5075 8.66665 10.6666 8.66665Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33325 9.66669C7.33325 10.5872 8.82565 11.3334 10.6666 11.3334C12.5075 11.3334 13.9999 10.5872 13.9999 9.66669'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 6.33331C2 7.25378 3.49239 7.99998 5.33333 7.99998C6.08389 7.99998 6.77647 7.87598 7.33367 7.66665'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 8.66669C2 9.58715 3.49239 10.3334 5.33333 10.3334C6.08374 10.3334 6.7762 10.2094 7.33333 10.0002'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 3.66669V11C2 11.9205 3.49239 12.6667 5.33333 12.6667C6.08375 12.6667 6.7762 12.5426 7.33333 12.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66675 5.66669V3.66669'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33325 7V12.3333C7.33325 13.2538 8.82565 14 10.6666 14C12.5075 14 13.9999 13.2538 13.9999 12.3333V7'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33333 5.33333C3.49239 5.33333 2 4.58714 2 3.66667C2 2.74619 3.49239 2 5.33333 2C7.17427 2 8.66667 2.74619 8.66667 3.66667C8.66667 4.58714 7.17427 5.33333 5.33333 5.33333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCoins;
