import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAntennaOff = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={17}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 3.333A.667.667 0 1 0 8 2a.667.667 0 0 0 0 1.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m4.667 15.333.74-2.666m0 0 .926-3.334m-.926 3.334h5.186m.74 2.666-.74-2.666m0 0-.79-2.843m-3.47-.49H9m-2.667 0 .534-1.92m.763-2.747L8 3.333l.698 2.512M2 2l12 12'
		/>
	</svg>
);
export default SvgAntennaOff;
