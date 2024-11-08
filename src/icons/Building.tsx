import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBuilding = ({
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
			d='m6.667 6.007.006-.008M9.333 6.007l.007-.008M6.667 8.673l.006-.007M9.333 8.673l.007-.007M6.667 11.34l.006-.007M9.333 11.34l.007-.007M4 13.6V3.733c0-.22.18-.4.4-.4H8V2.4c0-.22.18-.4.4-.4h3.2c.22 0 .4.18.4.4v11.2a.4.4 0 0 1-.4.4H4.4a.4.4 0 0 1-.4-.4'
		/>
	</svg>
);
export default SvgBuilding;
