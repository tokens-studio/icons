import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLeaf = ({
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
			d='M4.667 14S5 11 7.333 8.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m12.753 2.828.396 4.116c.25 2.591-1.692 4.898-4.283 5.147-2.542.245-4.845-1.613-5.09-4.155a4.624 4.624 0 0 1 4.16-5.046l4.38-.422a.4.4 0 0 1 .437.36'
		/>
	</svg>
);
export default SvgLeaf;
