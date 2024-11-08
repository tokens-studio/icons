import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDrag = ({
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
			d='M8 8 2.667 2.667m0 0v2.666m0-2.666h2.666M8 8l5.333-5.333m0 0v2.666m0-2.666h-2.666M8 8l-5.333 5.333m0 0v-2.666m0 2.666h2.666M8 8l5.333 5.333m0 0v-2.666m0 2.666h-2.666'
		/>
	</svg>
);
export default SvgDrag;
