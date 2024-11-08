import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHorizontalSplit = ({
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
			d='M6.667 8H1.333m0 0 2.334-2.333M1.333 8l2.334 2.333M9.333 8h5.334m0 0-2.334-2.333M14.667 8l-2.334 2.333M6.667 14V2M9.333 14V2'
		/>
	</svg>
);
export default SvgHorizontalSplit;
