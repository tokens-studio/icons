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
			d='M1.33337 7.99998C1.33337 11.6818 4.31814 14.6666 8.00004 14.6666C11.6819 14.6666 14.6667 11.6818 14.6667 7.99998C14.6667 4.31808 11.6819 1.33331 8.00004 1.33331'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.66663 10.3333C7.66663 10.3333 8.66663 9 10.6666 9C12.6666 9 13.6666 10.3333 13.6666 10.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 2.66664C2 0.830548 4.66667 0.830508 4.66667 2.66659C4.66667 3.97808 3.33333 3.75949 3.33333 5.33327'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33337 7.33998L3.34004 7.33258'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.6667 5.99998C11.4826 5.99998 11.3334 5.85074 11.3334 5.66665C11.3334 5.48255 11.4826 5.33331 11.6667 5.33331C11.8508 5.33331 12 5.48255 12 5.66665C12 5.85074 11.8508 5.99998 11.6667 5.99998Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.99996 5.99998C6.81589 5.99998 6.66663 5.85074 6.66663 5.66665C6.66663 5.48255 6.81589 5.33331 6.99996 5.33331C7.18403 5.33331 7.33329 5.48255 7.33329 5.66665C7.33329 5.85074 7.18403 5.99998 6.99996 5.99998Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgEmojiPuzzled;
