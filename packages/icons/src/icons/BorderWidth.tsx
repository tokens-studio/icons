import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBorderWidth = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<rect
			x={1.91382}
			y={1.91666}
			width={12.1582}
			height={1.5}
			fill='currentColor'
		/>
		<rect
			x={1.91382}
			y={6.04587}
			width={12.1582}
			height={2.5}
			fill='currentColor'
		/>
		<rect
			x={1.91382}
			y={11.1751}
			width={12.1582}
			height={3.5}
			fill='currentColor'
		/>
	</svg>
);
export default SvgBorderWidth;
