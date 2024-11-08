import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTriangleDown = ({
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
			fill='currentColor'
			d='M10.034 7H5.966a.4.4 0 0 0-.283.683l2.034 2.034a.4.4 0 0 0 .566 0l2.034-2.034A.4.4 0 0 0 10.034 7'
		/>
	</svg>
);
export default SvgTriangleDown;
