import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgInnerShadow = ({
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
		<rect
			opacity={0.4}
			x={6}
			y={6}
			width={12}
			height={12}
			stroke='currentColor'
			strokeWidth={2}
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
export default SvgInnerShadow;
