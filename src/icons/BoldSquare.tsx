import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBoldSquare = ({
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
			strokeWidth={1.5}
			d='M2 13.6V2.4c0-.22.18-.4.4-.4h11.2c.22 0 .4.18.4.4v11.2a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4Z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M8 8H6m2 0s1.667 0 1.667-1.667C9.667 4.667 8 4.667 8 4.667H6.4a.4.4 0 0 0-.4.4V8m2 0s2 0 2 1.833c0 1.834-2 1.834-2 1.834H6.4a.4.4 0 0 1-.4-.4V8'
		/>
	</svg>
);
export default SvgBoldSquare;
