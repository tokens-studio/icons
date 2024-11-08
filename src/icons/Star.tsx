import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgStar = ({
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
			d='m5.725 5.49 1.732-3.487a.608.608 0 0 1 1.086 0l1.732 3.488 3.873.563c.497.072.695.679.335 1.027L11.68 9.795l.661 3.833a.605.605 0 0 1-.879.635L8 12.453l-3.463 1.81a.605.605 0 0 1-.88-.635l.662-3.833L1.517 7.08a.602.602 0 0 1 .335-1.027z'
		/>
	</svg>
);
export default SvgStar;
