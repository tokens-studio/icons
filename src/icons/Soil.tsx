import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSoil = ({
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
			d='M1.333 2.667h13.334M2 5.34l.007-.007M2 10.673l.007-.007M4 8.007l.007-.008M4 13.34l.007-.008M6 5.34l.007-.007M6 10.673l.007-.007M8 8.007l.007-.008M8 13.34l.007-.008M10 5.34l.007-.007M10 10.673l.007-.007M12 8.007l.007-.008M12 13.34l.007-.008M14 5.34l.007-.007M14 10.673l.007-.007'
		/>
	</svg>
);
export default SvgSoil;
