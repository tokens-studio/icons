import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSwipeTwoFingersRightGesture = ({
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
			d='M7.99992 11.6666C7.99992 12.9553 6.95525 13.9999 5.66659 13.9999C4.37792 13.9999 3.33325 12.9553 3.33325 11.6666C3.33325 10.3779 4.37792 9.33325 5.66659 9.33325C6.95525 9.33325 7.99992 10.3779 7.99992 11.6666ZM7.99992 11.6666H12.6666M12.6666 11.6666L11.0666 9.99992M12.6666 11.6666L11.0666 13.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.99992 4.33333C7.99992 5.622 6.95525 6.66667 5.66659 6.66667C4.37792 6.66667 3.33325 5.622 3.33325 4.33333C3.33325 3.04467 4.37792 2 5.66659 2C6.95525 2 7.99992 3.04467 7.99992 4.33333ZM7.99992 4.33333H12.6666M12.6666 4.33333L11.0666 2.66667M12.6666 4.33333L11.0666 6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSwipeTwoFingersRightGesture;
