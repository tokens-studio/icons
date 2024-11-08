import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGasTankDroplet = ({
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
			strokeMiterlimit={1.5}
			strokeWidth={1.493}
			d='M2 5.041c0-.943.764-1.708 1.709-1.708h.957V2H8v1.333h1.334A4.666 4.666 0 0 1 14 7.998v4.295a1.71 1.71 0 0 1-1.709 1.708H3.71A1.71 1.71 0 0 1 2 12.293z'
			clipRule='evenodd'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={1.5}
			strokeWidth={1.5}
			d='M8 6s2 1.996 2 3.258a2 2 0 0 1-2 2 2.006 2.006 0 0 1-2-2C6.007 7.995 8 6 8 6'
			clipRule='evenodd'
		/>
	</svg>
);
export default SvgGasTankDroplet;
