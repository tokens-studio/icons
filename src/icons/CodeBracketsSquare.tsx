import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCodeBracketsSquare = ({
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
			d='M6.667 11.333h-.445A1.333 1.333 0 0 1 4.89 10V8.74C4.889 8.37 4 8 4 8s.889-.37.889-.74V6c0-.736.597-1.333 1.333-1.333h.445M9.333 11.333h.445c.736 0 1.333-.597 1.333-1.333V8.74c0-.37.889-.74.889-.74s-.889-.37-.889-.74V6c0-.736-.597-1.333-1.333-1.333h-.445'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M14 2.4v11.2a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4V2.4c0-.22.18-.4.4-.4h11.2c.22 0 .4.18.4.4'
		/>
	</svg>
);
export default SvgCodeBracketsSquare;
