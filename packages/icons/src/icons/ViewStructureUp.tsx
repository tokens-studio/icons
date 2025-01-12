import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgViewStructureUp = ({
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
			d='M2 6.26667V2.4C2 2.17909 2.17909 2 2.4 2H13.6C13.8209 2 14 2.17909 14 2.4V6.26667C14 6.48758 13.8209 6.66667 13.6 6.66667H2.4C2.17909 6.66667 2 6.48758 2 6.26667Z'
			stroke='currentColor'
		/>
		<path
			d='M9.33337 13.5999V9.73325C9.33337 9.51232 9.51244 9.33325 9.73337 9.33325H13.6C13.821 9.33325 14 9.51232 14 9.73325V13.5999C14 13.8209 13.821 13.9999 13.6 13.9999H9.73337C9.51244 13.9999 9.33337 13.8209 9.33337 13.5999Z'
			stroke='currentColor'
		/>
		<path
			d='M2 13.5999V9.73325C2 9.51232 2.17909 9.33325 2.4 9.33325H6.26667C6.48758 9.33325 6.66667 9.51232 6.66667 9.73325V13.5999C6.66667 13.8209 6.48758 13.9999 6.26667 13.9999H2.4C2.17909 13.9999 2 13.8209 2 13.5999Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgViewStructureUp;
