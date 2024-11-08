import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgKeyframePlusIn = ({
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
			d='m13.851 8.897-4.864 5.351a1.333 1.333 0 0 1-1.974 0L2.15 8.897a1.333 1.333 0 0 1 0-1.794l4.864-5.351a1.333 1.333 0 0 1 1.974 0l4.864 5.351a1.333 1.333 0 0 1 0 1.794M6 8h2m0 0h2M8 8V6m0 2v2'
		/>
	</svg>
);
export default SvgKeyframePlusIn;
