import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEmojiTalkingAngry = ({
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
			d='M6.667 6H5.333m5.334 0H9.333m-8 2a6.667 6.667 0 1 0 13.334 0A6.667 6.667 0 0 0 1.333 8m8 4H6.667v-2c0-.444.266-1.333 1.333-1.333S9.333 9.556 9.333 10z'
		/>
	</svg>
);
export default SvgEmojiTalkingAngry;
