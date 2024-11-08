import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgErase = ({
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
			d='M14 14H6M10.593 9.926l-4.95-4.95M1.929 8.404l6.128-6.128c.52-.52 1.365-.52 1.886 0l3.3 3.3c.52.52.52 1.365 0 1.886L7.08 13.623a1.286 1.286 0 0 1-1.819 0L1.93 10.29a1.333 1.333 0 0 1 0-1.886'
		/>
	</svg>
);
export default SvgErase;
