import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGoogleDriveSync = ({
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
			d='M6.09528 2.0025L9.90477 2M6.09528 2.0025L1.33337 10.0025M6.09528 2.0025L9.36311 8.33333M9.90477 2L3.71671 14M9.90477 2L13.4751 8M1.33337 10.0025L3.71671 14M1.33337 10.0025H8.33337M3.71671 14H8.00244'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M15.1108 11.7778C14.6984 10.7313 13.7562 10 12.66 10C11.4878 10 10.4917 10.8363 10.1311 12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.9967 11.8482H14.9333C15.1542 11.8482 15.3333 11.6691 15.3333 11.4482V10.3667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.2224 13.5556C10.6349 14.602 11.577 15.3334 12.6732 15.3334C13.8455 15.3334 14.8415 14.497 15.2021 13.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3366 13.4852H10.4C10.1791 13.4852 10 13.6643 10 13.8852V14.9667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgGoogleDriveSync;
