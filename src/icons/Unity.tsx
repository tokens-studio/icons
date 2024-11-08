import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUnity = ({
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
			d='M2.667 8.667H9m-6.333 0 2.666 3m-2.666-3 2.666-3m3.667 3 3.333-6M9 8.667l3.333 4.666m0-10.666-4 .666m4-.666 1 3.666m-1 7 1-3.666m-1 3.666-4-.333'
		/>
	</svg>
);
export default SvgUnity;
