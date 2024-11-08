import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFingerprintWindow = ({
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
			strokeWidth={1.5}
			d='M6 14H2.667a1.333 1.333 0 0 1-1.334-1.333V3.333C1.333 2.597 1.93 2 2.667 2h10.666c.737 0 1.334.597 1.334 1.333v4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 14v-3.092c0-.34.067-.666.19-.97M14.667 14v-2.123M9.48 8.49A3.67 3.67 0 0 1 11.333 8c1.52 0 2.802.887 3.203 2.1M10 14.667v-1.451m2.667 1.45v-3.43c0-.683-.597-1.236-1.334-1.236-.736 0-1.333.553-1.333 1.235v.53M1.333 4.667h13.334M3.333 3.34l.007-.007M5.333 3.34l.007-.007M7.333 3.34l.007-.007'
		/>
	</svg>
);
export default SvgFingerprintWindow;
