import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBeachBag = ({
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
			d='m1.846 8.667-.421-2.191A.4.4 0 0 1 1.818 6h12.364a.4.4 0 0 1 .393.476l-.421 2.19m-12.308 0h12.308m-12.308 0 .41 2.667m11.898-2.666-.41 2.666m-11.488 0 .359 2.328A.4.4 0 0 0 3.01 14h9.98a.4.4 0 0 0 .396-.34l.358-2.327m-11.488 0h11.488'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M5.333 6V3.333C5.333 2.597 5.93 2 6.667 2h2.666c.737 0 1.334.597 1.334 1.333V6'
		/>
	</svg>
);
export default SvgBeachBag;
