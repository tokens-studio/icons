import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPause = ({
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
			d='M4 12.2667V3.73337C4 3.51246 4.17909 3.33337 4.4 3.33337H6.26667C6.48758 3.33337 6.66667 3.51246 6.66667 3.73337V12.2667C6.66667 12.4876 6.48758 12.6667 6.26667 12.6667H4.4C4.17909 12.6667 4 12.4876 4 12.2667Z'
			stroke='currentColor'
		/>
		<path
			d='M9.33325 12.2667V3.73337C9.33325 3.51246 9.51232 3.33337 9.73325 3.33337H11.5999C11.8209 3.33337 11.9999 3.51246 11.9999 3.73337V12.2667C11.9999 12.4876 11.8209 12.6667 11.5999 12.6667H9.73325C9.51232 12.6667 9.33325 12.4876 9.33325 12.2667Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgPause;
