import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEmojiTalkingHappy = ({
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
			d='M6.667 6H5.333m5.334 0H9.333m-8 2a6.667 6.667 0 1 0 13.334 0A6.667 6.667 0 0 0 1.333 8m8 .667H6.667v2C6.667 11.11 6.933 12 8 12s1.333-.889 1.333-1.333z'
		/>
	</svg>
);
export default SvgEmojiTalkingHappy;
