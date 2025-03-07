import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShopFourTilesWindow = ({
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
			d='M2 6V12.6667C2 13.4031 2.59695 14 3.33333 14H12.6667C13.4031 14 14 13.4031 14 12.6667V6'
			stroke='currentColor'
		/>
		<path
			d='M13.6567 2H10.9956L11.3289 5.33333C11.3289 5.33333 11.9956 6 12.9956 6C13.7136 6 14.2025 5.6563 14.4211 5.46247C14.5083 5.38521 14.5401 5.26727 14.521 5.15241L14.0513 2.33424C14.0191 2.14137 13.8523 2 13.6567 2Z'
			stroke='currentColor'
		/>
		<path
			d='M10.9956 2L11.3289 5.33333C11.3289 5.33333 10.6623 6 9.66227 6C8.66227 6 7.99561 5.33333 7.99561 5.33333V2H10.9956Z'
			stroke='currentColor'
		/>
		<path
			d='M7.99545 2V5.33333C7.99545 5.33333 7.32878 6 6.32878 6C5.32878 6 4.66211 5.33333 4.66211 5.33333L4.99544 2H7.99545Z'
			stroke='currentColor'
		/>
		<path
			d='M4.99561 2H2.33445C2.13892 2 1.97205 2.14137 1.9399 2.33424L1.4702 5.15241C1.45106 5.26727 1.48295 5.38521 1.57008 5.46247C1.78869 5.6563 2.27757 6 2.99559 6C3.99559 6 4.66227 5.33333 4.66227 5.33333L4.99561 2Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgShopFourTilesWindow;
