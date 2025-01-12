import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgConstrainedSurface = ({
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
			d='M3.00002 16.3334C2.26364 16.3334 1.66669 15.7364 1.66669 15C1.66669 14.2636 2.26364 13.6667 3.00002 13.6667C3.7364 13.6667 4.33335 14.2636 4.33335 15C4.33335 15.7364 3.7364 16.3334 3.00002 16.3334Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M15 16.3334C14.2636 16.3334 13.6667 15.7364 13.6667 15C13.6667 14.2636 14.2636 13.6667 15 13.6667C15.7364 13.6667 16.3334 14.2636 16.3334 15C16.3334 15.7364 15.7364 16.3334 15 16.3334Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.00002 4.33335C2.26364 4.33335 1.66669 3.7364 1.66669 3.00002C1.66669 2.26364 2.26364 1.66669 3.00002 1.66669C3.7364 1.66669 4.33335 2.26364 4.33335 3.00002C4.33335 3.7364 3.7364 4.33335 3.00002 4.33335Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M15 4.33335C14.2636 4.33335 13.6667 3.7364 13.6667 3.00002C13.6667 2.26364 14.2636 1.66669 15 1.66669C15.7364 1.66669 16.3334 2.26364 16.3334 3.00002C16.3334 3.7364 15.7364 4.33335 15 4.33335Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.66669 9.00011C9.66669 8.16905 8.89435 7.33331 7.95235 7.33331H7.38102C6.43435 7.33331 5.66669 8.07971 5.66669 9.00011C5.66669 9.79318 6.23669 10.4568 7.00002 10.6253C7.12515 10.6528 7.2529 10.6667 7.38102 10.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.33331 9.00018C8.33331 9.83091 9.10565 10.6666 10.0476 10.6666H10.619C11.5656 10.6666 12.3333 9.92058 12.3333 9.00018C12.3333 8.20678 11.7633 7.54275 11 7.37467C10.8748 7.34711 10.7471 7.33325 10.619 7.33331'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M15 13.6666V4.33331'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3 13.6666V4.33331'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.33331 3H13.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.33331 15H13.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgConstrainedSurface;
