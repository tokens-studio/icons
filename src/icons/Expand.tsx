import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgExpand = ({
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
			d='M6 6 2.667 2.667m0 0v2.666m0-2.666h2.666M10 6l3.333-3.333m0 0v2.666m0-2.666h-2.666M6 10l-3.333 3.333m0 0v-2.666m0 2.666h2.666M10 10l3.333 3.333m0 0v-2.666m0 2.666h-2.666'
		/>
	</svg>
);
export default SvgExpand;
