import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShoppingBagPocket = ({
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
			d='m12.84 6.464.924 6c.124.807-.501 1.536-1.318 1.536H3.554a1.333 1.333 0 0 1-1.318-1.536l.923-6c.1-.65.66-1.13 1.318-1.13h7.046c.658 0 1.218.48 1.318 1.13M6 7.333V12M10 7.333V12M9.333 3.333a1.333 1.333 0 1 0-2.666 0'
		/>
	</svg>
);
export default SvgShoppingBagPocket;
