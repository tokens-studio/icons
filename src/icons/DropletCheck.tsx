import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDropletCheck = ({
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
			d='M8.667 14.38a5.421 5.421 0 0 1-4.5-9.214l3.55-3.55a.4.4 0 0 1 .566 0l3.55 3.55a5.42 5.42 0 0 1 1.327 5.5M10.667 13.333 12 14.667 14.667 12'
		/>
	</svg>
);
export default SvgDropletCheck;
