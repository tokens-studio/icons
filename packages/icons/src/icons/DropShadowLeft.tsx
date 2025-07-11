import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDropShadowLeft = ({
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
			d='M7 4H4C3.45357 4 2.94126 4.14609 2.5 4.40135M7 20H4C3.45357 20 2.94126 19.8539 2.5 19.5987M2.5 4.40135C1.6033 4.92006 1 5.88958 1 7V17C1 18.1104 1.6033 19.0799 2.5 19.5987M2.5 4.40135V19.5987'
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
export default SvgDropShadowLeft;
