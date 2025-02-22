import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSwipeTwoFingersUpGesture = ({
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
			d='M4.33333 7.99992C3.04467 7.99992 2 9.04459 2 10.3333C2 11.6219 3.04467 12.6666 4.33333 12.6666C5.622 12.6666 6.66667 11.6219 6.66667 10.3333C6.66667 9.04459 5.622 7.99992 4.33333 7.99992ZM4.33333 7.99992V3.33325M4.33333 3.33325L6 4.93325M4.33333 3.33325L2.66667 4.93325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.6666 7.99992C10.3779 7.99992 9.33325 9.04459 9.33325 10.3333C9.33325 11.6219 10.3779 12.6666 11.6666 12.6666C12.9553 12.6666 13.9999 11.6219 13.9999 10.3333C13.9999 9.04459 12.9553 7.99992 11.6666 7.99992ZM11.6666 7.99992V3.33325M11.6666 3.33325L13.3333 4.93325M11.6666 3.33325L9.99992 4.93325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSwipeTwoFingersUpGesture;
