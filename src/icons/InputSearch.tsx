import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgInputSearch = ({
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
			d='M14 8V6.667a3.333 3.333 0 0 0-3.333-3.334H5.333a3.333 3.333 0 0 0 0 6.667H8M13.416 12.746a2 2 0 1 0-2.832-2.825 2 2 0 0 0 2.832 2.825m0 0L14.666 14'
		/>
	</svg>
);
export default SvgInputSearch;
