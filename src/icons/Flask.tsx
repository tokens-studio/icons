import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFlask = ({
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
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M12.333 10H3.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10.667 2.667H5.333M6 3v3.84c0 .318-.114.626-.321.868l-3.358 3.918c-.207.241-.321.549-.321.867v.174C2 13.403 2.597 14 3.333 14h9.334c.736 0 1.333-.597 1.333-1.333v-.174c0-.318-.114-.626-.321-.867l-3.358-3.918A1.33 1.33 0 0 1 10 6.84V3M8 6.007l.007-.008M7.333 1.34l.007-.007'
		/>
	</svg>
);
export default SvgFlask;
