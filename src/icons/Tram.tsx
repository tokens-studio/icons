import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTram = ({
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
			d='m10 10.673.007-.007M6 10.673l.007-.007M8.667 4H10a3.333 3.333 0 0 1 3.333 3.333V12c0 .736-.597 1.333-1.333 1.333H4A1.333 1.333 0 0 1 2.667 12V7.333A3.333 3.333 0 0 1 6 4zm0 0 .666-2.667m0 0h2m-2 0H4.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M7 13.333 5.667 15M9 13.333 10.333 15M11 13.333 12.333 15M5 13.333 3.667 15'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6.406 6h3.188c.96 0 1.74.779 1.74 1.74a.26.26 0 0 1-.261.26H4.928a.26.26 0 0 1-.261-.26c0-.961.778-1.74 1.739-1.74'
		/>
	</svg>
);
export default SvgTram;
