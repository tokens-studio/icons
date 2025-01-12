import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEmojiLookLeft = ({
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
			d='M5.66671 5.99998C5.48261 5.99998 5.33337 5.85074 5.33337 5.66665C5.33337 5.48255 5.48261 5.33331 5.66671 5.33331C5.8508 5.33331 6.00004 5.48255 6.00004 5.66665C6.00004 5.85074 5.8508 5.99998 5.66671 5.99998Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.63857 9.99998C1.44027 9.36865 1.33337 8.69678 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998C14.6667 11.6818 11.6819 14.6666 8.00004 14.6666C5.01495 14.6666 2.48809 12.7047 1.63857 9.99998ZM1.63857 9.99998H4.66671'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgEmojiLookLeft;
