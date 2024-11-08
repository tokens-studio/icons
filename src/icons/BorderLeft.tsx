import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBorderLeft = ({
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
			d='m13.34 13.333-.007.007M13.34 10.667l-.007.006M13.34 8l-.007.007M13.34 5.333l-.007.007M13.34 2.667l-.007.006M5.34 2.667l-.007.006M8.007 2.667l-.008.006M8.007 8l-.008.007M10.673 2.667l-.007.006M5.34 13.333l-.007.007M8.007 13.333l-.008.007M10.673 13.333l-.007.007M2.667 2.667v10.666'
		/>
	</svg>
);
export default SvgBorderLeft;
