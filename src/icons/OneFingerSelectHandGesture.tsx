import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgOneFingerSelectHandGesture = ({
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
			d='M5 8 3.664 9.781a1.33 1.33 0 0 0 .084 1.701l2.522 2.752c.253.276.609.433.983.433h3.08c1.6 0 2.667-1.334 2.667-2.667V6.286'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11 6.667v-.381c0-1.524 2-1.524 2 0M9 6.667V5.524C9 4 11 4 11 5.524v1.142M7 6.667V5c0-1.524 2-1.524 2 0v1.667M7 6.667V2.333a1 1 0 1 0-2 0V10'
		/>
	</svg>
);
export default SvgOneFingerSelectHandGesture;
