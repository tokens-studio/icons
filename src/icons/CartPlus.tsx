import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCartPlus = ({
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
			d='M2 4h12.667l-2 6.667H4zm0 0-.5-1.667M6.661 7.333h1.334m0 0h1.333m-1.333 0V6m0 1.333v1.334M7.333 13a1 1 0 1 1-2 0M11.333 13a1 1 0 0 1-2 0'
		/>
	</svg>
);
export default SvgCartPlus;
