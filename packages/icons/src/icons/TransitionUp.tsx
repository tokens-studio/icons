import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTransitionUp = ({
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
			d='M12 14.6666H4C2.89543 14.6666 2 13.7712 2 12.6666V11.3333C2 10.2287 2.89543 9.33325 4 9.33325H12C13.1046 9.33325 14 10.2287 14 11.3333V12.6666C14 13.7712 13.1046 14.6666 12 14.6666Z'
			stroke='currentColor'
		/>
		<path
			d='M2 5.33325V3.99992C2 2.52716 3.19391 1.33325 4.66667 1.33325H11.3333C12.8061 1.33325 14 2.52716 14 3.99992V5.33325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 9.33333V4M8 4L6 6M8 4L10 6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTransitionUp;
