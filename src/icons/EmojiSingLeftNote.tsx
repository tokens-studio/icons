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
		xmlns='http://www.w3.org/2000/svg'
		width={17}
		height={16}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			fill='currentColor'
			d='M2.867 5.4a.6.6 0 1 1-1.2 0 .6.6 0 0 1 1.2 0'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M2.867 5.4a.6.6 0 1 1-1.2 0 .6.6 0 0 1 1.2 0Zm0 0v-3c0-.22.179-.4.4-.4h1.066'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6.333 11.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M2.366 8.667a6.667 6.667 0 1 0 3.967-6.779'
		/>
		<path
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11.333 6a.333.333 0 1 0 0-.667.333.333 0 0 0 0 .667M6.667 6a.333.333 0 1 0 0-.667.333.333 0 0 0 0 .667'
		/>
	</svg>
);
export default SvgEmojiSingLeftNote;
