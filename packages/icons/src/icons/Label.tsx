import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLabel = ({
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
			d='M2 11.6V4.4C2 4.17909 2.17909 4 2.4 4H11.1193C11.253 4 11.3779 4.06684 11.4521 4.17812L13.8521 7.77813C13.9417 7.91247 13.9417 8.08753 13.8521 8.22187L11.4521 11.8219C11.3779 11.9331 11.253 12 11.1193 12H2.4C2.17909 12 2 11.8209 2 11.6Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgLabel;
