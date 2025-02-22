import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSwipeTwoFingersLeftGesture = ({
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
			d='M7.99992 11.6666C7.99992 12.9553 9.04459 13.9999 10.3333 13.9999C11.6219 13.9999 12.6666 12.9553 12.6666 11.6666C12.6666 10.3779 11.6219 9.33325 10.3333 9.33325C9.04459 9.33325 7.99992 10.3779 7.99992 11.6666ZM7.99992 11.6666H3.33325M3.33325 11.6666L4.93325 9.99992M3.33325 11.6666L4.93325 13.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.99992 4.33333C7.99992 5.622 9.04459 6.66667 10.3333 6.66667C11.6219 6.66667 12.6666 5.622 12.6666 4.33333C12.6666 3.04467 11.6219 2 10.3333 2C9.04459 2 7.99992 3.04467 7.99992 4.33333ZM7.99992 4.33333H3.33325M3.33325 4.33333L4.93325 2.66667M3.33325 4.33333L4.93325 6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSwipeTwoFingersLeftGesture;
