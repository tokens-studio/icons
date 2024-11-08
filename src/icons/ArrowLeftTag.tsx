import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgArrowLeftTag = ({
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
			d='M11.167 8H4.5m0 0 1.833 1.833M4.5 8l1.833-1.833'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M1.333 10V6A2.667 2.667 0 0 1 4 3.333h8A2.667 2.667 0 0 1 14.667 6v4A2.667 2.667 0 0 1 12 12.667H4A2.667 2.667 0 0 1 1.333 10Z'
		/>
	</svg>
);
export default SvgArrowLeftTag;
