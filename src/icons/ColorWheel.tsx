import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgColorWheel = ({
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
			d='M8 14.667A6.667 6.667 0 1 1 8 1.333a6.667 6.667 0 0 1 0 13.334'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 10.667a2.667 2.667 0 1 1 0-5.334 2.667 2.667 0 0 1 0 5.334M8 1.333v4M8 10.667v4M1.333 8h4M10.667 8h4M3.286 3.286l2.828 2.828M9.886 9.886l2.828 2.828M3.286 12.714l2.828-2.828M9.886 6.114l2.828-2.828'
		/>
	</svg>
);
export default SvgColorWheel;
