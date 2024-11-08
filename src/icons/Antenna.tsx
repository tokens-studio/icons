import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAntenna = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={18}
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
			d='M8 4.333A.667.667 0 1 0 8 3a.667.667 0 0 0 0 1.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10.667 1.667s1 .666 1 2c0 1.333-1 2-1 2M5.333 1.667s-1 .666-1 2c0 1.333 1 2 1 2M4.667 16.333l.74-2.666m0 0 .926-3.334m-.926 3.334h5.186m.74 2.666-.74-2.666m0 0-.926-3.334m0 0L8 4.333l-1.667 6m3.334 0H6.333'
		/>
	</svg>
);
export default SvgAntenna;
