import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMobileFingerprint = ({
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
			d='M8 7.333V4.241c0-.34.067-.666.19-.97m6.477 4.062V5.21M9.48 1.823c.53-.31 1.167-.49 1.852-.49 1.52 0 2.802.887 3.203 2.1M10 8V6.55M12.667 8V4.569c0-.683-.597-1.236-1.334-1.236-.736 0-1.333.553-1.333 1.236v.53M5.333 11.34l.007-.007M5.333 3.333H2.4a.4.4 0 0 0-.4.4V13.6c0 .221.18.4.4.4h5.867a.4.4 0 0 0 .4-.4v-2.933'
		/>
	</svg>
);
export default SvgMobileFingerprint;
