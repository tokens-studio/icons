import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBorderRight = ({
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
			d='m2.667 13.333.007.007M2.667 10.667l.007.006M2.667 8l.007.007M2.667 5.333l.007.007M2.667 2.667l.007.006M10.667 2.667l.007.006M8 2.667l.007.006M8 8l.007.007M5.333 2.667l.008.006M10.667 13.333l.007.007M8 13.333l.007.007M5.333 13.333l.008.007M13.34 2.667v10.666'
		/>
	</svg>
);
export default SvgBorderRight;
