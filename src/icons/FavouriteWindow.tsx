import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFavouriteWindow = ({
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
			d='M8.667 14h-6a1.333 1.333 0 0 1-1.334-1.333V3.333C1.333 2.597 1.93 2 2.667 2h10.666c.737 0 1.334.597 1.334 1.333v5.334'
		/>
		<path
			stroke='currentColor'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M14.667 11.52c0 .4-.159.786-.441 1.07-.652.657-1.283 1.34-1.958 1.973a.4.4 0 0 1-.548-.012l-1.946-1.96a1.52 1.52 0 0 1 0-2.142 1.52 1.52 0 0 1 2.155 0l.07.071.071-.071a1.518 1.518 0 0 1 2.597 1.07Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M1.333 4.667h13.334M3.333 3.34l.007-.007M5.333 3.34l.007-.007M7.333 3.34l.007-.007'
		/>
	</svg>
);
export default SvgFavouriteWindow;
