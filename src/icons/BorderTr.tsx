import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBorderTr = ({
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
			d='M13.34 13.333V2.667H2.673M2.667 5.333l.007-.006M2.667 8l.007-.007M2.667 10.667l.007-.007M2.667 13.333l.007-.006M10.667 13.333l.007-.006M8 13.333l.007-.006M5.333 13.333l.008-.006'
		/>
	</svg>
);
export default SvgBorderTr;
