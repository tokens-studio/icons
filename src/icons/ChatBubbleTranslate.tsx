import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgChatBubbleTranslate = ({
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
			d='M8 14.667a6.667 6.667 0 1 0-5.775-3.334l-.558 3 3-.558c.98.567 2.119.892 3.333.892'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M4.667 5.678H8m0 0h2.143M8 5.678V4.667m3.333 1.011h-1.19m0 0C9.753 7.061 8.934 8.37 8 9.518m0 0c-.773.952-1.626 1.795-2.38 2.482M8 9.518c-.476-.552-1.143-1.447-1.333-1.851M8 9.518l1.429 1.47'
		/>
	</svg>
);
export default SvgChatBubbleTranslate;
