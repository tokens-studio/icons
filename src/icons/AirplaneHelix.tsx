import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAirplaneHelix = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
		height={18}
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
			strokeMiterlimit={1.5}
			strokeWidth={1.5}
			d='M9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={1.5}
			strokeWidth={1.5}
			d='M9 7S7.675 5.683 7.667 4.333c0-1.328-.034-2.667 1.333-2.666 1.299 0 1.331 1.317 1.333 2.666C10.335 5.657 9 7 9 7M11 9s1.317-1.325 2.667-1.333c1.328 0 2.667-.034 2.666 1.333 0 1.299-1.317 1.331-2.666 1.333C12.343 10.335 11 9 11 9M7 9s-1.317 1.325-2.667 1.333c-1.328 0-2.667.034-2.666-1.333 0-1.299 1.317-1.331 2.666-1.333C5.657 7.665 7 9 7 9M9 11s1.325 1.317 1.333 2.667c0 1.328.034 2.667-1.333 2.666-1.299 0-1.331-1.317-1.333-2.666C7.665 12.343 9 11 9 11'
			clipRule='evenodd'
		/>
	</svg>
);
export default SvgAirplaneHelix;
