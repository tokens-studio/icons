import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPcMouse = ({
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
			strokeWidth={1.5}
			d='M8 1.333a5.333 5.333 0 0 1 5.333 5.334v2.666a5.333 5.333 0 1 1-10.666 0V6.667A5.333 5.333 0 0 1 8 1.333Zm0 0V6'
		/>
	</svg>
);
export default SvgPcMouse;
