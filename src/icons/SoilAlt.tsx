import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSoilAlt = ({
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
			d='M1.333 8H4M11.333 8h3.334M2 13.34l.007-.008M4 10.673l.007-.007M6 13.34l.007-.008M8 10.673l.007-.007M10 13.34l.007-.008M12 10.673l.007-.007M14 13.34l.007-.008M6 8.667s.6-2.494 2-4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m10.79 1.494.25 2.593c.162 1.682-1.099 3.18-2.781 3.342-1.65.159-3.146-1.048-3.305-2.698a3 3 0 0 1 2.701-3.276l2.765-.266a.34.34 0 0 1 .37.305'
		/>
	</svg>
);
export default SvgSoilAlt;
