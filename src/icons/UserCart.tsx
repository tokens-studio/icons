import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUserCart = ({
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
			d='M14.667 8.333 14.11 10m0 0-.778 2.333h-3L9.667 10zM11 13.673l.007-.007M13 13.673l.007-.007M6 7.333A2.667 2.667 0 1 0 6 2a2.667 2.667 0 0 0 0 5.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M1.333 12a4.667 4.667 0 0 1 7.554-3.667'
		/>
	</svg>
);
export default SvgUserCart;
