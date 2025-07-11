import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgStyle = ({
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
		<circle cx={7} cy={7} r={3} stroke='currentColor' strokeWidth={2} />
		<circle cx={7} cy={17} r={3} stroke='currentColor' strokeWidth={2} />
		<circle cx={17} cy={7} r={3} stroke='currentColor' strokeWidth={2} />
		<circle cx={17} cy={17} r={3} stroke='currentColor' strokeWidth={2} />
	</svg>
);
export default SvgStyle;
