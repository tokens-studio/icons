import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEmojiSingRight = ({
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
			d='M10.6666 11.3334C9.93019 11.3334 9.33325 10.7364 9.33325 10C9.33325 9.26362 9.93019 8.66669 10.6666 8.66669C11.403 8.66669 11.9999 9.26362 11.9999 10C11.9999 10.7364 11.403 11.3334 10.6666 11.3334Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.99992 14.6666C11.6818 14.6666 14.6666 11.6818 14.6666 7.99998C14.6666 4.31808 11.6818 1.33331 7.99992 1.33331C4.31802 1.33331 1.33325 4.31808 1.33325 7.99998C1.33325 11.6818 4.31802 14.6666 7.99992 14.6666Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.66659 5.99998C5.48249 5.99998 5.33325 5.85074 5.33325 5.66665C5.33325 5.48255 5.48249 5.33331 5.66659 5.33331C5.85068 5.33331 5.99992 5.48255 5.99992 5.66665C5.99992 5.85074 5.85068 5.99998 5.66659 5.99998Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.3333 5.99998C10.1493 5.99998 10 5.85074 10 5.66665C10 5.48255 10.1493 5.33331 10.3333 5.33331C10.5174 5.33331 10.6667 5.48255 10.6667 5.66665C10.6667 5.85074 10.5174 5.99998 10.3333 5.99998Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.66659 5.99998C5.48249 5.99998 5.33325 5.85074 5.33325 5.66665C5.33325 5.48255 5.48249 5.33331 5.66659 5.33331C5.85068 5.33331 5.99992 5.48255 5.99992 5.66665C5.99992 5.85074 5.85068 5.99998 5.66659 5.99998Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.3333 5.99998C10.1493 5.99998 10 5.85074 10 5.66665C10 5.48255 10.1493 5.33331 10.3333 5.33331C10.5174 5.33331 10.6667 5.48255 10.6667 5.66665C10.6667 5.85074 10.5174 5.99998 10.3333 5.99998Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgEmojiSingRight;
