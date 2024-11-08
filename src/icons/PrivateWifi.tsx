import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPrivateWifi = ({
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
			d='m8 12.34.007-.007M1.333 4.667c4-3 9.334-3 13.334 0M3.333 7.333c2.667-2 6.667-2 9.334 0M5.667 9.667c1.5-.934 3.166-.934 4.666 0M14.111 12.333h.156c.22 0 .4.18.4.4v1.534a.4.4 0 0 1-.4.4h-2.534a.4.4 0 0 1-.4-.4v-1.534a.4.4 0 0 1 .4-.4h.156m2.222 0v-1.166c0-.39-.222-1.167-1.111-1.167s-1.111.778-1.111 1.167v1.166m2.222 0H11.89'
		/>
	</svg>
);
export default SvgPrivateWifi;
