import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDropShadowBottom = ({
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
			d='M4 17V20C4 20.5464 4.14609 21.0587 4.40135 21.5M20 17V20C20 20.5464 19.8539 21.0587 19.5987 21.5M4.40135 21.5C4.92006 22.3967 5.88958 23 7 23H17C18.1104 23 19.0799 22.3967 19.5987 21.5M4.40135 21.5H19.5987'
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
export default SvgDropShadowBottom;
