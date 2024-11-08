import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEmojiPuzzled = ({
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
			d='M1.333 8A6.667 6.667 0 1 0 8 1.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M7.667 10.333s1-1.333 3-1.333 3 1.333 3 1.333M2 2.667C2 .83 4.667.83 4.667 2.667c0 1.311-1.334 1.092-1.334 2.666M3.333 7.34l.007-.007'
		/>
		<path
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11.667 6a.333.333 0 1 1 0-.667.333.333 0 0 1 0 .667M7 6a.333.333 0 1 1 0-.667A.333.333 0 0 1 7 6'
		/>
	</svg>
);
export default SvgEmojiPuzzled;
