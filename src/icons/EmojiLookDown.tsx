import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEmojiLookDown = ({
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
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M5.667 9.333a.333.333 0 1 1 0-.666.333.333 0 0 1 0 .666M10.333 9.333a.333.333 0 1 1 0-.666.333.333 0 0 1 0 .666'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6.667 12h2.666m5.334-4A6.667 6.667 0 1 1 1.333 8a6.667 6.667 0 0 1 13.334 0'
		/>
	</svg>
);
export default SvgEmojiLookDown;
