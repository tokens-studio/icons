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
			d='M5.66671 9.33335C5.48261 9.33335 5.33337 9.18409 5.33337 9.00002C5.33337 8.81595 5.48261 8.66669 5.66671 8.66669C5.8508 8.66669 6.00004 8.81595 6.00004 9.00002C6.00004 9.18409 5.8508 9.33335 5.66671 9.33335Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.3333 9.33335C10.1493 9.33335 10 9.18409 10 9.00002C10 8.81595 10.1493 8.66669 10.3333 8.66669C10.5174 8.66669 10.6667 8.81595 10.6667 9.00002C10.6667 9.18409 10.5174 9.33335 10.3333 9.33335Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66671 12H9.33337M14.6667 7.99998C14.6667 11.6818 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6818 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgEmojiLookDown;
