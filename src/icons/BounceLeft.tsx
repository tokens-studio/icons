import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBounceLeft = ({
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
			d='M4 4.667A1.333 1.333 0 1 1 4 2a1.333 1.333 0 0 1 0 2.667M14 10.333c-2-.666-3.667-.333-5.333 3-.334-2-1.334-5-2.334-6.666'
		/>
	</svg>
);
export default SvgBounceLeft;
