import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgKeyframePlus = ({
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
			d='M10.667 3.333h2m0 0h2m-2 0v-2m0 2v2M11.213 9.552l-3.55 3.994a1.333 1.333 0 0 1-1.993 0L2.12 9.552a1.333 1.333 0 0 1 0-1.771l3.55-3.993a1.333 1.333 0 0 1 1.993 0l3.55 3.993c.449.505.449 1.266 0 1.771'
		/>
	</svg>
);
export default SvgKeyframePlus;
