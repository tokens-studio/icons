import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCell2X2 = ({
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
			d='M14 2.4V8H8V2H13.6C13.8209 2 14 2.17909 14 2.4Z'
			stroke='currentColor'
		/>
		<path
			d='M14 13.6V8H8V14H13.6C13.8209 14 14 13.8209 14 13.6Z'
			stroke='currentColor'
		/>
		<path d='M2 8V2.4C2 2.17909 2.17909 2 2.4 2H8V8H2Z' stroke='currentColor' />
		<path
			d='M2 8V13.6C2 13.8209 2.17909 14 2.4 14H8V8H2Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgCell2X2;
