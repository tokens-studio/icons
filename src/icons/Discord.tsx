import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDiscord = ({
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
			d='M3.667 10.667c3.333 1.666 5.333 1.666 8.666 0'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10.333 11.667 11 13s2.78-.886 3.667-2.333c0-.667.353-5.431-2-7-1-.667-2.667-1-2.667-1L9.333 4H8'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M5.686 11.667 5.019 13s-2.781-.886-3.667-2.333c0-.667-.353-5.431 2-7 1-.667 2.667-1 2.667-1L6.686 4h1.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M5.667 9.333c-.553 0-1-.597-1-1.333s.447-1.333 1-1.333 1 .597 1 1.333-.448 1.333-1 1.333M10.333 9.333c-.552 0-1-.597-1-1.333s.448-1.333 1-1.333c.553 0 1 .597 1 1.333s-.447 1.333-1 1.333'
		/>
	</svg>
);
export default SvgDiscord;
