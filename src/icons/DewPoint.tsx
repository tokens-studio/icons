import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDewPoint = ({
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
			d='M3.333 8a3.333 3.333 0 1 0 4 0M3.333 8V2h4v6M7.333 2h1.334M7.333 4h1.334M7.333 6h1.334'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M5.333 9.333a1.333 1.333 0 1 0 0 2.667 1.333 1.333 0 0 0 0-2.667m0 0V6'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={1.5}
			strokeWidth={1.5}
			d='M12.666 2s2 1.996 2 3.258a2 2 0 0 1-2 2 2.006 2.006 0 0 1-2-2c.007-1.263 2-3.258 2-3.258'
			clipRule='evenodd'
		/>
	</svg>
);
export default SvgDewPoint;
