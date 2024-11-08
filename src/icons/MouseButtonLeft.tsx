import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMouseButtonLeft = ({
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
			d='M13.333 6.667v2.666a5.333 5.333 0 1 1-10.666 0V6a4.667 4.667 0 0 1 4.666-4.667H8a5.333 5.333 0 0 1 5.333 5.334Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M8 1.333V5.6a.4.4 0 0 1-.4.4H2.667'
		/>
	</svg>
);
export default SvgMouseButtonLeft;
