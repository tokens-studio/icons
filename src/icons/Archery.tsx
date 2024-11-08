import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgArchery = ({
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
			d='M5.333 8h6m-6 0L4 6.667H1.333L2.667 8 1.333 9.333H4zm6 0L10 6.667M11.333 8 10 9.333M10.667 15C12.507 15 14 11.866 14 8s-1.492-7-3.333-7-3.334 3.134-3.334 7 1.493 7 3.334 7'
		/>
	</svg>
);
export default SvgArchery;
