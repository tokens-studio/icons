import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBackward15Seconds = ({
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
			d='M2 8.667a6 6 0 1 0 6-6M6 6v4.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10 6H8.667A.667.667 0 0 0 8 6.667v1c0 .368.298.666.667.666h.666c.369 0 .667.299.667.667v1a.667.667 0 0 1-.667.667H8M8 2.667H3m0 0 1.333-1.334M3 2.667 4.333 4'
		/>
	</svg>
);
export default SvgBackward15Seconds;
