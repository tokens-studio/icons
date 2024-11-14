import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBorderStyle = ({
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
			d='m13.333 13.34.007-.007M10.667 13.34l.006-.007M8 13.34l.007-.007M5.333 13.34l.007-.007M2.667 13.34l.006-.007'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='square'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M2.667 2.667h10.666M11.833 8.007l1.5-.007M7.25 8.007 8.75 8M2.667 8.007 4.167 8'
		/>
	</svg>
);
export default SvgBorderStyle;
