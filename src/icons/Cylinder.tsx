import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCylinder = ({
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
			strokeWidth={1.5}
			d='M8 1.333c5.333 0 5.333 2 5.333 2s0 2-5.333 2-5.333-2-5.333-2 0-2 5.333-2ZM8 10.667c5.333 0 5.333 2 5.333 2s0 2-5.333 2-5.333-2-5.333-2 0-2 5.333-2Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M13.333 3.333v9.334M2.667 3.333v9.334'
		/>
	</svg>
);
export default SvgCylinder;
