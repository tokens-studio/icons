import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgScanBarcode = ({
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
			d='M6.667 8V4h.666M6.667 8h.666V4M6.667 12v-2h.666M7.333 10v2h-.666M4.667 4v4M4.667 10v2M9.333 4v4M9.333 10v2M11.333 4v4M11.333 10v2M4 2H2v2M1.333 8h13.334M12 2h2v2M4 14H2v-2M12 14h2v-2'
		/>
	</svg>
);
export default SvgScanBarcode;
