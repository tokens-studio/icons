import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEmojiSurprise = ({
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
			d='M7.99992 11.3333C7.63172 11.3333 7.33325 11.0349 7.33325 10.6667C7.33325 10.2985 7.63172 10 7.99992 10C8.36812 10 8.66659 10.2985 8.66659 10.6667C8.66659 11.0349 8.36812 11.3333 7.99992 11.3333Z'
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
export default SvgEmojiSurprise;
