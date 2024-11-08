import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSoundMin = ({
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
			d='M2.333 9.238V6.762c0-.736.597-1.333 1.334-1.333H5.6c.13 0 .258-.039.367-.11l4-2.637A.667.667 0 0 1 11 3.238v9.524c0 .53-.59.849-1.034.556l-4-2.636a.67.67 0 0 0-.366-.11H3.667a1.333 1.333 0 0 1-1.334-1.334Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M13.667 10V6'
		/>
	</svg>
);
export default SvgSoundMin;
