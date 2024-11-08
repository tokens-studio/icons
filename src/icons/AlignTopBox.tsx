import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAlignTopBox = ({
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
			d='m2.667 10.667.006-.008M2.667 13.333l.006-.007M5.333 13.333l.007-.007M8 13.333l.007-.007M10.667 13.333l.006-.007M13.333 13.333l.007-.007M13.333 10.667l.007-.008M2.667 8V2.667h10.666V8z'
		/>
	</svg>
);
export default SvgAlignTopBox;
