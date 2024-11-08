import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCollapse = ({
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
			d='M13.333 13.333 10 10m0 0v2.667M10 10h2.667M2.667 13.333 6 10m0 0v2.667M6 10H3.333M13.333 2.667 10 6m0 0V3.333M10 6h2.667M2.667 2.667 6 6m0 0V3.333M6 6H3.333'
		/>
	</svg>
);
export default SvgCollapse;
