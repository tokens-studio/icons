import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEmojiSingLeftNote = ({
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
			d='M2.86663 5.39999C2.86663 5.73136 2.598 5.99999 2.26663 5.99999C1.93525 5.99999 1.66663 5.73136 1.66663 5.39999C1.66663 5.06861 1.93525 4.79999 2.26663 4.79999C2.598 4.79999 2.86663 5.06861 2.86663 5.39999Z'
			fill='currentColor'
		/>
		<path
			d='M2.86663 5.4C2.86663 5.73137 2.598 6 2.26663 6C1.93525 6 1.66663 5.73137 1.66663 5.4C1.66663 5.06863 1.93525 4.8 2.26663 4.8C2.598 4.8 2.86663 5.06863 2.86663 5.4ZM2.86663 5.4V2.4C2.86663 2.17909 3.04571 2 3.26663 2H4.33329'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M6.33333 11.3334C7.06971 11.3334 7.66667 10.7364 7.66667 10C7.66667 9.26362 7.06971 8.66669 6.33333 8.66669C5.59695 8.66669 5 9.26362 5 10C5 10.7364 5.59695 11.3334 6.33333 11.3334Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.36621 8.66665C2.70069 12.0355 5.54306 14.6666 8.99996 14.6666C12.6818 14.6666 15.6666 11.6818 15.6666 7.99998C15.6666 4.31808 12.6818 1.33331 8.99996 1.33331C8.05182 1.33331 7.1499 1.53125 6.33329 1.88804'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3333 5.99998C11.5174 5.99998 11.6667 5.85074 11.6667 5.66665C11.6667 5.48255 11.5174 5.33331 11.3333 5.33331C11.1493 5.33331 11 5.48255 11 5.66665C11 5.85074 11.1493 5.99998 11.3333 5.99998Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66671 5.99998C6.8508 5.99998 7.00004 5.85074 7.00004 5.66665C7.00004 5.48255 6.8508 5.33331 6.66671 5.33331C6.48261 5.33331 6.33337 5.48255 6.33337 5.66665C6.33337 5.85074 6.48261 5.99998 6.66671 5.99998Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgEmojiSingLeftNote;
