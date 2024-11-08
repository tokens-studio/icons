import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTrash = ({
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
			d='m13.333 6-1.33 7.564a1.33 1.33 0 0 1-1.313 1.103H5.31a1.33 1.33 0 0 1-1.313-1.103L2.667 6M14 4h-3.75m0 0V2.667c0-.737-.597-1.334-1.333-1.334H7.083c-.736 0-1.333.597-1.333 1.334V4m4.5 0h-4.5M2 4h3.75'
		/>
	</svg>
);
export default SvgTrash;
