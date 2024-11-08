import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGlassFragile = ({
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
			d='M5.333 14.667H8m0 0h2.667m-2.667 0V10M4.385 6.698C5.19 8.455 8 10 8 10s2.811-1.545 3.615-3.302c.867-1.896 0-5.365 0-5.365h-7.23s-.867 3.47 0 5.365'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8.333 1.333 7 4h2L7.667 6.667'
		/>
	</svg>
);
export default SvgGlassFragile;
