import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgConsumable = ({
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
			d='M14.6686 1.99998V4.99801C14.6686 5.18319 14.5185 5.33331 14.3333 5.33331C14.2 5.33331 14.0801 5.25401 14.0227 5.13371C12.9509 2.8863 10.6577 1.33331 8.00193 1.33331C4.54501 1.33331 1.70264 3.96443 1.36816 7.33331'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3334 6.66664V9.99998C11.3334 10.7364 10.7364 11.3333 10 11.3333H6.00002C5.26364 11.3333 4.66669 10.7364 4.66669 9.99998V6.66665C4.66669 5.93027 5.26364 5.33331 6.00002 5.33331H10C10.7364 5.33331 11.3334 5.93027 11.3334 6.66664Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 7.33331V5.33331'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.36725 14V11.002C1.36725 10.8168 1.51738 10.6667 1.70256 10.6667C1.83584 10.6667 1.95578 10.746 2.01315 10.8663C3.08498 13.1137 5.37808 14.6667 8.03389 14.6667C11.4908 14.6667 14.3332 12.0356 14.6677 8.66669'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgConsumable;
