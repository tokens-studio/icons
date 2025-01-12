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
			d='M2.66663 11.3243V4.67564C2.66663 4.47857 2.81017 4.31086 3.00487 4.28044L12.8716 2.73877C13.1142 2.70087 13.3333 2.88844 13.3333 3.13398V12.866C13.3333 13.1115 13.1142 13.299 12.8716 13.2612L3.00487 11.7195C2.81017 11.689 2.66663 11.5214 2.66663 11.3243Z'
			stroke='currentColor'
		/>
		<path d='M2.66663 8H13.3333' stroke='currentColor' />
		<path d='M7 3.66675V12.3334' stroke='currentColor' />
	</svg>
);
export default SvgWindows;
