import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMotorcycle = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
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
			d='M4.333 12.667a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334M13.667 10l-2-6 .666-.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11.667 5.667h-3l-3 2M4.667 10.333H9l.667-1.666 2.333-3M6.667 6.667c-1.334-1-3.334-1-4.667 0M13.667 12.667a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334'
		/>
	</svg>
);
export default SvgMotorcycle;
