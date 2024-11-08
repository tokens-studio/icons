import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgVerticalSplit = ({
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
			d='M8 9.333v5.334m0 0 2.333-2.334M8 14.667l-2.333-2.334M8 6.667V1.333m0 0 2.333 2.334M8 1.333 5.667 3.667M2 9.333h12M2 6.667h12'
		/>
	</svg>
);
export default SvgVerticalSplit;
