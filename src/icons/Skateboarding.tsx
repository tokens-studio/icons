import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSkateboarding = ({
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
			d='m3.333 12.667 1.556.666h6.222l1.556-.666M5.333 14.673l.007-.007M10.667 14.673l.006-.007M4.667 5.222l2-1c1.333-.666 2.847.379 2.847.379L6.64 6.69l2.692 2.198v2.667M6.366 8.896l-.827.552H3.333M10.11 6.14h1.815M11.333 4a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667'
		/>
	</svg>
);
export default SvgSkateboarding;
