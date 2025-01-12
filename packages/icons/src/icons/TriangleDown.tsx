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
		<path
			d='M10.0343 7H5.96569C5.60932 7 5.43086 7.43086 5.68284 7.68284L7.71716 9.71716C7.87337 9.87337 8.12663 9.87337 8.28284 9.71716L10.3172 7.68284C10.5691 7.43086 10.3907 7 10.0343 7Z'
			fill='currentColor'
		/>
	</svg>
);
export default SvgTriangleDown;
