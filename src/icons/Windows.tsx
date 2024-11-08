import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWindows = ({
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
			strokeWidth={1.5}
			d='M2.667 11.324V4.676a.4.4 0 0 1 .338-.396l9.867-1.541a.4.4 0 0 1 .461.395v9.732a.4.4 0 0 1-.461.395L3.005 11.72a.4.4 0 0 1-.338-.396ZM2.667 8h10.666M7 3.667v8.666'
		/>
	</svg>
);
export default SvgWindows;
