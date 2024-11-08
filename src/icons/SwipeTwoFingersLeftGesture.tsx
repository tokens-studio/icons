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
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={16}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 11.667a2.333 2.333 0 1 0 4.667 0 2.333 2.333 0 0 0-4.667 0m0 0H3.333m0 0L4.933 10m-1.6 1.667 1.6 1.666M8 4.333a2.333 2.333 0 1 0 4.667 0 2.333 2.333 0 0 0-4.667 0m0 0H3.333m0 0 1.6-1.666m-1.6 1.666L4.933 6'
		/>
	</svg>
);
export default SvgSwipeTwoFingersLeftGesture;
