import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAppleShortcuts = ({
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
			d='M6.568 9.756 2.434 7.125a1.333 1.333 0 0 1 0-2.25l4.134-2.63a2.67 2.67 0 0 1 2.864 0l4.134 2.63a1.333 1.333 0 0 1 0 2.25l-4.134 2.63a2.67 2.67 0 0 1-2.864 0Z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='m12.19 8 1.376.875a1.333 1.333 0 0 1 0 2.25l-4.134 2.63a2.67 2.67 0 0 1-2.864 0l-4.134-2.63a1.333 1.333 0 0 1 0-2.25L3.81 8'
		/>
	</svg>
);
export default SvgAppleShortcuts;
