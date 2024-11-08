import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCodeBrackets = ({
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
			d='M6 14h-.667A1.333 1.333 0 0 1 4 12.667V9.333C4 8.667 3 8 3 8s1-.667 1-1.333V3.333C4 2.596 4.597 2 5.333 2H6M10 14h.667c.736 0 1.333-.596 1.333-1.333V9.333C12 8.667 13 8 13 8s-1-.667-1-1.333V3.333C12 2.596 11.403 2 10.667 2H10'
		/>
	</svg>
);
export default SvgCodeBrackets;
