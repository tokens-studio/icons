import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPasswordCheck = ({
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
			d='M14 8.667V5.333C14 4.597 13.403 4 12.667 4H3.333C2.597 4 2 4.597 2 5.333v4c0 .737.597 1.334 1.333 1.334H8M9.667 12.333 11 13.667 13.667 11M8 7.34l.007-.007M10.667 7.34l.006-.007M5.333 7.34l.007-.007'
		/>
	</svg>
);
export default SvgPasswordCheck;
