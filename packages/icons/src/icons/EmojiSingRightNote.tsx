import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEmojiSingRightNote = ({
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
			d='M13.8667 5.39999C13.8667 5.73136 13.5981 5.99999 13.2667 5.99999C12.9353 5.99999 12.6667 5.73136 12.6667 5.39999C12.6667 5.06861 12.9353 4.79999 13.2667 4.79999C13.5981 4.79999 13.8667 5.06861 13.8667 5.39999Z'
			fill='currentColor'
		/>
		<path
			d='M13.8667 5.4C13.8667 5.73137 13.5981 6 13.2667 6C12.9353 6 12.6667 5.73137 12.6667 5.4C12.6667 5.06863 12.9353 4.8 13.2667 4.8C13.5981 4.8 13.8667 5.06863 13.8667 5.4ZM13.8667 5.4V2.4C13.8667 2.17909 14.0458 2 14.2667 2H15.3334'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M10.6666 11.3334C9.93019 11.3334 9.33325 10.7364 9.33325 10C9.33325 9.26362 9.93019 8.66669 10.6666 8.66669C11.403 8.66669 11.9999 9.26362 11.9999 10C11.9999 10.7364 11.403 11.3334 10.6666 11.3334Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.6337 8.66665C14.2992 12.0355 11.4568 14.6666 7.99992 14.6666C4.31802 14.6666 1.33325 11.6818 1.33325 7.99998C1.33325 4.31808 4.31802 1.33331 7.99992 1.33331C8.94805 1.33331 9.84999 1.53125 10.6666 1.88804'
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
export default SvgEmojiSingRightNote;
