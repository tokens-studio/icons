import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRoundFlask = ({
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
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M12.667 10H3.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10.667 2.667H5.333M10 3v2.835c0 .51.297.964.719 1.248 1.472.99 2.614 2.662 2.614 4.558 0 .541-.075 1.065-.217 1.559-.143.5-.63.8-1.15.8H4.034c-.52 0-1.008-.3-1.15-.8a5.7 5.7 0 0 1-.217-1.559c0-1.896 1.142-3.568 2.614-4.558.422-.284.719-.739.719-1.248V3M8.667 4.673l.006-.007M7.333 1.34l.007-.007'
		/>
	</svg>
);
export default SvgRoundFlask;
