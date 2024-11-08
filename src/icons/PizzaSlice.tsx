import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPizzaSlice = ({
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
			d='m9.333 6.007.007-.008M5.333 5.34l.007-.007M5.333 9.34l.007-.007'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M4 12.667 1.49 2.003a.4.4 0 0 1 .503-.476l10.674 3.14'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M14.799 5.616a1.167 1.167 0 0 0-2.264-.566c-.261 1.045-1.267 2.7-2.818 4.25-1.534 1.534-3.432 2.796-5.312 3.23a1.167 1.167 0 0 0 .524 2.274c2.453-.566 4.722-2.138 6.438-3.854 1.699-1.7 3.026-3.712 3.432-5.334Z'
		/>
	</svg>
);
export default SvgPizzaSlice;
