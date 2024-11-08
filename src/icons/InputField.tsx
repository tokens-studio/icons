import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgInputField = ({
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
			d='M2.667 4h10.666c.737 0 1.334.597 1.334 1.333v5.334c0 .736-.597 1.333-1.334 1.333H2.667a1.333 1.333 0 0 1-1.334-1.333V5.333C1.333 4.597 1.93 4 2.667 4M3.333 5.667h1m0 0h1m-1 0v4.666m0 0h-1m1 0h1'
		/>
	</svg>
);
export default SvgInputField;
