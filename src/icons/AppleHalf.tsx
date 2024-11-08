import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAppleHalf = ({
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
			d='M8.098 14.176 8 14.156l-.098.02c-1.585.317-3.08.141-4.173-.733-1.087-.87-1.896-2.527-1.896-5.443 0-2.982.672-4.194 1.557-4.636.463-.232 1.062-.299 1.823-.211s1.64.325 2.629.655l.174.058.17-.068c1.654-.662 3.141-.916 4.186-.428.98.457 1.795 1.692 1.795 4.63 0 2.916-.81 4.573-1.896 5.443-1.093.874-2.589 1.05-4.173.733Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 3.667C8 2 7.333 1.333 6 1.333'
		/>
		<path stroke='currentColor' strokeWidth={1.5} d='M8 4v10' />
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10 8v1.333'
		/>
	</svg>
);
export default SvgAppleHalf;
