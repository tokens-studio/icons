import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTextMagnifyingGlass = ({
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
			d='m13 13 1 1M9.333 11.333a2 2 0 1 0 4 0 2 2 0 0 0-4 0M6 3.333v8m0 0H4.667m1.333 0h1.333M10 4.667V3.333H2v1.334'
		/>
	</svg>
);
export default SvgTextMagnifyingGlass;
