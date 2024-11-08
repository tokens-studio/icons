import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWifiXmark = ({
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
			d='m8 12.34.007-.008M1.333 4.667c4-3 9.334-3 13.334 0M3.333 7.333c2.667-2 6.667-2 9.334 0M5.667 9.667c1.5-.934 3.166-.934 4.666 0M11.414 14.243l1.414-1.415m0 0 1.415-1.414m-1.415 1.415-1.414-1.415m1.414 1.415 1.415 1.414'
		/>
	</svg>
);
export default SvgWifiXmark;
