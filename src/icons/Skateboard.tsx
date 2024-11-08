import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSkateboard = ({
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
			d='M4.333 10.667a1 1 0 1 0 0-2 1 1 0 0 0 0 2M1.333 6l2.223.667h8.888L14.668 6M11.667 10.667a1 1 0 1 0 0-2 1 1 0 0 0 0 2'
		/>
	</svg>
);
export default SvgSkateboard;
