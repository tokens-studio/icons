import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLoft3D = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={18}
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
			d='M14.667 12.333c-6 0-7.334 4-13.334 4M14.667 1.667c-6 0-7.334 4-13.334 4M8 12V6m0 6 1.667-1.667M8 12l-1.667-1.667M8 6l1.667 1.667M8 6 6.333 7.667'
		/>
	</svg>
);
export default SvgLoft3D;
