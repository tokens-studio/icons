import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgQuote = ({
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
			strokeWidth={1.5}
			d='M6.667 8H3.333a.667.667 0 0 1-.666-.667V5c0-.368.298-.667.666-.667H6c.368 0 .667.299.667.667zm0 0C6.667 9.667 6 10.667 4 11.667M13.333 8H10a.667.667 0 0 1-.667-.667V5c0-.368.299-.667.667-.667h2.667c.368 0 .666.299.666.667zm0 0c0 1.667-.666 2.667-2.666 3.667'
		/>
	</svg>
);
export default SvgQuote;
