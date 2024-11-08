import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLotOfCash = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={17}
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
			d='M3.667 12V6.667c0-.737.597-1.334 1.333-1.334h9.333c.737 0 1.334.597 1.334 1.334V12c0 .736-.597 1.333-1.334 1.333H5A1.333 1.333 0 0 1 3.667 12M13.333 9.34l.007-.007M6 9.34l.007-.007'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M3.667 10.667H3a1.333 1.333 0 0 1-1.333-1.334V4c0-.736.597-1.333 1.333-1.333h9.333c.737 0 1.334.597 1.334 1.333v1.333M9.667 10.667a1.333 1.333 0 1 1 0-2.667 1.333 1.333 0 0 1 0 2.667'
		/>
	</svg>
);
export default SvgLotOfCash;
