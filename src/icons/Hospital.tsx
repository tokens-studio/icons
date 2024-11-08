import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHospital = ({
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
			strokeWidth={1.5}
			d='M4.267 5.333a.4.4 0 0 0 .4-.4V2.4c0-.22.179-.4.4-.4h5.866c.221 0 .4.18.4.4v2.533c0 .221.18.4.4.4h1.2c.221 0 .4.18.4.4V13.6a.4.4 0 0 1-.4.4H3.067a.4.4 0 0 1-.4-.4V5.733c0-.22.179-.4.4-.4z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6.661 5.333h1.334m0 0h1.333m-1.333 0V4m0 1.333v1.334M10.667 11.34l.006-.007M10.667 8.673l.006-.007M8 8.673l.007-.007M5.333 8.673l.007-.007M5.333 11.34l.007-.007M8 11.34l.007-.007'
		/>
	</svg>
);
export default SvgHospital;
