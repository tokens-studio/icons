import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSwipeTwoFingersDownGesture = ({
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
			d='M4.33333 7.99992C3.04467 7.99992 2 6.95525 2 5.66659C2 4.37792 3.04467 3.33325 4.33333 3.33325C5.622 3.33325 6.66667 4.37792 6.66667 5.66659C6.66667 6.95525 5.622 7.99992 4.33333 7.99992ZM4.33333 7.99992V12.6666M4.33333 12.6666L6 11.0666M4.33333 12.6666L2.66667 11.0666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.6666 7.99992C10.3779 7.99992 9.33325 6.95525 9.33325 5.66659C9.33325 4.37792 10.3779 3.33325 11.6666 3.33325C12.9553 3.33325 13.9999 4.37792 13.9999 5.66659C13.9999 6.95525 12.9553 7.99992 11.6666 7.99992ZM11.6666 7.99992V12.6666M11.6666 12.6666L13.3333 11.0666M11.6666 12.6666L9.99992 11.0666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSwipeTwoFingersDownGesture;
