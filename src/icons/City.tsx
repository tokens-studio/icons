import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCity = ({
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
			d='m4.667 6.007.006-.008M7.333 6.007l.007-.008M4.667 8.673l.006-.007M7.333 8.673l.007-.007M4.667 11.34l.006-.007M7.333 11.34l.007-.007M10 14H2.4a.4.4 0 0 1-.4-.4V3.733c0-.22.18-.4.4-.4H6V2.4c0-.22.18-.4.4-.4h3.2c.22 0 .4.18.4.4V6m0 8h3.6a.4.4 0 0 0 .4-.4V6.4a.4.4 0 0 0-.4-.4H10m0 8v-2.667M10 6v2.667m0 2.666V8.667m0 2.666h1.333M10 8.667h1.333'
		/>
	</svg>
);
export default SvgCity;
