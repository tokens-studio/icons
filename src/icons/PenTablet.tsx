import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPenTablet = ({
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
			d='M14.667 3.333v9.334c0 .736-.597 1.333-1.334 1.333H2.667a1.333 1.333 0 0 1-1.334-1.333V3.333C1.333 2.597 1.93 2 2.667 2h10.666c.737 0 1.334.597 1.334 1.333ZM1.333 8H4M4 2v12'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10.333 7.667 8 9.667M11.333 6.673l.007-.007'
		/>
	</svg>
);
export default SvgPenTablet;
