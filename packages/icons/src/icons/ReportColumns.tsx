import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgReportColumns = ({
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
			d='M2 4.93333V2.4C2 2.17909 2.17909 2 2.4 2H6.26667C6.48758 2 6.66667 2.17909 6.66667 2.4V4.93333C6.66667 5.15425 6.48758 5.33333 6.26667 5.33333H2.4C2.17909 5.33333 2 5.15425 2 4.93333Z'
			stroke='currentColor'
		/>
		<path
			d='M9.33331 13.6V11.0666C9.33331 10.8457 9.51238 10.6666 9.73331 10.6666H13.6C13.8209 10.6666 14 10.8457 14 11.0666V13.6C14 13.8209 13.8209 14 13.6 14H9.73331C9.51238 14 9.33331 13.8209 9.33331 13.6Z'
			stroke='currentColor'
		/>
		<path
			d='M9.33331 8.26667V2.4C9.33331 2.17909 9.51238 2 9.73331 2H13.6C13.8209 2 14 2.17909 14 2.4V8.26667C14 8.4876 13.8209 8.66667 13.6 8.66667H9.73331C9.51238 8.66667 9.33331 8.4876 9.33331 8.26667Z'
			stroke='currentColor'
		/>
		<path
			d='M2 13.6V7.73337C2 7.51244 2.17909 7.33337 2.4 7.33337H6.26667C6.48758 7.33337 6.66667 7.51244 6.66667 7.73337V13.6C6.66667 13.821 6.48758 14 6.26667 14H2.4C2.17909 14 2 13.821 2 13.6Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgReportColumns;
