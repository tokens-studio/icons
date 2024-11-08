import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMessageText = ({
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
			d='M4.667 8h6.666M4.667 5.333h4'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M2 13.526V3.333C2 2.597 2.597 2 3.333 2h9.334C13.403 2 14 2.597 14 3.333V10c0 .736-.597 1.333-1.333 1.333h-7.36c-.405 0-.788.184-1.04.5l-1.555 1.943a.4.4 0 0 1-.712-.25Z'
		/>
	</svg>
);
export default SvgMessageText;
