import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCubeDots = ({
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
			d='M8.33065 13.1443L12.3307 10.8586C12.5384 10.7399 12.6666 10.519 12.6666 10.2798V6.38689C12.6666 6.14766 12.5384 5.92676 12.3307 5.80806L8.33065 3.52235C8.12572 3.40523 7.87412 3.40523 7.66919 3.52235L3.66916 5.80806C3.46145 5.92676 3.33325 6.14766 3.33325 6.38689V10.2798C3.33325 10.519 3.46145 10.7399 3.66916 10.8586L7.66919 13.1443C7.87412 13.2615 8.12572 13.2615 8.33065 13.1443Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.66675 6.33331L8.00008 8.66665M8.00008 8.66665L12.3334 6.33331M8.00008 8.66665V13'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 2.00674L2.00667 1.99933'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 14.0067L2.00667 13.9993'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 2.00674L14.0067 1.99933'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 14.0067L14.0067 13.9993'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCubeDots;
