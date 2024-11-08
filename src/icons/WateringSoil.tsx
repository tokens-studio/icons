import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWateringSoil = ({
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
			d='M1.333 8h1.334M13.333 8h1.334M2 13.34l.007-.008M4 10.673l.007-.007M6 13.34l.007-.008M10 13.34l.007-.008M12 10.673l.007-.007M14 13.34l.007-.008M8.264 2.264l2.07 2.07a3.3 3.3 0 1 1-4.667 0l2.069-2.07a.374.374 0 0 1 .528 0'
		/>
	</svg>
);
export default SvgWateringSoil;
