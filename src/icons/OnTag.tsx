import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgOnTag = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
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
			d='M1.667 10V6a4 4 0 0 1 4-4h6.666a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H5.667a4 4 0 0 1-4-4Z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M7 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10.333 10V6L13 10V6'
		/>
	</svg>
);
export default SvgOnTag;
