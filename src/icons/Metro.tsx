import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMetro = ({
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
			d='m9.333 10.673.007-.007M6.667 10.673l.006-.007M14.667 8v2a3.333 3.333 0 0 1-3.334 3.333H4.667A3.333 3.333 0 0 1 1.333 10V8a6.667 6.667 0 0 1 13.334 0'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M12 8v2a3.333 3.333 0 0 1-3.333 3.333H7.333A3.333 3.333 0 0 1 4 10V8a3.333 3.333 0 0 1 3.333-3.333h1.334A3.333 3.333 0 0 1 12 8'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M7 13.333 5.667 15M9 13.333 10.333 15M11 13.333 12.333 15M5 13.333 3.667 15'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M7.857 6.667h.286c.657 0 1.19.533 1.19 1.19A.143.143 0 0 1 9.19 8H6.81a.143.143 0 0 1-.143-.143c0-.657.533-1.19 1.19-1.19'
		/>
	</svg>
);
export default SvgMetro;
