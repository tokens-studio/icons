import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCubeDots = ({
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
			d='m8.33 13.144 4-2.285a.67.67 0 0 0 .337-.58V6.388c0-.24-.129-.46-.336-.579l-4-2.286a.67.67 0 0 0-.662 0l-4 2.286a.67.67 0 0 0-.336.579v3.893c0 .239.128.46.336.579l4 2.285a.67.67 0 0 0 .662 0M3.667 6.333 8 8.667m0 0 4.333-2.334M8 8.667V13M2 2.007l.007-.008M2 14.007l.007-.008M14 2.007l.007-.008M14 14.007l.007-.008'
		/>
	</svg>
);
export default SvgCubeDots;
