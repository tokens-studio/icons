import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHalfCookie = ({
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
			d='M14.533 9.333a6.667 6.667 0 1 1-7.2-7.967'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M4.333 6.667a.333.333 0 1 1 0-.667.333.333 0 0 1 0 .667M13.667 2.667a.333.333 0 1 1 0-.667.333.333 0 0 1 0 .667M8 12.667a.667.667 0 1 1 0-1.334.667.667 0 0 1 0 1.334M4.667 10.007l.006-.008M11.333 10.007l.007-.008M7.333 8.007l.007-.008M14 6.007l.007-.008M11.333 4.007l.007-.008M7.333 1.333c-.333 1 .333 2 1.39 2C7.334 5.667 8.668 8 12 7.667c0 1.666 1.667 2 2.466 1.675'
		/>
	</svg>
);
export default SvgHalfCookie;
