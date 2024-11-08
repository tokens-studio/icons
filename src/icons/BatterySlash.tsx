import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBatterySlash = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
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
			d='m3 2 12 12M16.333 6.667v2.666M4.667 4H3c-.736 0-1.333.597-1.333 1.333v5.334C1.667 11.403 2.264 12 3 12h9.667m1.666-2.333V5.333C14.333 4.597 13.736 4 13 4H8.667'
		/>
	</svg>
);
export default SvgBatterySlash;
