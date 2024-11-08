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
			d='M4.333 8a2.333 2.333 0 1 1 0-4.667 2.333 2.333 0 0 1 0 4.667m0 0v4.667m0 0L6 11.067m-1.667 1.6-1.666-1.6M11.667 8a2.333 2.333 0 1 1 0-4.667 2.333 2.333 0 0 1 0 4.667m0 0v4.667m0 0 1.666-1.6m-1.666 1.6L10 11.067'
		/>
	</svg>
);
export default SvgSwipeTwoFingersDownGesture;
