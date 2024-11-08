import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDepth = ({
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
			d='M1.333 13.333h13.334M3.333 2.667h9.334M2 10.673l.007-.007M14.006 10.673 14 10.666M2.667 8.007l.006-.008M13.34 8.007l-.007-.008M3.333 5.34l.007-.007M12.673 5.34l-.007-.007M8 4.667v6.666m0-6.666-1 1m1-1 1 1m-1 5.666-2-2m2 2 2-2'
		/>
	</svg>
);
export default SvgDepth;
