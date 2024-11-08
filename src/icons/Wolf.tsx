import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWolf = ({
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
			d='M3.875 4.667s-.303.418-.665 1.11m0 0C2.671 6.81 2 8.45 2 10.223c1.875 0 3 1.111 3 1.111s.75 3.334 3 3.334 3-3.334 3-3.334 1.125-1.11 3-1.11c0-1.774-.671-3.414-1.21-4.445m-9.58 0s-1.96-1.482 0-4.445c.665.37 2.54 1.852 2.54 1.852s1.125-.74 2.25-.74 2.25.74 2.25.74 1.875-1.481 2.625-1.852c1.875 2.963-.085 4.445-.085 4.445m-.665-1.111s.303.418.665 1.11M7.333 12H8m0 0h.667M8 12v.667M5.667 8.333l1 1M10.333 8.333l-1 1'
		/>
	</svg>
);
export default SvgWolf;
