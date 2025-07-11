import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDropShadowTop = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 24}
		height={props.height || 24}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (24 / (Number(props.width) || 24))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			opacity={0.4}
			d='M20 7V4C20 3.45357 19.8539 2.94126 19.5987 2.5M4 7V4C4 3.45357 4.14609 2.94126 4.40135 2.5M19.5987 2.5C19.0799 1.6033 18.1104 1 17 1H7C5.88958 1 4.92006 1.6033 4.40135 2.5M19.5987 2.5H4.40135'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
		<rect
			x={4}
			y={4}
			width={16}
			height={16}
			rx={3}
			stroke='currentColor'
			strokeWidth={2}
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDropShadowTop;
